const links = [
  { href: "#about", label: "about.md" },
  { href: "#projects", label: "projects/" },
  { href: "#contact", label: "contact.sh" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="hidden text-muted sm:inline">
          ● porfolio — zsh — 80×24
        </span>
        <span className="text-muted sm:hidden">● porfolio</span>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <span className="text-accent">$ </span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
