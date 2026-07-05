import { motion } from "motion/react";
import { SKILLS } from "./constants";
import { Section, SectionLabel } from "./section";

export function Skills() {
  return (
    <Section id="skills">
      <SectionLabel
        eyebrow="Skills"
        title="A stack I can defend, end to end."
        description="Chosen for a reason — every tool below has shipped something real."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-white/20"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-linear-to-br from-[oklch(0.68_0.2_258/0.15)] to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-4 w-4 text-white/90" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight">{s.group}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-white/10 bg-white/3 px-2 py-1 text-xs text-muted-foreground transition hover:bg-white/8 hover:text-white"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
