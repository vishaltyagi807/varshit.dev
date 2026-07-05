import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowUpRight, ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { NAV, LINKS } from "./constants";

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items = [
    ...NAV.map((n) => ({ label: `Jump to ${n.label}`, href: `#${n.id}`, icon: ArrowRight })),
    { label: "Download Résumé", href: LINKS.resume, icon: FileDown, download: true },
    { label: "GitHub", href: LINKS.github, icon: Github, external: true },
    { label: "LinkedIn", href: LINKS.linkedin, icon: Linkedin, external: true },
    { label: "Email Varshit", href: LINKS.email, icon: Mail },
  ];

  const [q, setQ] = useState("");
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    if (open) setQ("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-110 grid place-items-start justify-center bg-black/70 p-4 pt-[15vh] backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: -10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-xl overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Type to search…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <div className="p-6 text-center text-sm text-muted-foreground">No results.</div>
              )}
              {filtered.map((it) => {
                const Icon = it.icon;
                return (
                  <a
                    key={it.label}
                    href={it.href}
                    onClick={onClose}
                    target={(it as any).external ? "_blank" : undefined}
                    rel={(it as any).external ? "noreferrer" : undefined}
                    download={(it as any).download}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/5"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="flex-1">{it.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
