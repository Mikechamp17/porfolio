import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-md border border-line bg-paper-raised p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-mono text-base font-medium text-ink">
          {project.name}
        </h3>
        <div className="flex gap-4 font-mono text-xs">
          {project.href && (
            <a href={project.href} className="text-accent hover:text-ink">
              Live ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} className="text-accent hover:text-ink">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.problem}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {project.solution}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </li>
  );
}
