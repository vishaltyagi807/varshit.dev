import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { LINKS } from "./constants";
import { Section, SectionLabel } from "./section";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact">
      <SectionLabel
        eyebrow="Contact"
        title="Let's build something worth shipping."
        description="I'm open to internships, full-time SDE / AI Engineer roles, and interesting collaborations."
      />
      <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-linear-to-br from-[oklch(0.68_0.2_258/0.4)] to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-linear-to-tr from-[oklch(0.66_0.24_305/0.35)] to-transparent blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl leading-tight">Reach out.</h3>
            <p className="mt-3 text-muted-foreground">
              The fastest way is email. I reply within 24 hours.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={LINKS.email}
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent-blue" /> varshityagi807@gmail.com
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
              >
                <Github className="h-4 w-4 text-accent-blue" /> GitHub
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-accent-blue" /> LinkedIn
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="h-4 w-4 text-accent-blue" /> Meerut, India
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="space-y-3"
          >
            <input
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-white/30 focus:bg-white/6"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-white/30 focus:bg-white/6"
            />
            <textarea
              required
              rows={5}
              placeholder="What are we building?"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-white/30 focus:bg-white/6"
            />
            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:shadow-(--shadow-glow)">
              {sent ? (
                "Message sent — thanks!"
              ) : (
                <>
                  Send message{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
