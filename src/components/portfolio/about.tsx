import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { STATS } from "./constants";
import { Section, SectionLabel } from "./section";

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);
  return v;
}

function StatCard({ s }: { s: (typeof STATS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), {
      threshold: 0.4,
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const v = useCountUp(s.value, inView);

  return (
    <div ref={ref} className="glass rounded-2xl p-5">
      <div className="font-display text-4xl tracking-tight text-white">
        {v}
        <span className="text-gradient-brand">{s.suffix}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionLabel
        eyebrow="About"
        title="Engineer at the intersection of AI, systems, and craft."
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            I'm a B.Tech student building at the seams of{" "}
            <span className="text-white">artificial intelligence</span>,{" "}
            <span className="text-white">distributed backends</span>, and modern{" "}
            <span className="text-white">mobile</span> platforms. My work sits close to production —
            the kind of systems people actually use.
          </p>
          <p>
            My focus is on <span className="text-white">privacy-preserving AI</span>, agentic
            architectures, and low-latency backends. I care about the details that don't ship in a
            blog post: query plans, cold-start times, ICE renegotiation, sane RBAC.
          </p>
          <p>
            I currently intern at <span className="text-white">Theradive</span>, where I designed a
            healthcare consultation platform on Next.js and Supabase —{" "}
            <span className="text-white">80% less paperwork</span>,{" "}
            <span className="text-white">60% faster APIs</span>, and role-scoped access across five
            user tiers.
          </p>
          <div className="glass mt-6 rounded-2xl p-5 font-mono text-sm">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-[11px] text-muted-foreground">~/varshit — zsh</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-accent-cyan">$</span> whoami
            </div>
            <div className="text-white">varshit — engineer, always shipping</div>
            <div className="mt-2 text-muted-foreground">
              <span className="text-accent-cyan">$</span> cat now.md
            </div>
            <div className="text-white/90">
              Building agentic systems · Learning privacy-first AI · Reading distributed papers
              <span className="animate-blink">▍</span>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 self-start sm:grid-cols-2">
          {STATS.map((s) => (
            <StatCard key={s.label} s={s} />
          ))}
        </div>
      </div>
    </Section>
  );
}
