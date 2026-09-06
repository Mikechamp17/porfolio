export const profile = {
  name: "Mike Schaerer",
  role: "Full-stack developer · IT administrator",
  headline: "I build the product and run the infrastructure it sits on.",
  intro:
    "Self-taught, based in Malta, working on a regulated platform in the iGaming sector.",
  bio: [
    "I'm a self-taught full-stack developer and IT administrator based in Malta, working on a regulated platform in the iGaming sector.",
    "I came into development sideways. I was a personal trainer, then moved into IT operations, then taught myself to code and built an internal inventory app to replace the spreadsheets nobody trusted. That got me onto the development team.",
    "I now build document pipelines, retrieval assistants and web apps, and I run the identity, device and network layer underneath them. I work daily with agentic AI tooling and I teach other people to use it properly.",
  ],
};

export type Project = {
  slug: string;
  name: string;
  problem: string;
  solution: string;
  stack: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "document-extraction-pipeline",
    name: "Document extraction pipeline",
    problem:
      "Compliance documents arrived as unstructured PDFs. Extracting the required fields by hand was slow and error-prone, and in a regulated setting accuracy is not optional.",
    solution:
      "An end-to-end pipeline that ingests the PDFs, extracts structured data, and tracks every job in a database so nothing is lost or silently reprocessed. Processing runs in parallel across documents. Job state lives in the database rather than in memory, which gives retries, idempotency and an audit trail.",
    stack: ["PDF ingestion", "Parallel processing", "Database-backed jobs", "Audit trail"],
  },
  {
    slug: "documentation-assistant",
    name: "Internal documentation assistant",
    problem:
      "Technical documentation lived in a hosted help system. Finding an answer meant already knowing where to look, which new joiners and non-technical staff did not.",
    solution:
      "A retrieval-augmented assistant over the documentation. Ask in plain language and get an answer grounded in the real docs, with citations back to the source page. The citations were the point: without them an internal assistant is a liability rather than a tool.",
    stack: ["RAG", "Vector search", "Citations"],
  },
  {
    slug: "asktheroom",
    name: "AskTheRoom",
    problem:
      "Audience questions at a paediatric conference. Roving microphones are slow, and the quietest people in the room never ask anything.",
    solution:
      "A QR-code Q&A app. Attendees scan, submit from their phones, and the room sees the questions in realtime. No account creation, no app install. I wrote a full spec before writing any code.",
    stack: ["Next.js", "Vercel", "Supabase"],
  },
  {
    slug: "pooty-box",
    name: "Pooty Box",
    problem:
      "My own product. Selling real living-grass dog potty patches needs a site that explains a product people have not seen before and takes payment on the spot.",
    solution:
      "Single product, single page, full checkout. Stripe Checkout rather than a custom payment form, which keeps card data off my infrastructure entirely.",
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion", "Stripe Checkout"],
  },
  {
    slug: "inventory-app",
    name: "Inventory app",
    problem:
      "Device inventory spread across spreadsheets that drifted apart and contradicted each other.",
    solution:
      "An internal app to replace them. It is the project that moved me from IT operations onto the development team.",
    stack: ["Internal tool"],
  },
];

export const infrastructure: string[] = [
  "SAML single sign-on with Keycloak against a cloud identity provider",
  "Google Drive API integration using a service account routed through an internal group, to work within organisation-level sharing restrictions",
  "MDM enrolment and full-disk encryption workflows for device onboarding",
  "Recovering encrypted devices after firmware and Secure Boot changes",
  "Firewall and biometric access terminal management",
  "Kubernetes on AWS EKS, CircleCI pipelines",
];

export const teaching: string[] = [
  "Run an internal AI training series for non-technical staff",
  "Led a developer guild session on MCP server security",
  "Build daily with Claude Code and MCP tooling",
  "Anthropic Academy certified: AI Fluency, Claude 101",
  "Working on agentic loop design, the act, verify, decide pattern and exit criteria, using a booking app as the test case",
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend and data",
    items: ["Supabase", "PostgreSQL", "RAG pipelines", "Vector search", "Document extraction"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Kubernetes (EKS)", "CircleCI", "Vercel"],
  },
  {
    label: "IT and identity",
    items: ["MDM", "BitLocker", "Keycloak", "SAML", "FortiGate", "GCP service accounts"],
  },
  {
    label: "AI",
    items: ["Claude Code", "MCP servers", "Agentic workflow design"],
  },
  { label: "Payments", items: ["Stripe"] },
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
