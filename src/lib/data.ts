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
    slug: "asktheroom",
    name: "AskTheRoom",
    description: "Live conference Q&A.",
    stack: [],
    href: "https://asktheroom.org.mt",
  },
  {
    slug: "pooty-box",
    name: "Pooty Box",
    description: "A page for real grass potty patches.",
    stack: [],
    href: "https://pottybox.vercel.app",
  },
  {
    slug: "imageleak",
    name: "ImageLeak",
    description: "A browser check for hidden photo metadata.",
    stack: [],
    repo: "https://github.com/Mikechamp17/imageLeak",
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
