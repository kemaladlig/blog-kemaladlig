"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "full" | "compact";
}

export default function ProjectCard({ project, index = 0, variant = "full" }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const accent = project.featured ? "#007AFF" : "#525252";

  const links = (
    <div className="flex gap-2">
      {project.repo && (
        <Link
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          aria-label={`${project.title} source on GitHub`}
        >
          <Github className="h-5 w-5" />
        </Link>
      )}
      {project.demo && (
        <Link
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          aria-label={`${project.title} live link`}
        >
          <ExternalLink className="h-5 w-5" />
        </Link>
      )}
    </div>
  );

  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.45, delay: Math.min(index, 6) * 0.06, ease: [0.22, 1, 0.36, 1] as const },
      };

  if (variant === "compact") {
    return (
      <motion.div {...enter} className="h-full">
        <MagicCard className="h-full" gradientColor={accent}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                  {project.tagline}
                </p>
              </div>
              {links}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-border/50 text-[11px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </MagicCard>
      </motion.div>
    );
  }

  return (
    <motion.div {...enter} className="h-full">
      <MagicCard className="h-full" gradientColor={accent}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-secondary rounded-xl shadow-sm">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            {links}
          </div>

          <div className="mb-4">
            {project.highlights && project.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.highlights.map((highlight) => (
                  <Badge key={highlight} variant="secondary" className="text-[10px]">
                    {highlight}
                  </Badge>
                ))}
              </div>
            )}
            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              {project.tagline}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="mt-auto pt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-border/50">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </MagicCard>
    </motion.div>
  );
}
