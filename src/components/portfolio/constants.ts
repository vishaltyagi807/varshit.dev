import {
  Brain,
  Server,
  Smartphone,
  Layers,
  Code2,
  Boxes,
  Shield,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export const ROLES = [
  "Mobile Applications",
  "Desktop Applications",
  "Web Applications",
  "Backend Architecture",
  "Distributed Systems",
  "AI Agents",
];

export const LINKS = {
  email: "mailto:varshityagi807@gmail.com",
  github: "https://github.com/vishaltyagi807",
  linkedin: "https://www.linkedin.com/in/varshityagi/",
  resume: "/Varshit_Tyagi_Resume.pdf",
  web3forms_key: "bc9501ee-49cc-4956-b62a-7a4ee36357a6",
};

export const STATS = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Hackathons", value: 3, suffix: "+" },
  { label: "Programming Languages", value: 4, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
  // { label: "Records Managed", value: 100, suffix: "K+" },
];

export const SKILLS = [
  {
    group: "AI / ML",
    icon: Brain,
    items: [
      "LLMs",
      "Agentic AI",
      "Multi-agent Systems",
      "AI Workflows",
      "Embeddings",
      "Privacy-Preserving AI",
    ],
  },
  {
    group: "Backend",
    icon: Server,
    items: [
      "Spring Boot",
      "Ktor",
      "Node.js",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "Supabase",
      "Auth · RBAC · RLS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    group: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Jetpack Compose", "Kotlin Multiplatform", "Android"],
  },
  {
    group: "Frontend",
    icon: Layers,
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    group: "Languages",
    icon: Code2,
    items: ["Java", "Kotlin", "Python", "TypeScript", "JavaScript", "Dart", "C", "SQL"],
  },
  {
    group: "Tools",
    icon: Boxes,
    items: ["Git", "GitHub", "Linux", "Docker", "Kubernetes", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    slug: "proctor",
    name: "Proctor",
    tagline: "AI-powered student monitoring & complaint system",
    year: "2023 — Present",
    role: "Lead Full Stack Developer",
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Event-Driven"],
    accent: "from-[oklch(0.68_0.2_258)] to-[oklch(0.66_0.24_305)]",
    icon: Shield,
    metrics: [
      { k: "100K+", v: "Student records" },
      { k: "1K+", v: "Concurrent ops/sec" },
      { k: "<1s", v: "Live event updates" },
    ],
    highlights: [
      "AI-driven student discipline platform with 100K+ records",
      "End-to-end complaint workflows with audit logs & auto escalation",
      "Live monitoring dashboard on an event-driven backend",
      "Scalable REST APIs and normalized PostgreSQL schema",
    ],
    problem:
      "Institutions lacked a unified, auditable system to track behavioral incidents at scale, forcing manual paperwork and slow AI-driven escalations.",
    solution:
      "A production-ready platform combining an event-driven Spring Boot backend, a Next.js dashboard, and AI-assisted monitoring — with role-scoped access for staff, faculty, and administrators.",
    architecture:
      "Next.js → API Gateway → Spring Boot services (Complaints · Users · Events) → PostgreSQL, with an async event bus powering the live dashboard.",
    image: undefined as string | undefined,
    liveLink: undefined as string | undefined,
  },
  {
    slug: "vimora",
    name: "Vimora",
    tagline: "Agentic AI voice assistant with peer-to-peer WebRTC",
    year: "Mar 2025",
    role: "Backend & Agentic AI Developer",
    stack: ["Next.js", "Android", "Jetpack Compose", "WebRTC"],
    accent: "from-[oklch(0.82_0.16_200)] to-[oklch(0.68_0.2_258)]",
    icon: Sparkles,
    metrics: [
      { k: "600ms", v: "Perceived latency" },
      { k: "2s", v: "Session establishment" },
      { k: "30+/s", v: "Signaling events" },
    ],
    highlights: [
      "Peer-to-peer WebRTC sessions established in 2–3 seconds",
      "Multi-channel streaming: audio, video, text concurrently",
      "600–900ms perceived response via async media buffering",
      "Auto reconnection & ICE renegotiation within ~2 seconds",
    ],
    problem:
      "Voice agents built on centralized pipelines add hundreds of milliseconds of overhead and drop on flaky networks.",
    solution:
      "A peer-to-peer signaling and media layer paired with an agentic AI loop, giving conversational responses close to human turn-taking speed.",
    architecture:
      "Android/Jetpack Compose client ↔ Custom signaling exchange ↔ Next.js control plane ↔ Agent runtime; media flows P2P over WebRTC with ICE fallback.",
    image: "/vimora.png",
    liveLink: "https://vimora.varshit.dev",
    githubLink: "https://github.com/vishaltyagi807/Vimora---AI-Assistant",
  },
  {
    slug: "brokebro",
    name: "BrokeBro",
    tagline:
      "A modern student super app that unifies academics, career, finance, wellness, and community services into a single cross-platform experience, delivering a scalable and seamless ecosystem for Android and iOS users.",
    year: "2024",
    role: "Freelance Lead Mobile Developer",
    stack: ["Flutter", "Supabase"],
    accent: "from-[oklch(0.70_0.22_140)] to-[oklch(0.68_0.2_258)]",
    icon: Smartphone,
    metrics: [
      { k: "2+", v: "Platforms (iOS/Android)" },
      { k: "Supabase", v: "Backend Cloud" },
      { k: "Modular", v: "Architecture" },
    ],
    highlights: [
      "Academic resources and productivity tools",
      "Student finance and budgeting assistance",
      "Career opportunities and internship discovery",
      "Community interaction and collaboration",
      "Wellness and student support resources",
      "Secure authentication and cloud-backed data with Supabase",
      "Native-like performance across Android and iOS using Flutter",
    ],
    problem:
      "Students faced a fragmented campus experience, needing to bounce between multiple systems and apps for coursework, budgeting, career opportunities, and wellness support.",
    solution:
      "A unified, cross-platform student super app built with Flutter and Supabase that consolidates all campus lifestyle and academic utilities under a single modular mobile interface.",
    architecture:
      "Flutter client applications (Android & iOS) interfacing with Supabase for real-time Postgres DB operations, Edge Functions, and secure user Authentication.",
    image: undefined as string | undefined,
    liveLink: undefined as string | undefined,
  },
  {
    slug: "alphatoinfinity",
    name: "AlphaToInfinity",
    tagline:
      "A cross-platform e-learning platform for competitive and government exam preparation featuring structured courses, mock tests, progress tracking, and a scalable backend built for high-performance mobile learning.",
    year: "2024",
    role: "Freelance Full Stack Developer",
    stack: ["Kotlin Multiplatform", "Spring Boot"],
    accent: "from-[oklch(0.76_0.18_30)] to-[oklch(0.66_0.24_305)]",
    icon: GraduationCap,
    metrics: [
      { k: "KMP", v: "Shared business logic" },
      { k: "Spring Boot", v: "Robust API Gateway" },
      { k: "High Perf", v: "Assessment engine" },
    ],
    highlights: [
      "Structured courses and study materials",
      "Video lectures and educational content",
      "Mock tests and practice quizzes",
      "Progress tracking and performance analytics",
      "Exam-specific learning paths",
      "Notifications for classes, exams, and updates",
      "Scalable backend services built with Spring Boot",
      "Shared cross-platform business logic using Kotlin Multiplatform",
    ],
    problem:
      "Aspirants preparing for competitive and government exams needed a low-latency, reliable learning application that shares core business logic across platforms without sacrificing native feel.",
    solution:
      "An e-learning platform employing Kotlin Multiplatform to unify core analytics and course validation client logic, powered by a Spring Boot backend designed for high-concurrency practice tests.",
    architecture:
      "Android & iOS Apps utilizing shared Kotlin Multiplatform library modules, connecting via REST APIs to a Spring Boot backend and PostgreSQL database.",
    image: undefined as string | undefined,
    liveLink: undefined as string | undefined,
  },
];

export const EXPERIENCE = [
  {
    role: "Software Development Engineer — Intern",
    company: "Theradive",
    location: "Hybrid · India",
    period: "Mar 2026 – Jul 2026",
    stack: ["Next.js", "Supabase", "PostgreSQL", "RBAC", "RLS"],
    bullets: [
      "Designed a scalable therapist consultation platform, cutting manual paperwork by 80%.",
      "Implemented Role-Based Access Control and Row-Level Security across 5+ user roles for HIPAA-grade access.",
      "Reduced API response times by 60% via query optimization and database indexing.",
    ],
    docs: [{ label: "Offer Latter", url: "/intern/Varshit X Theradive Offer Letter.pdf" }],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Amritashya Ayurveda",
    location: "Hybrid · Noida, India",
    period: "Nov 2025 – Jan 2026",
    stack: ["Next.js", "Supabase", "Razorpay", "RBAC", "RLS", "Shiprocket"],
    bullets: [
      "Built production e-commerce & CRM Platform using Next.js, Supabase, Razorpay (~200+ daily users).",
      "Architected RBAC + Row-Level Security for 6 roles with secure multi-tenant isolation.",
      "Automated shipping via Shiprocket, reducing manual effort by ~70%.",
      "Optimized DB queries & indexing, reducing latency ~2.8s → ~900ms.",
      "[Live site here](https://amritashya.in)",
    ],
    // docs: [{ label: "Offer Letter", url: "/Amritashya_Ayurveda_Offer.pdf" }],
  },
  {
    role: "Freelance Software Engineer",
    company: "Independent Contracts",
    location: "Remote",
    period: "Jun 2024 – Dec 2024",
    stack: ["Flutter", "Supabase", "Kotlin Multiplatform", "Spring Boot"],
    bullets: [
      "Built **BrokeBro**, a student super app built on Flutter and Supabase that consolidates campus lifestyle, academics, finance, and community features for iOS and Android.",
      "Developed **AlphaToInfinity**, a cross-platform e-learning app employing Kotlin Multiplatform for shared analytics and Spring Boot backend services built for mock test delivery.",
    ],
  },
];

export const CERTS = [
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/aa2e9966a1ec",
  },
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/3fbba1666d0a",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/6cd6317e83ab",
  },
  {
    name: "REST API (Intermediate)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/e37544557d57",
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/36900b5b029f",
  },
  {
    name: "5★ Java Badge",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/profile/varshityagi807",
  },
];

export const ACHIEVEMENTS = [
  { title: "2nd Runner-up · Trikon 2.0", detail: "Selected from a competitive field of teams." },
  {
    title: "Top 4 in 3 Hackathons",
    detail: "Consistently ranked among the top teams across events.",
  },
  { title: "5★ Java Badge", detail: "Awarded on HackerRank for problem-solving proficiency." },
];

export const EDUCATION = [
  {
    school: "Meerut Institute of Engineering and Technology",
    degree: "B.Tech, Computer Science & Engineering",
    period: "Sep 2023 – May 2027",
    detail: "CGPA 7.9",
  },
  {
    school: "St. Charles Inter College, Sardhana",
    degree: "Senior Secondary — Science",
    period: "2023",
    detail: "72%",
  },
  {
    school: "St. Charles Inter College, Sardhana",
    degree: "Secondary",
    period: "2021",
    detail: "76%",
  },
];

export const MARQUEE = [
  "Kotlin",
  "Java",
  "Python",
  "TypeScript",
  "Spring Boot",
  "Next.js",
  "PostgreSQL",
  "Flutter",
  "Jetpack Compose",
  "Docker",
  "Kubernetes",
  "Supabase",
  "WebRTC",
  "Ktor",
  "Dart",
  "SQL",
  "Linux",
  "GitHub",
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
