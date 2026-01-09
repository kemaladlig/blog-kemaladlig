import BentoGrid from "@/components/home/bento-grid";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <BentoGrid />
      </section>

      <section className="space-y-6 max-w-2xl">
        <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Selected Work</h2>
            <span className="text-sm text-gray-500">2022 - Present</span>
        </div>

        <div className="space-y-8">
            <div className="group">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">Rahmet Eli</h3>
                <p className="text-gray-500 text-sm mb-2">Full-Stack Mobile Application • React Native, Firebase</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Designed and developed a cross-platform lifestyle application. Managed complete product lifecycle from requirement analysis to deployment on App Store and Google Play.
                </p>
            </div>

            <div className="group">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">K8s Search</h3>
                <p className="text-gray-500 text-sm mb-2">Web Tool & DevOps • React, Node.js, Kubernetes</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Built a comprehensive search engine for kubectl commands. Containerized and orchestrated on a live K8s cluster with auto-scaling policies.
                </p>
            </div>

            <div className="group">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">Huawei R&D Intern</h3>
                <p className="text-gray-500 text-sm mb-2">HMS Integration & Backend • Node.js, Kotlin</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Integrated Huawei Mobile Services (HMS) kits into applications and optimized server-side tools using Node.js and MongoDB.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}
