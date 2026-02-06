"use client";


import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#fbbf24" // Yellow
            />
            <Spotlight
                className="top-10 left-full h-[80vh] w-[50vw] md:left-80"
                fill="#3b82f6" // Blue
            />
            <Spotlight
                className="top-28 left-80 h-[80vh] w-[50vw]"
                fill="#60a5fa" // Lighter Blue
            />
            <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <div className="flex flex-col items-center justify-center text-center animate-fade-in-up">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8 gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Available for new projects
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-heading tracking-tight pb-4">
                        Crafting High-Performance <br /> Mobile & Cloud Solutions.
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto leading-relaxed">
                        I&apos;m <span className="text-white font-semibold">Kemal Adlığ</span>, a Senior Mobile Developer & Cloud Architect.
                        I build pixel-perfect mobile apps and scalable backend infrastructures.
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <Link href="/projects">
                            <Button size="lg" className="h-12 px-8 rounded-full text-base group">
                                View Work
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="mailto:kemaladligdev@gmail.com">
                            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base backdrop-blur-sm bg-black/10 hover:bg-black/20 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
