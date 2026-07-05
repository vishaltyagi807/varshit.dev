import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { NAV } from "./constants";

export function Nav({ onOpenCmd }: { onOpenCmd: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full border border-white/10 px-2 py-2 transition-all ${
          scrolled ? "glass-strong" : "bg-white/2 backdrop-blur-md"
        }`}
      >
        <a
          href="#top"
          className="mx-2 flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <img src="/logo.png" className="hidden sm:inline" width={24} height={24} alt="" />
          <span className="hidden sm:inline">Varshit</span>
        </a>
        <div className="mx-1 hidden h-4 w-px bg-white/10 md:block" />
        <ul className="hidden items-center md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  active === n.id ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onOpenCmd}
          aria-label="Open command palette"
          className="ml-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-muted-foreground transition hover:text-white"
        >
          <Search className="h-3 w-3" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-mono md:inline">
            ⌘K
          </kbd>
        </button>
      </nav>
    </motion.header>
  );
}
