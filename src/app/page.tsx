import { AskMe } from "@/components/ask-me";
import { resolveEmail } from "@/lib/contact";
import { selectedWork, socials } from "@/lib/data";

export default function Home() {
  const email = resolveEmail();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-8 sm:px-6">
      <div className="mt-10 flex w-full max-w-xl flex-1 flex-col sm:mt-[16vh]">
        <div className="max-w-md">
          <h1 className="text-[15px] font-normal text-ink">Mike Schaerer</h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:mt-4 sm:tracking-[0.22em]">
            Full-stack Developer
          </p>
          <p className="mt-5 text-2xl leading-snug font-medium text-ink sm:mt-7">
            I build AI tools.
          </p>
          <div className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Selected work
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-soft">
              {selectedWork.map((item) => (
                <li key={item.name}>
                  {item.href ? (
                    <a href={item.href} className="text-ink hover:text-accent">
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-ink">{item.name}</span>
                  )}
                  . {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 w-full sm:mt-auto sm:pt-16">
          <AskMe />

          <footer className="mt-8 flex items-baseline justify-between pb-[max(0.5rem,env(safe-area-inset-bottom))] font-mono text-[11px] text-muted sm:mt-10">
            <span>© {new Date().getFullYear()}</span>
            <ul className="flex gap-5">
              {email && (
                <li>
                  <a
                    href={email.href}
                    className="inline-block py-2 hover:text-accent"
                  >
                    Email
                  </a>
                </li>
              )}
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="inline-block py-2 hover:text-accent"
                  >
                    {social.value}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </main>
  );
}
