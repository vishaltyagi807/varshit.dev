import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX: w, transformOrigin: "0%" }}
      className="fixed inset-x-0 top-0 z-120 h-0.5 bg-linear-to-r from-[oklch(0.68_0.2_258)] via-[oklch(0.66_0.24_305)] to-[oklch(0.82_0.16_200)]"
    />
  );
}
