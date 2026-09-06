-- RAG knowledge base: one row per embedded chunk of content/*.md.
create extension if not exists vector with schema extensions;

create table if not exists public.chunks (
  id bigint generated always as identity primary key,
  source text not null,
  heading text,
  content text not null,
  content_hash text not null unique,
  embedding extensions.vector(384) not null,
  created_at timestamptz not null default now()
);

create index if not exists chunks_embedding_idx
  on public.chunks using hnsw (embedding extensions.vector_cosine_ops);

-- No direct access for anon: reads go through the security-definer RPC below,
-- writes use the service role from scripts/ingest.ts.
alter table public.chunks enable row level security;

create or replace function public.match_chunks(
  query_embedding extensions.vector(384),
  match_count int default 5,
  min_similarity float default 0.2
)
returns table (
  id bigint,
  source text,
  heading text,
  content text,
  similarity float
)
language sql
stable
security definer
set search_path = public, extensions
as $$
  select
    c.id,
    c.source,
    c.heading,
    c.content,
    1 - (c.embedding <=> query_embedding) as similarity
  from public.chunks c
  where 1 - (c.embedding <=> query_embedding) > min_similarity
  order by c.embedding <=> query_embedding
  limit match_count;
$$;

revoke all on function public.match_chunks(extensions.vector, int, float) from public;
grant execute on function public.match_chunks(extensions.vector, int, float)
  to anon, authenticated, service_role;
