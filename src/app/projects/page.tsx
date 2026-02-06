"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  const projects = [
    {
      title: "KpssArena",
      description:
        "A comprehensive mobile exam preparation platform featuring gamified learning, multiple game modes, and competitive arena battles. Built with Expo Router and TypeScript.",
      tags: ["React Native", "Expo", "TypeScript", "Supabase", "SQLite", "Zustand"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: true,
      highlights: ["Multiplayer Arena", "Premium Monetization", "Daily Challenges"],
    },
    {
      title: "Rahmet Eli",
      description:
        "Cross-platform Islamic lifestyle application with comprehensive features including prayer times with location detection, Qibla compass, YouTube video integration, and content feeds.",
      tags: ["React Native", "Expo", "Firebase", "TypeScript", "RSS", "Push Notifications"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: true,
      highlights: ["Published on Stores", "Real-time Notifications", "Multi-language"],
    },
    {
      title: "Kubectl Command Tool",
      description:
        "Full-stack web application for Kubernetes command discovery and learning. Features fuzzy search functionality, categorized commands, and comprehensive usage guides on a live cluster.",
      tags: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "NGINX"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: "https://kubectl-command-tool.duckdns.org",
      },
      featured: true,
      highlights: ["Live Deployment", "Fuzzy Search", "Containerized"],
    },
    {
      title: "Auto-Motion Video Generator",
      description:
        "Automated video production system that transforms JSON datasets into cinematic 60 FPS YouTube Shorts/Reels. Built with Remotion and React.",
      tags: ["Remotion", "React", "TypeScript", "Video Processing", "Tailwind CSS"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: false,
      highlights: ["60 FPS Output", "Automated Processing"],
    },
    {
      title: "Robotic System Control",
      description:
        "Cross-platform Flutter application for real-time robotic system communication. Implements TCP/IP and Bluetooth protocols for remote control.",
      tags: ["Flutter", "Dart", "TCP/IP", "Bluetooth", "Real-time"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: false,
      highlights: ["Real-time Control", "Multi-platform"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A showcase of scalable mobile applications built with React Native and TypeScript, featuring cloud infrastructure and real-time features.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="h-full"
          >
            <MagicCard className="h-full p-0 flex flex-col justify-between" gradientColor={project.featured ? "#007AFF" : "#525252"}>
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-secondary rounded-xl shadow-sm">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.highlights.map(h => (
                      <Badge key={h} variant="secondary" className="text-[10px]">{h}</Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-border/50">{tag}</Badge>
                  ))}
                </div>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
