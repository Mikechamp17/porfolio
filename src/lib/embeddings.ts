import {
  env,
  pipeline,
  type FeatureExtractionPipeline,
} from "@huggingface/transformers";

export const EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";
export const EMBEDDING_DIMS = 384;

// Vercel's function filesystem is read-only except /tmp.
if (process.env.VERCEL) {
  env.cacheDir = "/tmp/transformers-cache";
}

let extractor: Promise<FeatureExtractionPipeline> | null = null;

function getExtractor() {
  if (!extractor) {
    extractor = pipeline("feature-extraction", EMBEDDING_MODEL, {
      dtype: "q8",
    });
  }
  return extractor;
}

/** Returns L2-normalised embeddings, one per input text. */
export async function embed(texts: string[]): Promise<number[][]> {
  const model = await getExtractor();
  const output = await model(texts, { pooling: "mean", normalize: true });
  return output.tolist() as number[][];
}
