import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { AskMe } from "@/components/ask-me";
import {
  infrastructure,
  profile,
  projects,
  skillGroups,
  socials,
  teaching,
} from "@/lib/data";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 text-sm leading-relaxed text-ink-soft">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="font-mono text-accent" aria-hidden>
            –
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-20">
        <section id="hero" className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {profile.role}
          </p>
          <h1 className="font-mono text-4xl font-medium text-ink sm:text-5xl">
            <Typewriter text={profile.name} />
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.headline} {profile.intro}
          </p>
          <div className="mt-2 flex gap-5 font-mono text-sm">
            <a href="#work" className="text-accent hover:text-ink">
              View work ↓
            </a>
            <a href="#contact" className="text-ink-soft hover:text-accent">
              Get in touch
            </a>
          </div>
          <div className="mt-6 max-w-xl">
            <AskMe />
          </div>
        </section>

        <section id="work" className="flex flex-col">
          <SectionHeading index="01">Work</SectionHeading>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </section>

        <section id="infrastructure" className="flex flex-col">
          <SectionHeading index="02">Infrastructure</SectionHeading>
          <p className="mb-5 max-w-xl leading-relaxed text-ink-soft">
            Not a project, a capability. I&apos;m a developer who can also be
            trusted with identity, devices and the network.
          </p>
          <BulletList items={infrastructure} />
        </section>

        <section id="ai" className="flex flex-col">
          <SectionHeading index="03">AI tooling and teaching</SectionHeading>
          <BulletList items={teaching} />
        </section>

        <section id="about" className="flex flex-col">
          <SectionHeading index="04">About</SectionHeading>
          <div className="flex max-w-xl flex-col gap-4 leading-relaxed text-ink-soft">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                  {group.label}
                </p>
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

        <section id="contact" className="flex flex-col">
          <SectionHeading index="05">Contact</SectionHeading>
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
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
