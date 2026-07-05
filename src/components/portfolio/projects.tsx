import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  ExternalLink,
  X,
  Zap,
  Mail,
} from "lucide-react";
import { PROJECTS, LINKS } from "./constants";
import { Section, SectionLabel } from "./section";

export function ProjectCard({
  p,
  onOpen,
}: {
  p: (typeof PROJECTS)[number];
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 200, damping: 20 });
  const springRy = useSpring(ry, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ry.set(x * 6);
    rx.set(-y * 6);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const Icon = p.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      style={{ rotateX: springRx, rotateY: springRy, transformPerspective: 1200 }}
      className="group relative cursor-pointer"
    >
      <div
        className={`absolute -inset-px rounded-3xl bg-linear-to-br ${p.accent} opacity-0 blur-md transition duration-500 group-hover:opacity-40`}
      />
      <div className="glass relative overflow-hidden rounded-3xl">
        <div className="relative aspect-video overflow-hidden border-b border-white/10">
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <div className={`absolute inset-0 bg-linear-to-br ${p.accent} opacity-30`} />
              <div className="absolute inset-0 grid-bg opacity-30" />
            </>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:opacity-40 transition-opacity duration-300" />
          {!p.image && (
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-strong flex flex-col items-center gap-3 rounded-2xl px-6 py-5 backdrop-blur-md"
              >
                <Icon className="h-8 w-8 text-white" />
                <span className="font-display text-2xl">{p.name}</span>
              </motion.div>
            </div>
          )}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
            <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
              {p.year}
            </span>
            {p.role.toLowerCase().includes("freelance") && (
              <span className="rounded-full border border-[oklch(0.82_0.16_200)]/30 bg-[oklch(0.82_0.16_200)]/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[oklch(0.82_0.16_200)] backdrop-blur font-medium">
                Freelance
              </span>
            )}
          </div>
        </div>
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl tracking-tight md:text-3xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            </div>
            <button
              onClick={onOpen}
              aria-label={`Open ${p.name} case study`}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
            >
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-y border-white/6 py-4">
            {p.metrics.map((m) => (
              <div key={m.v}>
                <div className="font-display text-xl text-gradient-brand">{m.k}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-white/3 px-2 py-1 text-[11px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
            >
              Case study <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <a
              href={(p as any).githubLink || LINKS.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-white"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            {p.liveLink && (
              <a
                href={p.liveLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live Web
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectModal({
  p,
  onClose,
}: {
  p: (typeof PROJECTS)[number] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    if (p) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [p, onClose]);

  return (
    <AnimatePresence>
      {p && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 grid place-items-center bg-black/80 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative max-h-[92vh] w-full max-w-4xl rounded-3xl overflow-hidden flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="w-full overflow-y-auto flex-1">
              {p.image ? (
                <div className="h-56 w-full overflow-hidden border-b border-white/10 relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                  />
                </div>
              ) : (
                <div className={`h-40 w-full bg-linear-to-br ${p.accent}`} />
              )}
              <div className="p-8 md:p-10">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.year} · {p.role}
                </div>
                <h3 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">{p.name}</h3>
                <p className="mt-2 text-lg text-muted-foreground">{p.tagline}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.v} className="glass rounded-xl p-4">
                      <div className="font-display text-2xl text-gradient-brand">{m.k}</div>
                      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
                      Problem
                    </h4>
                    <p className="mt-2 text-white/85">{p.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
                      Solution
                    </h4>
                    <p className="mt-2 text-white/85">{p.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
                      Architecture
                    </h4>
                    <p className="mt-2 text-white/85">{p.architecture}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
                      Highlights
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-white/85">
                          <Zap className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-blue" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
                      Stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-white/10 bg-white/3 px-2 py-1 text-xs text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.82_0.16_200)] px-5 py-2 text-sm font-medium text-black transition hover:bg-[oklch(0.82_0.16_200)]/90 shadow-[0_0_20px_-5px_oklch(0.82_0.16_200)]"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Web
                    </a>
                  )}
                  <a
                    href={(p as any).githubLink || LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20 border border-white/10"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm text-muted-foreground transition hover:text-white hover:bg-white/5"
                  >
                    <Mail className="h-4 w-4" /> Discuss
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Projects({
  onOpenProject,
}: {
  onOpenProject: (p: (typeof PROJECTS)[number]) => void;
}) {
  return (
    <Section id="projects">
      <SectionLabel
        eyebrow="Featured Work"
        title="Systems, not screenshots."
        description="Every project below runs in production or was built to."
      />
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} p={p} onOpen={() => onOpenProject(p)} />
        ))}
      </div>
    </Section>
  );
}
