import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { EXPERIENCE } from "./constants";
import { Section, SectionLabel } from "./section";

function parseBulletText(text: string) {
  const tokenRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("[") && part.includes("](")) {
      const match = /\[([^\]]+)\]\(([^)]+)\)/.exec(part);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noreferrer"
            className="text-accent-blue underline hover:text-white transition-colors"
          >
            {match[1]}
          </a>
        );
      }
    }
    return part;
  });
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionLabel eyebrow="Experience" title="Where I've shipped." />
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-white/20 via-white/10 to-transparent md:left-6" />
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mb-6 pl-14 md:pl-20"
          >
            <div className="absolute left-2 top-6 h-4 w-4 rounded-full bg-linear-to-br from-[oklch(0.68_0.2_258)] to-[oklch(0.66_0.24_305)] ring-4 ring-background md:left-4" />
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {e.company} · {e.location}
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  {e.period}
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                    <span className="text-white/85">{parseBulletText(b)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/3 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(e as any).docs && (e as any).docs.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 border-t border-white/6 pt-5">
                  {(e as any).docs.map((doc: any, idx: number) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition"
                    >
                      <FileText className="h-4 w-4 text-accent-blue" />
                      {doc.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


