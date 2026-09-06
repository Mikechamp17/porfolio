export function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-6 text-sm text-muted">
      <span className="text-string">#</span> {children}
    </h2>
  );
}
