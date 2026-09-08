import type { Project } from "@/lib/data";

function Row({ label, children }: { label: string; children: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
      <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-widest text-muted sm:pt-1">
        {label}
      </span>
      <p className="text-sm leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-4 rounded-md border border-line bg-paper-raised p-5">
      <h3 className="font-mono text-base font-medium text-ink">{project.name}</h3>
      <Row label="What">{project.what}</Row>
      <Row label="My role">{project.role}</Row>
      <Row label="Result">{project.result}</Row>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </li>
  );
}
