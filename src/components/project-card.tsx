import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-md border border-line bg-paper-raised p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-ink">
          <span className="text-muted">drwxr-xr-x </span>
          {project.name}
        </p>
        <div className="flex gap-3 text-sm">
          {project.href && (
            <a
              href={project.href}
              className="text-accent underline decoration-dotted hover:text-ink"
            >
              --live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="text-accent underline decoration-dotted hover:text-ink"
            >
              --github
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {project.description}
      </p>
      <p className="mt-3 text-xs text-string">
        {"// " + project.stack.join(", ")}
      </p>
    </li>
  );
}
