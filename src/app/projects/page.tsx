import ProjectCard from "@/components/projects/project-card";
import { featuredProjects, otherProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description:
    "Production software built and operated solo: an MCP server for semantic code search, a real-time multiplayer platform, a desktop overlay for full-screen games, and a published mobile app.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A selection of the software I have designed, built and still operate. Most of it runs solo,
          with coding agents working from versioned spec files while I review every diff before it
          merges.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Selected work
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Also shipped
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}
