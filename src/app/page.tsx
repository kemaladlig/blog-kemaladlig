import BentoGrid from "@/components/home/bento-grid";
import Hero from "@/components/home/hero";
import Link from "next/link";
import { ArrowRight, Star, Smartphone, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Home Page Component
export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">

      <Hero />

      <div className="space-y-24 pb-20 container mx-auto px-4 md:px-6">
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <BentoGrid />
        </section>

        <section className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="flex items-baseline justify-between border-b border-border pb-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Selected Work
            </h2>
            <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
              View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="group relative bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border rounded-2xl p-6 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-background rounded-lg border border-border">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <Badge variant="outline">React Native</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">KpssArena</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Comprehensive exam preparation platform with gamified learning and multiplayer arena battles.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60">
                <span>Expo</span>
                <span>•</span>
                <span>Supabase</span>
                <span>•</span>
                <span>RevenueCat</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border rounded-2xl p-6 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-background rounded-lg border border-border">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="outline">Mobile App</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Rahmet Eli</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Cross-platform Islamic lifestyle app with prayer times, Qibla compass, and real-time notifications.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60">
                <span>React Native</span>
                <span>•</span>
                <span>Firebase</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border rounded-2xl p-6 transition-all duration-300 md:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-background rounded-lg border border-border">
                  <Server className="h-5 w-5 text-purple-500" />
                </div>
                <Badge variant="outline">DevOps Tool</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Kubectl Command Tool</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-2xl">
                Full-stack web application for Kubernetes command discovery with fuzzy search, deployed on live K8s cluster.
                Engineered to simplify complex CLI operations for DevOps teams.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60">
                <span>React</span>
                <span>•</span>
                <span>Node.js</span>
                <span>•</span>
                <span>Docker</span>
                <span>•</span>
                <span>K8s</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Local icons removed in favor of lucide-react imports
