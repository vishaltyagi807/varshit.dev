import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PROJECTS } from "../components/portfolio/constants";
import { Background } from "../components/portfolio/background";
import { Nav } from "../components/portfolio/nav";
import { Hero } from "../components/portfolio/hero";
import { Marquee } from "../components/portfolio/marquee";
import { About } from "../components/portfolio/about";
import { Skills } from "../components/portfolio/skills";
import { Experience } from "../components/portfolio/experience";
import { Projects, ProjectModal } from "../components/portfolio/projects";
import { Achievements } from "../components/portfolio/achievements";
import { Contact } from "../components/portfolio/contact";
import { Footer } from "../components/portfolio/footer";
import { CommandPalette } from "../components/portfolio/command-palette";
import { ScrollProgress } from "../components/portfolio/scroll-progress";
import { BackToTop } from "../components/portfolio/back-to-top";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  const [cmd, setCmd] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof PROJECTS)[number] | null>(null);

  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmd((v) => !v);
      }
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <ScrollProgress />
      <Background />
      <Nav onOpenCmd={() => setCmd(true)} />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects onOpenProject={setActiveProject} />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ProjectModal p={activeProject} onClose={() => setActiveProject(null)} />
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
    </div>
  );
}
