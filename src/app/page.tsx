import BentoGrid from "@/components/home/bento-grid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <BentoGrid />
      </section>

      <section className="space-y-6 max-w-3xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-bold tracking-tight">Selected Work</h2>
            <Link href="/projects" className="text-sm text-accent hover:underline flex items-center gap-1">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
        </div>

        <div className="space-y-10">
            <div className="group">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">KpssArena</h3>
                <p className="text-gray-500 text-sm mb-3 font-mono">Mobile Gaming • React Native, Expo, Supabase</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Comprehensive exam preparation platform with gamified learning, multiplayer arena battles, and premium monetization. Features real-time competitive gameplay and offline-first architecture.
                </p>
            </div>

            <div className="group">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">Rahmet Eli</h3>
                <p className="text-gray-500 text-sm mb-3 font-mono">Islamic Lifestyle App • React Native, Firebase</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Cross-platform Islamic application with prayer times, Qibla compass, YouTube integration, and real-time notifications. Published on App Store and Google Play with advanced features.
                </p>
            </div>

            <div className="group">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">Kubectl Command Tool</h3>
                <p className="text-gray-500 text-sm mb-3 font-mono">DevOps Tool • React, Node.js, Kubernetes</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Full-stack web application for Kubernetes command discovery with fuzzy search, deployed on live K8s cluster with Docker containers and SSL certification.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}
