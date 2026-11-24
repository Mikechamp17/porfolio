# Mike Schaerer

## Summary

Mike Schaerer is a full-stack developer based in Malta. He builds AI tools end to end, from the backend and retrieval layer to deployment and the interface people actually use. He cares about software that does one job well and is honest about what it knows. This site is a portfolio of that work.

## What he optimizes for

- Fewer moving parts. Before adding a service, queue or tool, he asks what has to run in production and whether it needs to.
- Grounded AI. Retrieval over improvisation, citations back to the source, and a plain "I don't know" when the source is silent.
- Privacy by default. If data does not need to leave the browser, it stays there.
- Finished work. He would rather ship a small thing that works than demo a large thing that almost does.

## Background

Mike came to software from a different direction. He worked as a personal trainer and boxing coach, moved into IT operations, and taught himself to code. His first real project was an internal inventory app that replaced a spreadsheet process. He now works as a developer on a small engineering team at a software company, building internal AI tools. He keeps his employer's work separate from this site.

## How he works

- He reads the code, not just the ticket. On one task he found that a security audit script only understood one package manager's output and silently reported "clean" for projects using the others.
- He tests against real data. He builds small, realistic test sets and keeps evaluation questions he can rerun after every change.
- He codifies what he learns. Fixes and conventions go into his project instructions and AI agents, so the next task starts from a better place.
- He avoids overclaiming. He would rather state a known gap than hide it.
- He shares how he builds. He runs internal sessions on AI-assisted development and likes teaching what he has figured out.

## Skills

### Strongest

Python with FastAPI and PostgreSQL. LLM applications and retrieval-augmented generation, including document extraction with the Claude API, chunking, citations and evaluation. Kubernetes deployment with Helm, ArgoCD and CI pipelines. AI-assisted development with Claude Code, including custom agents and project-level instructions.

### Comfortable

Angular. Next.js. Keycloak and single sign-on. Slack apps and bots. Google Apps Script automation. IT operations tooling such as device management.

### Currently going deeper on

System design, automated testing, cloud infrastructure and IAM, and observability for background jobs.

## Project: ImageLeak

- Problem: Photos carry hidden metadata, such as location and device details, that people share without knowing.
- What he built: A browser-based tool that strips metadata from photos. Processing stays on the device; files do not need to be uploaded to a server.
- Stack: Client-side web app.
- Outcome: A small privacy tool that does one job: strip image metadata without sending the photo elsewhere.
- Code: private for now.

## Work: Websites customers can edit

Mike has also built websites where the customer can edit the content themselves, so text and pages stay in the customer's hands without needing a developer for every change. AI tools are his main focus; editable websites are another kind of site he has shipped.

## Project: This site's chat

- Problem: A portfolio page can only say so much before it turns into a wall of text.
- What he built: A retrieval-augmented chat that answers follow-up questions using only the notes on this site. If the notes do not cover something, it says so.
- Stack: Next.js, local embeddings with Xenova/all-MiniLM-L6-v2 via transformers.js, Supabase pgvector, Groq for the language model.
- Outcome: It answers from a small set of written notes and declines anything outside them.
- Code: https://github.com/Mikechamp17/porfolio

## Work: Internal documentation assistant

At work, Mike extended an existing retrieval core into a company-wide assistant that answers staff questions from product documentation. He added single sign-on, deep-link citations back to the exact source page, improved chunking, a rerunnable evaluation set, and a Slack agent with per-user access. It is live for the whole company on the web and in Slack. Details beyond this are internal.

## Work: Compliance document extraction

Mike also built an internal pipeline that reads PDF compliance certificates, extracts the key data with a two-phase LLM process, matches it against a product catalogue with fuzzy matching, and shows the gaps in a dashboard. The stack is Angular, FastAPI, PostgreSQL, object storage and the Claude API, deployed on Kubernetes. In internal testing it extracted accurately from real certificates, including non-English and multi-product documents. Details beyond this are internal.

## Working style

Mike works best async and in writing. He prefers small scopes with a clear definition of done, honest timelines, and early feedback over polished surprises. He has opinions about design and will share them, then defer to whoever owns the decision.

## Availability

Mike works full time and picks up side projects selectively. He is most interested in small, well-defined projects where grounded AI or privacy-first tooling is the core of the problem. If someone has something in mind, a short note via GitHub or LinkedIn is the best route for now.

## Contact

- GitHub: https://github.com/Mikechamp17
- LinkedIn: https://linkedin.com/in/michael-schaerer-5619082a4

GitHub or LinkedIn is the best way to reach him until an email is listed here.

## FAQ: Is he looking for a job?

He works full time as a developer and is not job hunting.

## FAQ: Does he freelance?

Sometimes. He is selective and takes on the occasional side project when the work is interesting and a good fit. A short note via GitHub or LinkedIn is the best way to start that conversation.

## FAQ: Can he help with my project?

Possibly. Send him a short note about what you are building and he will let you know if it is a fit.

## FAQ: Can he build a specific thing?

The projects on this site show the kind of work he does. If something is not covered here, the chat cannot say. Reach out and ask.

## FAQ: How much does he charge?

That is not covered here. Reach out if it is relevant.

## FAQ: Who does he work for?

He works as a developer at a software company. He keeps his employer's work separate from this site.

## FAQ: How do I reach him?

GitHub at https://github.com/Mikechamp17 or LinkedIn at https://linkedin.com/in/michael-schaerer-5619082a4.

## FAQ: What is this chat?

A small assistant that answers questions using only the notes on this site. It cannot see anything else and will say when it does not know.
