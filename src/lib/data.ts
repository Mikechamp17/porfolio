export const profile = {
  name: "Michael Schaerer",
  title: "Full-Stack AI Developer",
  location: "Malta",
  tagline:
    "I build internal AI tools end to end — from the first sketch to the thing running in production.",
  intro:
    "I'm a full-stack developer working on AI-powered internal tools for a B2B iGaming company in Malta. I build the whole thing — the interface, the backend, the deployment, and the support after it ships. Most of my work is about taking something slow and manual and turning it into something people can do in a few clicks.",
  bio: [
    "I left South Africa for Malta with very little, and started out as a part-time IT technician — fixing laptops, setting up accounts, keeping the office running. I taught myself to code alongside the job, and moved onto a small rapid-development team building AI-powered tools for the business.",
    "Now I build those tools end to end. I design them, write the frontend and backend, deploy them, and support them once they're live. Owning the whole lifecycle changes how you build: I care a lot about keeping things simple, because I'm the one who gets the call when they break.",
    "Alongside the development work, I co-host an internal AI education series that teaches non-technical teams how to actually use AI tools in their day-to-day work — and I'm the person the team puts in front of the camera for internal demos.",
  ],
  beyond: [
    "Came to Malta with nothing and built a career from the ground up",
    "Self-taught route into development, via IT operations",
    "Comfortable being the public face of a team: presenting, demoing, teaching",
    "Working through a structured software architecture curriculum in my own time",
  ],
  closing: "Open to conversations about full-stack and AI engineering roles.",
};

export const pillars: { title: string; body: string }[] = [
  {
    title: "Build",
    body: "Full-stack web apps — the screens people click on, the backend that powers them, and the database underneath. Angular on the front, Python on the back.",
  },
  {
    title: "Ship",
    body: "I don't hand off at \"it works on my machine.\" I deploy to Kubernetes, wire up the pipelines, and run the thing in production.",
  },
  {
    title: "Teach",
    body: "I run internal sessions that show non-technical teams how to get real value out of AI tools — and turn what they learn into working automations.",
  },
];

export type Project = {
  slug: string;
  name: string;
  what: string;
  role: string;
  result: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-documentation-assistant",
    name: "AI Documentation Assistant",
    what: "A chat tool that answers questions about the company's technical documentation and links you straight to the exact page it got the answer from. Instead of hunting through hundreds of help articles, you ask a question and get a sourced answer.",
    role: "Took over the core search engine from a senior colleague and built everything around it — the login and access control, the interface, and a repeatable test suite that measures whether the answers are actually correct.",
    result:
      "Live company-wide, used across departments. Replaced a paid third-party tool that wasn't accurate enough for the business's domain.",
    stack: ["Python", "FastAPI", "RAG", "Keycloak SSO", "Kubernetes"],
  },
  {
    slug: "compliance-certificate-manager",
    name: "Compliance Certificate Manager",
    what: "A system for tracking regulatory certificates across a heavily regulated industry. It reads the official certification PDFs, pulls out the important details automatically, and keeps track of what's valid, what's expiring, and what's covered.",
    role: "Designed and built it end to end — the data model, the document extraction, the API, and the deployment. Wrote a full test plan against real certification documents from multiple regulatory bodies.",
    result:
      "Turns a manual document-reading exercise into structured, searchable data.",
    stack: ["Python", "FastAPI", "PostgreSQL", "AWS S3", "LLM document extraction"],
  },
  {
    slug: "operations-self-service-portal",
    name: "Operations Self-Service Portal",
    what: "Gives the operations team a simple interface to do things that previously required a developer — managing account settings, email templates, and customer mailers.",
    role: "Chose the architecture and built it. Deliberately kept the moving parts to a minimum so it's cheap to run and easy to support.",
    result: "Fewer interruptions for engineers, faster turnaround for the ops team.",
    stack: ["Angular", "FastAPI", "PostgreSQL", "Keycloak"],
  },
  {
    slug: "email-automation-agent",
    name: "Email Automation Agent",
    what: "Watches an inbox for a specific type of incoming email, works out which response template fits, and prepares a draft reply automatically. A human still reviews and sends.",
    role: "Built it solo as a lightweight automation — no servers to maintain.",
    result: "Cuts a repetitive daily task down to a quick review.",
    stack: ["Google Apps Script", "LLM API"],
  },
  {
    slug: "device-fleet-management",
    name: "Device Fleet & Asset Management",
    what: "Brought the company's laptops and devices under proper management — a single source of truth for who has what, tied to automated device enrolment and security policies.",
    role: "Ran the audit, designed the data model, and handled the rollout.",
    result: "A messy spreadsheet situation became a maintained asset system.",
    stack: ["JumpCloud MDM", "Snipe-IT"],
  },
  {
    slug: "discuss-business-ai",
    name: "\"Discuss Business AI\" — Internal Education Series",
    what: "A recurring session series I co-host teaching non-technical teams how to use AI tools properly — not demos, but practical workflows they can use the same afternoon.",
    role: "Covered so far: AI assistants and custom agents, research and knowledge tools, and building real email and workflow automations.",
    result:
      "Being able to explain this stuff clearly to non-engineers is half the job.",
    stack: ["AI assistants", "Custom agents", "Workflow automation"],
  },
];

export type SideProject = {
  name: string;
  what: string;
  stack: string[];
  href?: string;
};

export const sideProjects: SideProject[] = [
  {
    name: "AskTheRoom",
    what: "QR-code Q&A for a paediatric conference. Attendees scan, submit from their phones, and the room sees questions in realtime. No account, no install.",
    stack: ["Next.js", "Supabase", "Vercel"],
  },
  {
    name: "Pooty Box",
    what: "My own product: living-grass dog potty patches. Single page, full checkout, card data kept off my infrastructure via Stripe Checkout.",
    stack: ["Next.js", "Stripe"],
  },
  {
    name: "This site",
    what: "The chat above is a retrieval-augmented assistant over my own content: local embeddings, pgvector on Supabase, answers streamed from Groq.",
    stack: ["Next.js", "pgvector", "RAG"],
    href: "https://github.com/Mikechamp17/porfolio",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["Angular", "TypeScript", "HTML/CSS", "Next.js"] },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "PostgreSQL", "REST APIs"],
  },
  {
    label: "AI & LLMs",
    items: [
      "Retrieval-augmented generation (RAG)",
      "LLM-powered document extraction",
      "Prompt design",
      "Evaluation and testing of AI outputs",
    ],
  },
  {
    label: "Infrastructure & DevOps",
    items: ["Kubernetes", "ArgoCD", "AWS", "CI/CD pipelines", "Docker"],
  },
  {
    label: "Auth & Security",
    items: ["Keycloak", "SSO / OAuth", "Access control"],
  },
  {
    label: "IT Operations",
    items: ["JumpCloud MDM", "Device management", "Asset management"],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  body: string;
};

export const experience: Experience[] = [
  {
    role: "Full-Stack AI Developer",
    org: "B2B iGaming company, Malta",
    period: "Present",
    body: "Building AI-powered internal tools end to end: architecture, frontend, backend, deployment and production support. Also co-host the company's internal AI education series.",
  },
  {
    role: "IT Technician",
    org: "Same company",
    period: "Earlier",
    body: "Started part-time handling device management, onboarding and day-to-day IT support. Taught myself to code and moved into development.",
  },
];

export const principles: { title: string; body: string }[] = [
  {
    title: "Fewer moving parts wins.",
    body: "I own deployment and support, so I'd rather build something simple I can fix at 9pm than something clever I can't.",
  },
  {
    title: "Ship it, then improve it.",
    body: "Real usage tells you more than planning does.",
  },
  {
    title: "Write things down.",
    body: "Every problem solved becomes a note, a test, or a template so the next one is faster.",
  },
  {
    title: "Explain it plainly.",
    body: "If I can't describe what a tool does to someone non-technical, it's probably not designed well enough.",
  },
];

export const socials: { label: string; value: string; href: string }[] = [
  {
    label: "GitHub",
    value: "github.com/Mikechamp17",
    href: "https://github.com/Mikechamp17",
  },
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourhandle",
    href: "https://linkedin.com/in/yourhandle",
  },
];
