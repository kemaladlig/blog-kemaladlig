"use client";

import { Github, Linkedin, MapPin, Mail, FileText, Smartphone, Server, Database, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";



// Fallback post data for client component
const LATEST_POST = {
  title: "Building Scalable Cloud Architectures",
  excerpt: "A deep dive into container orchestration, ELB configuration, and CI/CD pipelines.",
  date: "Oct 24, 2023",
  slug: "kubernetes-architecture",
  tags: ["DevOps", "K8s"],
};

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">

      {/* 1. Bio Tile (Large) */}
      <MagicCard
        className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between p-8 relative overflow-hidden"
        gradientColor="#007AFF"
      >
        <div className="z-10 relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Available for work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Kemal Adlığ
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Mobile developer & Cloud Architect. Building scalable, real-time systems with <span className="text-foreground font-semibold">React Native</span> and <span className="text-foreground font-semibold">DevOps</span> excellence.
          </p>
        </div>

        <div className="z-10 flex flex-wrap gap-2 mt-4">
          {["React Native", "Next.js", "Node.js", "Kubernetes", "AWS"].map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1 font-medium backdrop-blur-sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Subtle background gradient */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      </MagicCard>

      {/* 2. Map / Location Tile */}
      <MagicCard className="md:col-span-1 row-span-1 relative group" gradientColor="#F59E0B">
        <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-60 group-hover:opacity-40">
          {/* Map Placeholder Image or Embed */}
          <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/28.9784,41.0082,11,0/400x400?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')] bg-cover bg-center grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

        <div className="z-20 relative h-full flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-bold">Istanbul, TR</span>
          </div>
          <p className="text-xs text-gray-400 font-mono mt-1">UTC+3 · REMOTE</p>
        </div>
      </MagicCard>

      {/* 3. Social Links Tile */}
      <MagicCard className="md:col-span-1 row-span-1 p-6 flex flex-col justify-center gap-4" gradientColor="#9333ea">
        <Link href="https://github.com/kemaladlig" target="_blank" className="flex items-center justify-between group/link hover:text-primary transition-colors">
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5" />
            <span className="font-medium">GitHub</span>
          </div>
          <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
        </Link>
        <Link href="https://linkedin.com/in/kemaladlig" target="_blank" className="flex items-center justify-between group/link hover:text-primary transition-colors">
          <div className="flex items-center gap-3">
            <Linkedin className="h-5 w-5" />
            <span className="font-medium">LinkedIn</span>
          </div>
          <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
        </Link>
        <Link href="mailto:kemaladligdev@gmail.com" className="flex items-center justify-between group/link hover:text-primary transition-colors">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5" />
            <span className="font-medium">Email</span>
          </div>
          <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
        </Link>
      </MagicCard>

      {/* 4. Tech Stack "Grid" - Focus on DevOps/Cloud - Vertical Stack */}
      <MagicCard className="md:col-span-1 row-span-1 p-6 flex flex-col items-center justify-center gap-6" gradientColor="#10b981">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest absolute top-6 left-6">STACK</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4">
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
              <Smartphone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Mobile</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
              <Cloud className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Cloud</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
              <Server className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Backend</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
              <Database className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Data</span>
          </div>
        </div>
      </MagicCard>

      {/* 5. Latest Post */}
      <div className="md:col-span-2 row-span-1 h-full">
        <MagicCard className="h-full p-0 overflow-hidden group" gradientColor="#ec4899">
          <Link href={`/blog/${LATEST_POST.slug}`} className="block h-full p-6 relative z-10">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounde-full">{LATEST_POST.tags[0]}</span>
              <span className="text-xs text-muted-foreground">{LATEST_POST.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{LATEST_POST.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{LATEST_POST.excerpt}</p>
            <div className="absolute bottom-6 right-6">
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </MagicCard>
      </div>

      {/* 6. CV Download */}
      <MagicCard className="md:col-span-1 row-span-1 relative group cursor-pointer" gradientColor="#ef4444">
        <a href="/Kemal_Adlig_CV.pdf" download="Kemal_Adlig_CV.pdf" className="flex flex-col items-center justify-center h-full w-full p-6 z-10 relative">
          <div className="p-3 bg-secondary rounded-full mb-3 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
            <FileText className="h-6 w-6 text-foreground group-hover:text-primary" />
          </div>
          <span className="font-semibold text-sm">Download CV</span>
          <span className="text-xs text-muted-foreground mt-1">PDF (1.2 MB)</span>
        </a>
      </MagicCard>

    </div>
  );
}
