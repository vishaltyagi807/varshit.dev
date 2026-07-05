# 🌟 Varshit Tyagi — Portfolio

A beautiful, premium, high-performance developer portfolio built to showcase modern software engineering craft. Built with **React 19**, **TypeScript**, **Vite**, **TanStack Router**, **Tailwind CSS v4**, and **Motion** (Framer Motion).

This portfolio features a modular components-based architecture, highly fluid micro-interactions, custom markdown-like timeline parsers, and a dialog-based search command palette.

---

## 🚀 Live Demo & Repository
- **Website:** [varshit.dev](https://varshit.dev) *(or custom deployment)*
- **Repository:** [github.com/vishaltyagi807/varshit.dev](https://github.com/vishaltyagi807/varshit.dev)

---

## ✨ Features

- **Component-Based Modular Architecture:** Clean separation of concerns with all data configurations isolated to a single entry point.
- **Orbital Skill Graphic:** Interactive, animated SVG skill ring mapping core competencies dynamically in orbit around a central portrait.
- **Premium Freelance Badging:** Automatic visual tags distinguishing freelance projects from corporate products.
- **Command Palette (`⌘K` / Search):** Fully-featured overlay palette supporting instant keyboard navigation, resume downloads, and social lookups.
- **Rich Interactive Projects Grid:** Features mouse-tilt 3D animations, custom project metrics panels, and expandable full case-study modals (problem, solution, architecture, and tech highlights).
- **Flexible Experience Timeline:** Career trajectory mapping with regex-based markdown text parsers supporting bold highlights (`**text**`), hyperlinks (`[label](url)`), and certificate document attachments.
- **Glassmorphic UI Design:** Modern dark mode styling powered by Tailwind CSS v4 and fluid Motion layout morph transitions.

---

## 🛠️ Tech Stack

- **Core Framework:** React 19 (Hooks, Concurrent Rendering, Performance)
- **Language:** TypeScript (Safe typing, auto-inference constants)
- **Styling:** Tailwind CSS v4 (Sleek CSS custom properties, linear-gradients, custom animations)
- **Animations:** Motion (Fluid springs, hover tilts, exit/entry AnimatePresence)
- **Routing:** TanStack Router & Start (Type-safe routing, route configuration file trees)
- **Icons:** Lucide React (Clean vector outlines)
- **Package Manager / Runtime:** Bun (Ultra-fast package installs and developer workflow scripts)

---

## 📂 Project Structure

The project has been refactored into a highly modular component structure to enable clean code maintenance and lightning-fast developer handoff:

```bash
my-portfolio/
├── src/
│   ├── components/
│   │   ├── portfolio/              # Dedicated modular elements
│   │   │   ├── constants.ts        # Single Source of Truth: Data & Configurations
│   │   │   ├── section.tsx         # Layout wrappers: Section & SectionLabel
│   │   │   ├── background.tsx      # Cursor-tracking mouse mesh gradient
│   │   │   ├── nav.tsx             # Fixed floating navigation header with active tracking
│   │   │   ├── hero.tsx            # Heading, roles rotating slider, and orbital skill orb
│   │   │   ├── marquee.tsx         # Infinite looping skills marquee
│   │   │   ├── about.tsx           # Terminal bio, stats, and count-up timer hook
│   │   │   ├── skills.tsx          # Technical proficiency group grids
│   │   │   ├── experience.tsx      # Career timeline with markdown parsing & docs listing
│   │   │   ├── projects.tsx        # Project tilt cards & expandable details dialog
│   │   │   ├── achievements.tsx    # Awards, education, and credentials list
│   │   │   ├── contact.tsx         # Direct contact handles & fully operational form
│   │   │   ├── footer.tsx          # Dynamic copyright info & social shortcuts
│   │   │   ├── command-palette.tsx # Keyboard-triggered search overlay dialog
│   │   │   ├── scroll-progress.tsx # Top screen viewport progress bar
│   │   │   └── back-to-top.tsx     # Return to top scroll button
│   │   └── ui/                     # Shadcn UI base primitives
│   ├── routes/
│   │   └── index.tsx               # Index route rendering the assembled portfolio component
│   ├── styles.css                  # Tailwinds directives and keyframe animations
│   ├── router.tsx                  # TanStack router setup
│   └── start.ts                    # Entry point bundle configurations
├── package.json                    # Scripts and dependencies configurations
└── vite.config.ts                  # Vite compiler configurations
```

---

## ⚙️ Customization & Setup

All developer, project, and experience details are centralized in [src/components/portfolio/constants.ts](file:///p:/Personal/my-portfolio/src/components/portfolio/constants.ts). 

To customize this portfolio for yourself, simply modify the variables exported from this file:

- **`ROLES`**: The list of rotating roles displayed on the hero header.
- **`LINKS`**: Contact parameters (GitHub, LinkedIn, Resume file path, and Email address).
- **`STATS`**: Years of learning, internships count, hackathons, and languages mapped in the count-up cards.
- **`SKILLS`**: Competency arrays mapped into tech pillars (AI/ML, Backend, Frontend, etc.).
- **`PROJECTS`**: Project metadata. Define `role`, `tagline`, custom `metrics` values, `highlights`, `problem` statements, and `architecture` summaries. 
  - *Tip: If the role includes the word `"Freelance"`, the UI automatically displays a gold themed badge on the thumbnail card.*
- **`EXPERIENCE`**: Job descriptions. Support markdown inline bold text (`**important**`), links (`[Link Text](url)`), and document arrays (`docs: [{ label: "Certificate", url: "/path.pdf" }]`).

---

## 🏃 Local Development

This codebase uses [Bun](https://bun.sh) for execution. If you do not have Bun installed, you can replace it with standard npm / yarn commands.

### 1. Clone the repository:
```bash
git clone https://github.com/vishaltyagi807/varshit.dev.git
cd varshit.dev
```

### 2. Install dependencies:
```bash
bun install
```

### 3. Run development server:
```bash
bun dev
```
Open `http://localhost:8080` (or the terminal-provided port) in your browser.

### 4. Build for production:
```bash
bun run build
```
The compiled, production-ready static bundles will output to the `/dist` directory.

### 5. Format & Lint:
```bash
bun run format   # Format files with Prettier
bun run lint     # Check for ESLint warnings
```

---

## 📄 License
This project is private and intended for personal portfolio presentation. All custom assets and codes are copyright © Varshit Tyagi. Feel free to use the structure to inspire your own portfolio!
