"use client";

import { Github, Linkedin, MapPin, Mail, FileText, Smartphone, Server, Database, Cloud } from "lucide-react";
import Link from "next/link";
import BlogCard from "@/components/ui/blog-card";
import { motion } from "framer-motion";
import type { Post } from "@/lib/blog";

interface BentoGridProps {
  latestPost?: Post;
}

export default function BentoGrid({ latestPost }: BentoGridProps) {
  const displayPost = latestPost || {
    title: "No recent posts",
    excerpt: "Check back later for new content.",
    date: "",
    slug: "#",
    tags: [],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">

      {/* 1. Bio Tile (Large) */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="md:col-span-2 lg:col-span-2 row-span-2 bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-transparent hover:border-gray-200 dark:hover:border-zinc-800 transition-colors"
      >
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Kemal Adlığ
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
            Mobile Application Developer & DevOps Engineer bridging the gap between mobile UX and scalable cloud infrastructure.
          </p>
        </div>
        <div className="z-10 flex flex-wrap gap-2 mt-4">
           <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-700 text-sm">React Native</span>
           <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-700 text-sm">Kotlin</span>
           <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-700 text-sm">Kubernetes</span>
        </div>

        {/* Abstract decoration */}
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 animate-pulse transition-colors duration-1000" />
      </motion.div>

      {/* 2. Map / Location Tile */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="md:col-span-1 row-span-1 bg-gray-900 text-white rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
      >
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
          style={{
            backgroundImage: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
              ? `url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/28.9784,41.0082,11,0/400x400?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}')`
              : undefined,
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="z-10 relative h-full flex flex-col justify-between">
            <div className="bg-white/10 backdrop-blur-md w-fit p-2 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono text-gray-300">BASED IN</p>
                  <p className="font-bold text-lg">Istanbul, TR</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white">
                  View Map
                </div>
            </div>
        </div>
      </motion.div>

      {/* 3. Social Links Tile */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="md:col-span-1 row-span-1 bg-accent rounded-3xl p-6 flex flex-col justify-center gap-4 text-white"
      >
        <Link href="https://github.com/kemaladlig" target="_blank" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Github className="h-6 w-6" />
            <span className="font-medium">GitHub</span>
        </Link>
        <Link href="https://linkedin.com/in/kemaladlig" target="_blank" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Linkedin className="h-6 w-6" />
            <span className="font-medium">LinkedIn</span>
        </Link>
        <Link href="mailto:kemaladligdev@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Mail className="h-6 w-6" />
            <span className="font-medium">Email</span>
        </Link>
      </motion.div>

      {/* 4. Tech Stack "Grid" */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="md:col-span-1 row-span-1 bg-gray-50 dark:bg-zinc-900 rounded-3xl p-6 flex flex-col justify-center items-center gap-4 text-center border border-transparent hover:border-accent/30 transition-colors"
      >
         <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Tech Stack</p>
         <div className="grid grid-cols-4 gap-4 text-gray-600 dark:text-gray-400">
            <div title="Mobile Development" className="cursor-help">
              <Smartphone className="h-6 w-6 hover:text-accent transition-colors" />
            </div>
            <div title="Cloud Infrastructure" className="cursor-help">
              <Cloud className="h-6 w-6 hover:text-accent transition-colors" />
            </div>
            <div title="Backend Systems" className="cursor-help">
              <Server className="h-6 w-6 hover:text-accent transition-colors" />
            </div>
            <div title="Databases" className="cursor-help">
              <Database className="h-6 w-6 hover:text-accent transition-colors" />
            </div>
         </div>
      </motion.div>

      {/* 5. Latest Post (Reusing Blog Card Logic visually) */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="md:col-span-2 row-span-1"
      >
        <BlogCard
          title={displayPost.title}
          excerpt={displayPost.excerpt}
          date={displayPost.date}
          slug={displayPost.slug}
          tags={displayPost.tags}
          className="h-full"
        />
      </motion.div>

      {/* 6. CV Download / Resume */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="md:col-span-1 row-span-1 bg-gray-50 dark:bg-zinc-900 rounded-3xl p-6 flex flex-col items-center justify-center gap-2 group cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-zinc-800"
      >
        <div className="p-4 bg-accent/10 rounded-full group-hover:scale-110 transition-transform duration-300">
            <FileText className="h-8 w-8 text-accent" />
        </div>
        <span className="font-medium text-sm">Download CV</span>
      </motion.div>

    </div>
  );
}
