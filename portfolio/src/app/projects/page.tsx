"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Rahmet Eli",
      description:
        "Designed and developed a cross-platform lifestyle application using React Native and Expo. Implemented robust backend services using Firebase (Auth, Firestore, Cloud Messaging). Published on both App Store and Google Play Store.",
      tags: ["React Native", "Expo", "Firebase", "TypeScript"],
      links: {
        github: "https://github.com/kemaladlig", // Mock link as per prompt
        demo: null, // No demo link provided
      },
      featured: true,
    },
    {
      title: "K8s Search",
      description:
        "Built a comprehensive web-based search engine for Kubernetes (kubectl) commands. Developed full-stack architecture using React.js and Node.js. Containerized the application stack using Docker and orchestrated the deployment on a live Kubernetes cluster with Load Balancers and auto-scaling policies.",
      tags: ["React", "Node.js", "Kubernetes", "Docker", "DevOps"],
      links: {
        github: "https://github.com/kemaladlig", // Mock link
        demo: null,
      },
      featured: true,
    },
    {
      title: "Robotic System Control App",
      description:
        "Developed a cross-platform Flutter application for real-time communication with robotic systems. Implemented remote control protocols (TCP/IP, Bluetooth) and designed a responsive UI.",
      tags: ["Flutter", "Dart", "TCP/IP", "Bluetooth"],
      links: {
        github: "https://github.com/kemaladlig", // Mock link
        demo: null,
      },
      featured: false,
    },
    {
      title: "HMS Integration",
      description:
        "Integrated Huawei Mobile Services (HMS) kits (Location, Push, Analytics) into various applications, significantly enhancing user engagement.",
      tags: ["HMS Core", "Android", "Kotlin", "Java"],
      links: {
        github: "https://github.com/kemaladlig", // Mock link
        demo: null,
      },
      featured: false,
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
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
    </motion.div>
  );
}
