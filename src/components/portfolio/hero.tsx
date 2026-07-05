import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Brain,
  Cloud,
  Server,
  Database,
  Cpu,
  Smartphone,
  Layers,
  Code2,
} from "lucide-react";
import { ROLES, LINKS } from "./constants";

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-flex h-[1.2em] min-w-[10ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-gradient-brand"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HeroOrb() {
  const skills = [
    { icon: Brain, label: "AI", angle: 340, radius: 46, delay: 0.0 },
    { icon: Cloud, label: "Cloud", angle: 20, radius: 44, delay: 0.4 },
    { icon: Server, label: "Backend", angle: 60, radius: 48, delay: 0.8 },
    { icon: Database, label: "Postgres", angle: 105, radius: 46, delay: 1.2 },
    { icon: Cpu, label: "Agents", angle: 150, radius: 47, delay: 1.6 },
    { icon: Smartphone, label: "Mobile", angle: 210, radius: 47, delay: 2.0 },
    { icon: Layers, label: "Next.js", angle: 250, radius: 45, delay: 2.4 },
    { icon: Code2, label: "Kotlin", angle: 300, radius: 46, delay: 2.8 },
  ];

  const toXY = (angle: number, radius: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[10%] rounded-full bg-linear-to-br from-[oklch(0.68_0.2_258/0.35)] to-[oklch(0.66_0.24_305/0.35)] blur-3xl" />

      <div className="absolute inset-[8%] rounded-full border border-white/10" />
      <div className="absolute inset-[20%] rounded-full border border-white/6" />
      <div className="absolute inset-[32%] rounded-full border border-white/4" />

      <motion.div
        className="absolute inset-[4%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-full w-full rounded-full border border-dashed border-white/10" />
      </motion.div>

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        aria-hidden
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="node-line" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.6" />
            <stop offset="1" stopColor="oklch(0.66 0.24 305)" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        {skills.map((s, i) => {
          const { x, y } = toXY(s.angle, s.radius);
          return (
            <g key={i}>
              <line
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="url(#node-line)"
                strokeWidth="0.25"
                strokeDasharray="0.6 0.6"
              />
              <circle cx={x} cy={y} r="0.7" fill="oklch(0.82 0.16 200)" opacity="0.7" />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-[10%] rounded-full border border-white/10 bg-card/40 overflow-hidden shadow-(--shadow-elegant) ring-brand">
        <motion.img
          src="/me.png"
          alt="Varshit Tyagi"
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </div>

      {skills.map((s, i) => {
        const Icon = s.icon;
        const { x, y } = toXY(s.angle, s.radius);
        return (
          <motion.div
            key={i}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.5 + i * 0.06, duration: 0.5 },
              scale: { delay: 0.5 + i * 0.06, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
              y: { duration: 5 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: s.delay },
            }}
          >
            <div className="glass-strong flex items-center gap-1.5 rounded-full px-2.5 py-1.5 shadow-(--shadow-elegant)">
              <Icon className="h-3.5 w-3.5 text-white/90" />
              <span className="text-[11px] font-medium text-white/90">{s.label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-32 md:pt-40"
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships & full-time roles
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-sm text-muted-foreground"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-2 font-display text-6xl leading-[0.95] tracking-tight md:text-8xl"
          >
            <span className="text-gradient">Varshit Tyagi</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-2xl font-medium tracking-tight text-white/90 md:text-3xl"
          >
            I build <RotatingWord />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I design intelligent systems, scalable backend architectures, and AI-powered
            applications that transform ambitious ideas into production-ready software.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:shadow-(--shadow-glow)"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={LINKS.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/8"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-muted-foreground transition hover:bg-white/5 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-muted-foreground transition hover:bg-white/5 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={LINKS.email}
              aria-label="Email"
              className="rounded-full border border-white/10 p-2.5 text-muted-foreground transition hover:bg-white/5 hover:text-white"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> Meerut, India
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-3 w-3" /> B.Tech CSE · MIET
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <HeroOrb />
        </motion.div>
      </div>
    </section>
  );
}
