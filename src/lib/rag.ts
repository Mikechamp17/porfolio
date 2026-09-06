import { createClient } from "@supabase/supabase-js";
import { embed } from "./embeddings";

export type MatchedChunk = {
  id: number;
  source: string;
  heading: string | null;
  content: string;
  similarity: number;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable ${name}`);
  return value;
}

/** Read-only client. Relies on the match_chunks RPC being security definer. */
export function supabaseReader() {
  return createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_PUBLISHABLE_KEY"),
    { auth: { persistSession: false } },
  );
}

/** Service-role client for ingestion. Never import this from a route. */
export function supabaseAdmin() {
  return createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false } },
  );
}

export async function retrieve(
  query: string,
  { count = 5, minSimilarity = 0.2 } = {},
): Promise<MatchedChunk[]> {
  const [vector] = await embed([query]);
  const { data, error } = await supabaseReader().rpc("match_chunks", {
    query_embedding: vector,
    match_count: count,
    min_similarity: minSimilarity,
  });
  if (error) throw new Error(`match_chunks failed: ${error.message}`);
  return (data ?? []) as MatchedChunk[];
}
