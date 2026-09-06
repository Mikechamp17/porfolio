# porfolio

Personal portfolio on Next.js 16 + Tailwind v4, with an "ask me anything" chat that answers from your own content using retrieval-augmented generation (RAG).

## How the chat works

1. `content/*.md` is the only source of truth for what the assistant knows.
2. `npm run ingest` splits the markdown into chunks, embeds them locally with `Xenova/all-MiniLM-L6-v2` (transformers.js, no API key), and syncs them into a Supabase `chunks` table (pgvector).
3. `POST /api/chat` embeds the visitor's question, pulls the closest chunks via the `match_chunks` RPC, and streams an answer from Groq's free tier.

## Setup

1. Install and configure:

   ```bash
   npm install
   cp .env.example .env.local   # then fill it in
   ```

   | Variable | Where to get it |
   | --- | --- |
   | `GROQ_API_KEY` | https://console.groq.com/keys |
   | `GROQ_MODEL` | optional, defaults to `llama-3.3-70b-versatile` |
   | `SUPABASE_URL` | Supabase → Project Settings → API |
   | `SUPABASE_PUBLISHABLE_KEY` | same page, "publishable" key |
   | `SUPABASE_SERVICE_ROLE_KEY` | same page, "service_role" key. Local and CI only, never in the browser. |

2. Create the table and RPC once per Supabase project by running `supabase/migrations/20260906_create_chunks.sql` in the SQL editor.

3. Write your content in `content/me.md`, then embed it:

   ```bash
   npm run ingest
   ```

   Re-run after every content edit. Unchanged chunks are skipped, removed ones are deleted.

4. Run the site:

   ```bash
   npm run dev
   ```

## Deploying to Vercel

Set `GROQ_API_KEY`, `SUPABASE_URL`, and `SUPABASE_PUBLISHABLE_KEY` in the project's environment variables. The service role key is not needed at runtime. The first chat request after a cold start downloads the embedding model (about 25 MB) into `/tmp`, so expect a few seconds of latency once per instance.

## Abuse limits

The chat route caps conversations at 12 turns and 1000 characters per message, and rate-limits each IP to 20 requests per 10 minutes per server instance. Groq's free tier adds its own per-minute and per-day limits on top.
