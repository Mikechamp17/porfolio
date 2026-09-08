import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-2 rounded-md border border-line bg-paper-raised p-5">
      <h3 className="font-mono text-base font-medium text-ink">{project.name}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{project.summary}</p>
      <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </li>
  );
}
