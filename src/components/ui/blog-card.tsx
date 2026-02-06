import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  tags = [],
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block p-6 h-full bg-gray-50 dark:bg-zinc-900 border border-transparent hover:border-accent/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className="h-5 w-5 text-accent" />
      </div>

      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex gap-2 mb-4 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {excerpt}
          </p>
        </div>

        <time className="text-xs text-gray-400 font-medium font-mono">
          {date}
        </time>
      </div>
    </Link>
  );
}
