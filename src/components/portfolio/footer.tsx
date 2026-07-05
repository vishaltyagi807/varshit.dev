import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "./constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/6 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} · Created By Varshit Tyagi</div>
        <div className="flex items-center gap-4">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={LINKS.email} aria-label="Email" className="transition hover:text-white">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
