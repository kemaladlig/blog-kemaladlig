"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Rahmet Eli",
      description:
        "A comprehensive cross-platform lifestyle application that connects users with community resources. Features include real-time event updates, community forums, and resource mapping.",
      tags: ["React Native", "TypeScript", "Redux Toolkit", "Firebase", "Maps API"],
      links: {
        github: "https://github.com/kemaladlig", // Mock link
        demo: "https://example.com/rahmet-eli",
      },
      featured: true,
    },
    {
      title: "K8s Search Engine",
      description:
        "A powerful search tool designed for Kubernetes administrators. It allows for quick querying of kubectl commands and resource definitions, containerized and orchestrated on a live K8s cluster.",
      tags: ["React", "Node.js", "Kubernetes", "Docker", "Elasticsearch"],
      links: {
        github: "https://github.com/kemaladlig", // Mock link
        demo: "https://example.com/k8s-search",
      },
      featured: true,
    },
    {
      title: "TaskMaster Pro",
      description:
        "A productivity application focused on agile project management. Includes kanban boards, sprint planning tools, and team collaboration features.",
      tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      links: {
        github: "https://github.com/kemaladlig", // Mock link
        demo: null,
      },
      featured: false,
    },
    {
      title: "DevOps Dashboard",
      description:
        "A centralized dashboard for monitoring CI/CD pipelines, server health, and deployment statuses across multiple environments.",
      tags: ["Vue.js", "Go", "Prometheus", "Grafana"],
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
          A showcase of my recent work, side projects, and open source contributions.
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
