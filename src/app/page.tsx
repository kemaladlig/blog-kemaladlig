import BentoGrid from "@/components/home/bento-grid";
import Link from "next/link";
import { ArrowRight, Star, ExternalLink } from "lucide-react"; import { Badge } from "@/components/ui/badge";

// Home Page Component
export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">


      <div className="space-y-24 pb-20">
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 pt-10">
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

// Simple icons for the project cards if not imported
function Smartphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function Server(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}
