import React from "react";

interface TechBadgeProps {
    icon: React.ReactNode;
    label: string;
    category?: string;
}

export function TechBadge({ icon, label, category }: TechBadgeProps) {
    return (
        <div className="flex flex-col items-center gap-1.5 group cursor-default">
            <div className="relative p-2.5 rounded-2xl bg-secondary/40 border border-transparent group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-300">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
                <span className="text-xs font-medium text-foreground/80 group-hover:text-primary transition-colors">
                    {label}
                </span>
                {category && (
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider opacity-60">
                        {category}
                    </span>
                )}
            </div>
        </div>
    );
}
