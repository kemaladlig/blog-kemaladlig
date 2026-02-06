"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "KpssArena",
      description:
        "A comprehensive mobile exam preparation platform featuring gamified learning, multiple game modes, and competitive arena battles. Built with Expo Router and TypeScript, featuring real-time multiplayer, ghost opponents, daily challenges, and a complete premium monetization system with cosmetics and rewards.",
      tags: ["React Native", "Expo", "TypeScript", "Supabase", "SQLite", "Zustand"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: true,
      highlights: ["Multiplayer Arena", "Premium Monetization", "Daily Challenges", "Offline-First"],
    },
    {
      title: "Rahmet Eli",
      description:
        "Cross-platform Islamic lifestyle application with comprehensive features including prayer times with location detection, Qibla compass, YouTube video integration, TRT news RSS feeds, Firestore announcements with push notifications, Islamic calendar, digital library, and donation system. Published on both App Store and Google Play.",
      tags: ["React Native", "Expo", "Firebase", "TypeScript", "RSS", "Push Notifications"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: true,
      highlights: ["Published on Stores", "Real-time Notifications", "Multi-language Support", "Advanced Features"],
    },
    {
      title: "Kubectl Command Tool",
      description:
        "Full-stack web application for Kubernetes command discovery and learning. Features fuzzy search functionality, categorized commands, and comprehensive usage guides. Deployed on Kubernetes cluster with Docker containers, NGINX Ingress, and SSL/TLS encryption. Serves developers with an intuitive interface for kubectl command reference.",
      tags: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "NGINX"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: "https://kubectl-command-tool.duckdns.org",
      },
      featured: true,
      highlights: ["Live Deployment", "Fuzzy Search", "Containerized", "SSL Certified"],
    },
    {
      title: "Auto-Motion Video Generator",
      description:
        "Automated video production system that transforms JSON datasets into cinematic 60 FPS YouTube Shorts/Reels. Built with Remotion and React, featuring glassmorphism design, spring physics animations, and dynamic theming. Processes data into engaging visual content with professional quality output.",
      tags: ["Remotion", "React", "TypeScript", "Video Processing", "Tailwind CSS"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: false,
      highlights: ["60 FPS Output", "Automated Processing", "Cinematic Quality", "Data-driven"],
    },
    {
      title: "Robotic System Control",
      description:
        "Cross-platform Flutter application for real-time robotic system communication. Implements TCP/IP and Bluetooth protocols for remote control, featuring responsive UI design and real-time data visualization. Enables seamless interaction with robotic systems across multiple platforms.",
      tags: ["Flutter", "Dart", "TCP/IP", "Bluetooth", "Real-time"],
      links: {
        github: "https://github.com/kemaladlig",
        demo: null,
      },
      featured: false,
      highlights: ["Real-time Control", "Multi-platform", "Protocol Support"],
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
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A showcase of my recent work, including mobile applications, full-stack web projects, and DevOps implementations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col justify-between bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-3xl p-8 hover:shadow-2xl hover:border-accent/30 transition-all duration-500 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-8 w-8 text-accent" />
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="p-2 text-gray-500 hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      className="p-2 text-gray-500 hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Highlights */}
              {project.highlights && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Other Projects */}
      <div className="mt-16 space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Other Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="text-gray-500 hover:text-accent transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        className="text-gray-500 hover:text-accent transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Highlights for non-featured */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-accent/5 text-accent/80"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-gray-200/50 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
