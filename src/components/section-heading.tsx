export function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
      <span className="text-accent">{index}</span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}
