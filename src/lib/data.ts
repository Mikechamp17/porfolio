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
    slug: "project-one",
    name: "project-one",
    description:
      "A short one-line description of this project goes here — what it does and why it exists.",
    stack: ["Next.js", "TypeScript", "Postgres"],
    href: "https://example.com",
    repo: "https://github.com/yourhandle/project-one",
  },
  {
    slug: "project-two",
    name: "project-two",
    description:
      "Another placeholder project description. Swap this for real work once it's ready.",
    stack: ["React", "Node", "Redis"],
    repo: "https://github.com/yourhandle/project-two",
  },
  {
    slug: "project-three",
    name: "project-three",
    description:
      "A third example project entry, formatted like a directory listing.",
    stack: ["Python", "FastAPI"],
    href: "https://example.com",
  },
];

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Git",
];

export const socials: { label: string; flag: string; value: string; href: string }[] = [
  {
    label: "email",
    flag: "--email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    label: "github",
    flag: "--github",
    value: "github.com/yourhandle",
    href: "https://github.com/yourhandle",
  },
  {
    label: "linkedin",
    flag: "--linkedin",
    value: "linkedin.com/in/yourhandle",
    href: "https://linkedin.com/in/yourhandle",
  },
];
