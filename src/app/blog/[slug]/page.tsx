import { getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { MDXRemote } from 'next-mdx-remote/rsc';
import SocialShare from "@/components/blog/social-share";

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

      <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
        <MDXRemote source={post.content} />
      </div>

      <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        {post.readingTime && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        )}
        
        <SocialShare 
          title={post.title}
          excerpt={post.excerpt}
          url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://kemal.dev'}/blog/${post.slug}`}
        />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-bold mb-6">Related Posts</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {getRelatedPosts(post.slug).map(relatedPost => (
            <Link
              key={relatedPost.slug}
              href={`/blog/${relatedPost.slug}`}
              className="block p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <h4 className="font-semibold mb-2 hover:text-accent transition-colors">
                {relatedPost.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {relatedPost.excerpt}
              </p>
              <time className="text-xs text-gray-400 font-mono mt-2 block">
                {relatedPost.date}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
