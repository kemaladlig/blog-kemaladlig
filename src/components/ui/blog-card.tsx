import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
  className?: string;
  gradientColor?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  tags = [],
  className,
  gradientColor = "#007AFF"
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block h-full"
    >
      <MagicCard
        className={className}
        gradientColor={gradientColor}
      >
        <div className="p-6 h-full flex flex-col justify-between group">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-primary" />
            <time className="text-xs text-muted-foreground font-medium font-mono">
              {date}
            </time>
          </div>
        </div>
      </MagicCard>
    </Link>
  );
}
