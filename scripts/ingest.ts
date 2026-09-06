/**
 * Chunk every markdown file in content/, embed it, and sync the result into
 * the Supabase `chunks` table. Unchanged chunks are skipped, edited chunks are
 * re-embedded, and chunks that no longer exist are deleted.
 *
 *   npm run ingest
 */
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { chunkMarkdown } from "../src/lib/chunk";
import { embed } from "../src/lib/embeddings";
import { supabaseAdmin } from "../src/lib/rag";

const CONTENT_DIR = path.join(process.cwd(), "content");
const BATCH = 16;

async function main() {
  const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"));
  if (files.length === 0) throw new Error(`No markdown files in ${CONTENT_DIR}`);

  const chunks = [];
  for (const file of files) {
    const markdown = await readFile(path.join(CONTENT_DIR, file), "utf8");
    chunks.push(...chunkMarkdown(markdown, file));
  }
  const withHash = chunks.map((c) => ({
    ...c,
    content_hash: createHash("sha256").update(c.content).digest("hex"),
  }));
  console.log(`${withHash.length} chunks from ${files.length} file(s)`);

  const db = supabaseAdmin();
  const { data: existing, error: readError } = await db
    .from("chunks")
    .select("content_hash");
  if (readError) throw readError;
  const known = new Set((existing ?? []).map((r) => r.content_hash as string));

  const fresh = withHash.filter((c) => !known.has(c.content_hash));
  console.log(`${fresh.length} new or changed, ${withHash.length - fresh.length} unchanged`);

  for (let i = 0; i < fresh.length; i += BATCH) {
    const batch = fresh.slice(i, i + BATCH);
    const vectors = await embed(batch.map((c) => c.content));
    const rows = batch.map((c, j) => ({ ...c, embedding: vectors[j] }));
    const { error } = await db
      .from("chunks")
      .upsert(rows, { onConflict: "content_hash" });
    if (error) throw error;
    console.log(`embedded ${Math.min(i + BATCH, fresh.length)}/${fresh.length}`);
  }

  const current = withHash.map((c) => c.content_hash);
  const { error: deleteError, count } = await db
    .from("chunks")
    .delete({ count: "exact" })
    .not("content_hash", "in", `(${current.map((h) => `"${h}"`).join(",")})`);
  if (deleteError) throw deleteError;
  console.log(`removed ${count ?? 0} stale chunk(s)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
