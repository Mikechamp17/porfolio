import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#infrastructure", label: "Infra" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4 font-mono text-sm">
        <a href="#" className="whitespace-nowrap text-ink hover:text-accent">
          {profile.name}
        </a>
        <nav className="flex items-center gap-3 text-xs sm:gap-5 sm:text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
