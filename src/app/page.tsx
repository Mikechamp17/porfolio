import { AskMe } from "@/components/ask-me";
import { socials } from "@/lib/data";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-8">
      <div className="mt-[16vh] max-w-md">
        <h1 className="text-[15px] font-normal text-ink">Mike Schaerer</h1>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Full-stack Developer
        </p>
        <p className="mt-7 text-2xl leading-snug font-medium text-ink">
          I build AI tools.
        </p>
      </div>

      <div className="mt-auto pt-20">
        <div className="max-w-xl">
          <AskMe />
        </div>

        <footer className="mt-10 flex items-baseline justify-between font-mono text-[11px] text-muted">
          <span>© {new Date().getFullYear()}</span>
          <ul className="flex gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="py-1.5 hover:text-accent">
                  {social.value}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </main>
  );
}
