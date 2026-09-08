import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { AskMe } from "@/components/ask-me";
import { alsoBuilt, profile, projects, skillGroups, socials } from "@/lib/data";

const label = "font-mono text-xs uppercase tracking-widest text-muted";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-16 px-6 py-20">
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
            <p className="mt-2 font-mono text-xs text-muted">
              The short version is above. Ask for the long one.
            </p>
          </div>
        </section>

        <section id="work" className="flex flex-col">
          <SectionHeading index="01">Selected work</SectionHeading>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">{alsoBuilt}</p>
        </section>

        <section id="skills" className="flex flex-col">
          <SectionHeading index="02">Skills</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-3">
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

        <section id="about" className="flex flex-col">
          <SectionHeading index="03">About</SectionHeading>
          <p className="max-w-xl leading-relaxed text-ink-soft">{profile.about}</p>
        </section>

        <section id="contact" className="flex flex-col">
          <SectionHeading index="04">Contact</SectionHeading>
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
