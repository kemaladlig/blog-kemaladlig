"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Award, FileBadge } from "lucide-react";

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const experiences = [
    {
      title: "Independent Product Engineer & Consultant",
      company: "Self-employed · Remote",
      period: "Jan 2024 - Present",
      points: [
        "Designed, built and still operate several production products alone: a published cross-platform mobile app on the App Store and Google Play, a real-time multiplayer platform, and a Chrome extension.",
        "Run parallel coding agents from versioned spec files (AGENTS.md and PROJECT_MAP.md context maps), and review every diff before it merges.",
        "Built code-rag, a Model Context Protocol server for local semantic code search, with no npm dependencies and its own evaluation harness: 94% recall@5 and MRR 0.83 across a 16-question benchmark.",
        "Handle the whole release per product, from schema and authorization rules through test suites and CI to store review.",
      ],
      skills: ["TypeScript", "React Native", "Next.js", "Supabase", "MCP", "Docker"],
    },
    {
      title: "Software Engineer Intern",
      company: "Huawei R&D Center · Istanbul, Türkiye",
      period: "Nov 2022 - Sep 2023",
      points: [
        "Developed and optimized native Android apps in Kotlin, with attention to startup time, memory and battery use.",
        "Integrated Huawei Mobile Services kits (Location, Push, Analytics, ML Kit) into production applications.",
        "Built Node.js and MongoDB services that processed 50,000+ rows for an internal analytics tool, and designed and tested the REST APIs behind them.",
      ],
      skills: ["Kotlin", "HMS Core", "Node.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Mobile Developer Intern",
      company: "Birfen Elektrik Elektronik · Istanbul, Türkiye",
      period: "Jul 2022 - Sep 2022",
      points: [
        "Built a mobile controller application bridging its UI to a robot's ROS backend over real-time protocols (TCP/IP, Bluetooth).",
        "Designed the responsive interface used to drive the robotic system remotely.",
      ],
      skills: ["Flutter", "Dart", "TCP/IP", "Bluetooth"],
    },
  ];

  const education = [
    {
      degree: "B.S. Computer Engineering",
      school: "Yalova University",
      period: "2020 - 2024",
      description: "Yalova, Türkiye",
    },
  ];

  const certifications = [
    { name: "Huawei Cloud HCCDP - Solution Architecture", issuer: "Huawei Cloud", date: "Aug 2025" },
    { name: "Huawei Cloud HCCDA - Cloud Native", issuer: "Huawei Cloud", date: "Aug 2025" },
    { name: "Huawei Cloud HCCDA - Tech Essentials", issuer: "Huawei Cloud", date: "Jul 2025" },
    { name: "Huawei Cloud DevOps Bootcamp", issuer: "Huawei", date: "2025" },
    { name: "3rd Place, Huawei Coding Marathon", issuer: "Huawei · Mobile Services category, nationwide", date: "2022" },
    {
      name: "Technical Author, Huawei Developers Blog",
      issuer: 'Medium · "Lambda Expressions and Higher-Order Functions in Kotlin"',
      date: "",
    },
  ];

  const skillGroups = [
    {
      label: "AI & Agents",
      items: [
        "Multi-agent orchestration",
        "Context engineering",
        "MCP server development",
        "Evaluation harnesses",
        "RAG & semantic search",
        "LLM integration",
      ],
    },
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Kotlin", "Dart", "SQL"],
    },
    {
      label: "Frontend & Mobile",
      items: [
        "React 19",
        "React Native (Expo)",
        "Next.js",
        "Vite",
        "Tailwind CSS v4",
        "Zustand",
        "Jetpack Compose",
        "Capacitor",
      ],
    },
    {
      label: "Backend & Data",
      items: [
        "Node.js",
        "Bun",
        "PostgreSQL",
        "Supabase (RLS, Edge Functions)",
        "Firebase",
        "SQLite / Drizzle",
        "REST",
        "WebSocket",
      ],
    },
    {
      label: "Desktop & Systems",
      items: ["PyQt6", "ONNX Runtime", "NumPy", "Win32 interop", "Multithreaded workers"],
    },
    {
      label: "Cloud & DevOps",
      items: ["Docker", "Kubernetes (GKE / CCE)", "GitHub Actions", "Nginx Ingress", "Terraform", "Vercel"],
    },
    {
      label: "Testing",
      items: ["Vitest", "Jest", "Playwright", "Node test runner", "CI quality gates"],
    },
  ];

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-16 py-8"
    >
      {/* Bio Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            I&apos;m a product engineer who ships production software alone, by orchestrating AI agent
            workflows. Recent work spans a published cross-platform mobile app, an MCP server that
            gives coding agents semantic code search, a real-time multiplayer game platform, and a
            dozen smaller products across web, mobile and desktop.
          </p>
          <p>
            Most days that means writing the specs and context maps agents build from, wiring MCP tools
            into the editor, and running evaluation harnesses against LLM features before they ship.
            Several products sit behind CI running over 450 automated tests.
          </p>
          <p>
            Before working independently I spent two internship years at Huawei R&amp;D and Birfen
            Elektrik Elektronik, building native Android features, HMS integrations and a robot control
            app over TCP/IP and Bluetooth.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </div>
        <div className="border-l-2 border-gray-200 dark:border-zinc-800 ml-3 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.title} className="relative pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-accent" />
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                </div>
                <p className="text-accent font-medium">{exp.company}</p>
                <ul className="space-y-1.5 list-disc pl-5 text-gray-600 dark:text-gray-400">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-1">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-lg">{edu.school}</h3>
              <p className="text-gray-500 text-sm mb-2">{edu.degree}</p>
              <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-1 rounded">
                {edu.period}
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <FileBadge className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Certifications & Recognition</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-medium">{cert.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
              </div>
              {cert.date && <p className="text-xs text-accent mt-3 font-mono">{cert.date}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Award className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
        </div>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                    className="px-3 py-1.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-sm text-sm font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
