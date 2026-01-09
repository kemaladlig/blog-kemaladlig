import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

// Ensure params are correctly typed for Next.js App Router dynamic routes
export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Kemal Adlığ`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 animate-in fade-in duration-700">
      <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-accent transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <header className="mb-10">
        <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
                <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                    {tag}
                </span>
            ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
          {post.title}
        </h1>
        <time className="text-gray-500 font-mono text-sm">
          {post.date}
        </time>
      </header>

      <div className="prose dark:prose-invert prose-blue max-w-none">
        {/* Simple markdown rendering simulation */}
        {post.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>
            if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>
            if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-bold mt-4 mb-2">{line.replace('### ', '')}</h3>
            if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc">{line.replace('- ', '')}</li>
            if (line.trim() === '') return <br key={i} />
            return <p key={i} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{line}</p>
        })}
      </div>
    </article>
  );
}
