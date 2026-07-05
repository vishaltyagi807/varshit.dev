import { motion } from "motion/react";
import { Trophy, GraduationCap, Rocket, Award, ExternalLink, Terminal } from "lucide-react";
import { ACHIEVEMENTS, EDUCATION, CERTS } from "./constants";
import { Section, SectionLabel } from "./section";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionLabel eyebrow="Recognition" title="Achievements & Certifications" />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Trophy className="h-4 w-4" /> Achievements
          </h3>
          <div className="space-y-3">
            {ACHIEVEMENTS.map((a) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass flex items-start justify-between gap-4 rounded-2xl p-5"
              >
                <div>
                  <div className="font-medium">{a.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{a.detail}</div>
                </div>
                <Award className="h-5 w-5 text-accent-purple" />
              </motion.div>
            ))}
          </div>

          <h3 className="mb-4 mt-10 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <GraduationCap className="h-4 w-4" /> Education
          </h3>
          <div className="space-y-3">
            {EDUCATION.map((e) => (
              <div key={e.school + e.period} className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-medium">{e.school}</div>
                  <div className="text-xs text-muted-foreground">{e.period}</div>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {e.degree} · {e.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Rocket className="h-4 w-4" /> Certifications
          </h3>
          <div className="space-y-3">
            {CERTS.map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center justify-between rounded-2xl p-4 transition hover:bg-white/4 hover:border-white/20 hover:scale-[1.02] duration-300 cursor-pointer group"
              >
                <div>
                  <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {c.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{c.issuer}</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          <h3 className="mb-4 mt-10 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Terminal className="h-4 w-4" /> Currently Learning
          </h3>
          <div className="glass rounded-2xl p-5 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li className="flex gap-2 text-white/85">
                <span className="text-accent-cyan">→</span> Advanced distributed
                systems patterns
              </li>
              <li className="flex gap-2 text-white/85">
                <span className="text-accent-cyan">→</span> On-device inference &
                privacy-preserving ML
              </li>
              <li className="flex gap-2 text-white/85">
                <span className="text-accent-cyan">→</span> Kotlin Multiplatform for
                shared business logic
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
