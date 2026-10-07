import BentoGrid from "@/components/home/bento-grid";
import Hero from "@/components/home/hero";
import ProjectCard from "@/components/projects/project-card";
import { featuredProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <div className="relative w-full overflow-hidden">
      <Hero />

      <div className="space-y-24 pb-20 container mx-auto px-4 md:px-6">
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <BentoGrid latestPost={latestPost} />
        </section>

        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="flex items-baseline justify-between border-b border-border pb-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
            >
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
