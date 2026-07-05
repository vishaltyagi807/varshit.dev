import { type ReactNode } from "react";
import { motion } from "motion/react";
import { CircleDot } from "lucide-react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionLabel({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="mb-14 max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs font-medium text-muted-foreground">
        <CircleDot className="h-3 w-3 text-accent-blue" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
