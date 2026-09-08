import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { AskMe } from "@/components/ask-me";
import {
  experience,
  pillars,
  principles,
  profile,
  projects,
  sideProjects,
  skillGroups,
  socials,
} from "@/lib/data";

const label =
  "font-mono text-xs uppercase tracking-widest text-muted";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-20">
        <section id="hero" className="flex flex-col gap-4">
          <p className={label}>
            {profile.title} · {profile.location}
          </p>
          <h1 className="font-mono text-4xl font-medium text-ink sm:text-5xl">
            <Typewriter text={profile.name} />
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink">
            {profile.tagline}
          </p>
          <p className="max-w-xl leading-relaxed text-ink-soft">{profile.intro}</p>
          <div className="mt-2 flex flex-wrap gap-5 font-mono text-sm">
            <a href="#work" className="text-accent hover:text-ink">
              View work ↓
            </a>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-ink-soft hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="mt-6 max-w-xl">
            <AskMe />
          </div>
        </section>

        <section id="what-i-do" className="flex flex-col">
          <SectionHeading index="01">What I do</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-md border border-line bg-paper-raised p-5"
              >
                <h3 className="mb-2 font-mono text-base font-medium text-accent">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="flex flex-col">
          <SectionHeading index="02">Projects</SectionHeading>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
          <p className={`${label} mt-10 mb-4`}>Side projects</p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {sideProjects.map((project) => (
              <li
                key={project.name}
                className="flex flex-col gap-2 rounded-md border border-line bg-paper-raised p-4"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-mono text-sm font-medium text-ink">
                    {project.name}
                  </h3>
                  {project.href && (
                    <a
                      href={project.href}
                      className="font-mono text-xs text-accent hover:text-ink"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {project.what}
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-2 font-mono text-xs text-muted">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="flex flex-col">
          <SectionHeading index="03">Skills</SectionHeading>
          <div className="flex flex-col gap-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className={`${label} mb-2`}>{group.label}</p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-line bg-paper-raised px-2.5 py-1 text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="flex flex-col">
          <SectionHeading index="04">Experience</SectionHeading>
          <ol className="flex flex-col gap-6 border-l border-line pl-6">
            {experience.map((item) => (
              <li key={item.role} className="relative">
                <span
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-paper"
                  aria-hidden
                />
                <p className="font-mono text-base font-medium text-ink">
                  {item.role}
                </p>
                <p className={`${label} mt-1`}>
                  {item.org} · {item.period}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="how-i-work" className="flex flex-col">
          <SectionHeading index="05">How I work</SectionHeading>
          <ul className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle.title}>
                <p className="font-mono text-sm font-medium text-ink">
                  {principle.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="flex flex-col">
          <SectionHeading index="06">About</SectionHeading>
          <div className="flex max-w-xl flex-col gap-4 leading-relaxed text-ink-soft">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className={`${label} mt-8 mb-3`}>Beyond the code</p>
          <ul className="flex flex-col gap-2 text-sm leading-relaxed text-ink-soft">
            {profile.beyond.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="font-mono text-accent" aria-hidden>
                  –
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="flex flex-col">
          <SectionHeading index="07">Contact</SectionHeading>
          <p className="mb-6 max-w-xl leading-relaxed text-ink-soft">
            {profile.closing}
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
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
