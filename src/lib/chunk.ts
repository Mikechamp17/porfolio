export type RawChunk = {
  source: string;
  heading: string | null;
  content: string;
};

/**
 * Split markdown into embedding-sized chunks. Chunks never cross a heading,
 * and each chunk is prefixed with its heading so the embedding carries the
 * section context.
 */
export function chunkMarkdown(
  markdown: string,
  source: string,
  maxChars = 700,
): RawChunk[] {
  const chunks: RawChunk[] = [];
  let heading: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    const text = buffer.join("\n\n").trim();
    if (text) {
      chunks.push({
        source,
        heading,
        content: heading ? `${heading}\n${text}` : text,
      });
    }
    buffer = [];
  };

  const blocks = markdown.split(/\n\s*\n/);
  for (const raw of blocks) {
    const block = raw.trim();
    if (!block) continue;

    const headingMatch = block.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flush();
      heading = headingMatch[2].trim();
      continue;
    }

    const pending = buffer.join("\n\n").length + block.length;
    if (pending > maxChars && buffer.length > 0) flush();
    buffer.push(block);
  }
  flush();

  return chunks;
}
