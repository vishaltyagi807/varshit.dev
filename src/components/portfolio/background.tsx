import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

export function Background() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const bx = useTransform(mx, (v) => `${v * 100}%`);
  const by = useTransform(my, (v) => `${v * 100}%`);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.68 0.2 258 / 0.15), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse at bottom, oklch(0.66 0.24 305 / 0.12), transparent 60%)",
        }}
      />
      <motion.div
        className="absolute h-[540px] w-[540px] rounded-full blur-3xl opacity-40"
        style={{
          left: bx,
          top: by,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, oklch(0.68 0.2 258 / 0.35), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/90" />
    </div>
  );
}
