export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "imageleak",
    name: "ImageLeak",
    description:
      "A browser-based tool that strips hidden metadata from photos without uploading them.",
    stack: ["Client-side", "Privacy"],
  },
  {
    slug: "portfolio-chat",
    name: "This site's chat",
    description:
      "A retrieval-augmented assistant that answers follow-ups from written notes on this site — and says when it does not know.",
    stack: ["Next.js", "Supabase", "Groq"],
    repo: "https://github.com/Mikechamp17/porfolio",
  },
];

export const skills: string[] = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "RAG",
  "Kubernetes",
  "Next.js",
  "Angular",
  "Claude API",
];

export const socials: { label: string; value: string; href: string }[] = [
  {
    label: "GitHub",
    value: "github.com/Mikechamp17",
    href: "https://github.com/Mikechamp17",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/michael-schaerer-5619082a4",
    href: "https://linkedin.com/in/michael-schaerer-5619082a4",
  },
];
