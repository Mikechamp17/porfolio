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
    name: "Project One",
    description:
      "A short one-line description of this project goes here. What it does and why it exists.",
    stack: ["Next.js", "TypeScript", "Postgres"],
    href: "https://example.com",
    repo: "https://github.com/yourhandle/project-one",
  },
  {
    slug: "project-two",
    name: "Project Two",
    description:
      "Another placeholder project description. Swap this for real work once it's ready.",
    stack: ["React", "Node", "Redis"],
    repo: "https://github.com/yourhandle/project-two",
  },
  {
    slug: "project-three",
    name: "Project Three",
    description: "A third example project entry with a live link only.",
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

export const socials: { label: string; value: string; href: string }[] = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/yourhandle",
    href: "https://github.com/yourhandle",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourhandle",
    href: "https://linkedin.com/in/yourhandle",
  },
];
