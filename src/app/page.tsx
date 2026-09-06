import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { projects, skills, socials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-16">
        <section id="hero" className="flex flex-col gap-3">
          <p className="text-sm text-muted">
            <span className="text-accent">guest@porfolio</span>
            <span className="text-muted">:~$ </span>
            whoami
          </p>
          <h1 className="text-3xl font-medium text-ink sm:text-4xl">
            <Typewriter text="Your Name" />
          </h1>
          <p className="max-w-lg text-ink-soft">
            Software engineer building web apps, APIs, and the odd automation
            script. Currently open to freelance and collaboration.
          </p>
        </section>

        <section id="about" className="flex flex-col">
          <SectionHeading>about.md</SectionHeading>
          <div className="flex flex-col gap-5 rounded-md border border-line bg-paper-raised p-6">
            <p className="text-sm leading-relaxed text-ink-soft">
              Replace this paragraph with a couple of sentences about your
              background: what you work on, what you care about, and what
              kind of problems you like solving. Keep it short — this is a
              terminal, not a novel.
            </p>
            <div>
              <p className="mb-2 text-xs text-muted">
                <span className="text-accent">$</span> cat skills.txt
              </p>
              <ul className="flex flex-wrap gap-2 text-xs">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-line-soft bg-accent-soft px-2 py-1 text-ink-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="flex flex-col">
          <SectionHeading>ls -la projects/</SectionHeading>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </section>

        <section id="contact" className="flex flex-col">
          <SectionHeading>contact.sh</SectionHeading>
          <div className="flex flex-col gap-3 rounded-md border border-line bg-paper-raised p-6 text-sm">
            {socials.map((social) => (
              <div key={social.label} className="flex flex-wrap gap-2">
                <span className="text-muted">$ ./contact.sh</span>
                <span className="text-accent">{social.flag}</span>
                <a
                  href={social.href}
                  className="text-ink underline decoration-dotted hover:text-accent"
                >
                  {social.value}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-6 text-center text-xs text-muted">
        <span className="text-accent">guest@porfolio</span>:~${" "}
        <span aria-hidden className="caret">
          ▌
        </span>{" "}
        built with Next.js + Tailwind · {new Date().getFullYear()}
      </footer>
    </>
  );
}
