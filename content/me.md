# About Mike Schaerer

Mike Schaerer is a Full-Stack AI Developer based in Malta. He builds internal AI tools end to end, from the first sketch to the thing running in production, for a B2B iGaming company. He builds the whole thing: the interface, the backend, the deployment, and the support after it ships. Most of his work is about taking something slow and manual and turning it into something people can do in a few clicks.

## How Mike got into development

Mike left South Africa for Malta with very little and started out as a part-time IT technician: fixing laptops, setting up accounts, keeping the office running. He taught himself to code alongside the job, then moved onto a small rapid-development team building AI-powered tools for the business. He came into development via IT operations, entirely self-taught.

## What Mike does now

Mike designs internal tools, writes the frontend and backend, deploys them, and supports them once they're live. Owning the whole lifecycle shapes how he builds: he keeps things simple because he's the one who gets the call when they break. He also co-hosts an internal AI education series for non-technical teams and is the person the team puts in front of the camera for internal demos.

## Build, ship, teach

Build: full-stack web apps, the screens people click on, the backend that powers them, and the database underneath. Angular on the front, Python on the back.

Ship: Mike doesn't hand off at "it works on my machine." He deploys to Kubernetes, wires up the pipelines, and runs the thing in production.

Teach: he runs internal sessions that show non-technical teams how to get real value out of AI tools, and turns what they learn into working automations.

## AI Documentation Assistant

A chat tool that answers questions about the company's technical documentation and links you straight to the exact page it got the answer from. Instead of hunting through hundreds of help articles, you ask a question and get a sourced answer.

Mike's role: took over the core search engine from a senior colleague and built everything around it: the login and access control, the interface, and a repeatable test suite that measures whether the answers are actually correct.

Result: live company-wide, used across departments. It replaced a paid third-party tool that wasn't accurate enough for the business's domain. Built with Python, FastAPI, retrieval-augmented generation (RAG), Keycloak SSO, and Kubernetes.

## Compliance Certificate Manager

A system for tracking regulatory certificates across a heavily regulated industry. It reads the official certification PDFs, pulls out the important details automatically, and keeps track of what's valid, what's expiring, and what's covered.

Mike's role: designed and built it end to end, the data model, the document extraction, the API, and the deployment. Wrote a full test plan against real certification documents from multiple regulatory bodies.

Result: turns a manual document-reading exercise into structured, searchable data. Built with Python, FastAPI, PostgreSQL, AWS S3, and LLM-based document extraction.

## Operations Self-Service Portal

Gives the operations team a simple interface to do things that previously required a developer: managing account settings, email templates, and customer mailers.

Mike's role: chose the architecture and built it, deliberately keeping the moving parts to a minimum so it's cheap to run and easy to support.

Result: fewer interruptions for engineers, faster turnaround for the ops team. Built with Angular, FastAPI, PostgreSQL, and Keycloak.

## Email Automation Agent

Watches an inbox for a specific type of incoming email, works out which response template fits, and prepares a draft reply automatically. A human still reviews and sends.

Mike built it solo as a lightweight automation with no servers to maintain. It cuts a repetitive daily task down to a quick review. Built with Google Apps Script and an LLM API.

## Device Fleet and Asset Management

Brought the company's laptops and devices under proper management: a single source of truth for who has what, tied to automated device enrolment and security policies.

Mike's role: ran the audit, designed the data model, and handled the rollout. A messy spreadsheet situation became a maintained asset system. Built with JumpCloud MDM and Snipe-IT.

## Discuss Business AI, internal education series

A recurring session series Mike co-hosts teaching non-technical teams how to use AI tools properly. Not demos, but practical workflows they can use the same afternoon. Covered so far: AI assistants and custom agents, research and knowledge tools, and building real email and workflow automations. Mike's view: being able to explain this stuff clearly to non-engineers is half the job.

## Side projects

AskTheRoom: QR-code Q&A for a paediatric conference. Attendees scan, submit questions from their phones, and the room sees them in realtime. No account, no install. Built with Next.js, Supabase, and Vercel.

Pooty Box: Mike's own product, living-grass dog potty patches. A single-page site with full checkout, using Stripe Checkout so card data stays off his infrastructure. Built with Next.js and Stripe.

This portfolio site: the chat assistant on the homepage is a retrieval-augmented generation (RAG) system Mike built. Content is chunked and embedded locally with all-MiniLM-L6-v2, stored in Supabase with pgvector, and answers are streamed from Groq. Source: https://github.com/Mikechamp17/porfolio

## Skills

Frontend: Angular, TypeScript, HTML/CSS, Next.js.
Backend: Python, FastAPI, PostgreSQL, REST APIs.
AI and LLMs: retrieval-augmented generation (RAG), LLM-powered document extraction, prompt design, evaluation and testing of AI outputs.
Infrastructure and DevOps: Kubernetes, ArgoCD, AWS, CI/CD pipelines, Docker.
Auth and security: Keycloak, SSO / OAuth, access control.
IT operations: JumpCloud MDM, device management, asset management.

## Experience

Full-Stack AI Developer at a B2B iGaming company in Malta (current role). Building AI-powered internal tools end to end: architecture, frontend, backend, deployment and production support. Also co-hosts the company's internal AI education series.

IT Technician at the same company (earlier role). Started part-time handling device management, onboarding and day-to-day IT support. Taught himself to code and moved into development.

## How Mike works

Fewer moving parts wins: he owns deployment and support, so he'd rather build something simple he can fix at 9pm than something clever he can't.

Ship it, then improve it: real usage tells you more than planning does.

Write things down: every problem solved becomes a note, a test, or a template so the next one is faster.

Explain it plainly: if he can't describe what a tool does to someone non-technical, it's probably not designed well enough.

## Beyond the code

Mike came to Malta with nothing and built a career from the ground up. He took a self-taught route into development via IT operations. He's comfortable being the public face of a team: presenting, demoing, teaching. In his own time he's working through a structured software architecture curriculum.

## Availability and contact

Mike is open to conversations about full-stack and AI engineering roles. GitHub: https://github.com/Mikechamp17. His email and LinkedIn are in the contact section of the site.
