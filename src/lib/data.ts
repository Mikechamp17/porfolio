export const profile = {
  name: "Michael Schaerer",
  title: "Full-Stack AI Developer",
  location: "Malta",
  tagline:
    "I build internal AI tools end to end — from the first sketch to the thing running in production.",
  intro:
    "Frontend, backend, deployment and support. I turn slow manual processes into tools people trust.",
  about:
    "Self-taught. I came to Malta from South Africa, started as an IT technician, taught myself to code, and moved onto the development team. I own what I build end to end, and I'm the one who presents it.",
  closing: "Open to full-stack and AI engineering roles, and to conversations about your project.",
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "AI Documentation Assistant",
    summary:
      "Ask a question, get a sourced answer with a link to the exact page. In production across teams; replaced a paid tool that wasn't accurate enough.",
    stack: ["Python", "FastAPI", "RAG", "Keycloak", "Kubernetes"],
  },
  {
    name: "Compliance Certificate Manager",
    summary:
      "Reads regulatory PDFs, extracts what matters, and tracks what's valid and expiring. A manual reading exercise became searchable data.",
    stack: ["Python", "FastAPI", "PostgreSQL", "AWS S3", "LLM extraction"],
  },
  {
    name: "Operations Self-Service Portal",
    summary:
      "Lets the ops team change settings, templates and mailers without a developer. Fewer interruptions, faster turnaround.",
    stack: ["Angular", "FastAPI", "PostgreSQL"],
  },
];

export const alsoBuilt =
  "Also: an email automation agent, a device fleet and asset management rollout, and an internal AI education series I co-host.";

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Build",
    items: ["Angular", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    label: "AI",
    items: ["RAG", "LLM document extraction", "Prompt design", "AI output evaluation"],
  },
  {
    label: "Ship",
    items: ["Kubernetes", "ArgoCD", "AWS", "Docker", "Keycloak / SSO"],
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
