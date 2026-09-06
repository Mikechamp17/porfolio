import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { projects, skills, socials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-20">
        <section id="hero" className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Software Engineer
          </p>
          <h1 className="font-mono text-4xl font-medium text-ink sm:text-5xl">
            <Typewriter text="Your Name" />
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            I build web apps, APIs, and the occasional automation script.
            Currently open to freelance work and collaboration.
          </p>
          <div className="mt-2 flex gap-5 font-mono text-sm">
            <a href="#projects" className="text-accent hover:text-ink">
              View projects ↓
            </a>
            <a href="#contact" className="text-ink-soft hover:text-accent">
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="flex flex-col">
          <SectionHeading index="01">About</SectionHeading>
          <div className="flex flex-col gap-6">
            <p className="max-w-xl leading-relaxed text-ink-soft">
              Replace this paragraph with a couple of sentences about your
              background: what you work on, what you care about, and what kind
              of problems you like solving. Keep it short.
            </p>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                Skills
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-line bg-paper-raised px-2.5 py-1 text-ink-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="flex flex-col">
          <SectionHeading index="02">Projects</SectionHeading>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </section>

        <section id="contact" className="flex flex-col">
          <SectionHeading index="03">Contact</SectionHeading>
          <p className="mb-6 max-w-xl leading-relaxed text-ink-soft">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
          <ul className="flex flex-col gap-3 font-mono text-sm">
            {socials.map((social) => (
              <li key={social.label} className="flex flex-wrap gap-x-4">
                <span className="w-20 text-muted">{social.label}</span>
                <a href={social.href} className="text-ink hover:text-accent">
                  {social.value}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-6 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Your Name
      </footer>
    </>
  );
}
