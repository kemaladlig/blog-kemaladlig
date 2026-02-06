import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/ui/blog-card";
import BlogSearchClient from "@/components/blog/blog-search-client";

export const metadata = {
  title: "Blog | Kemal Adlığ",
  description: "Technical insights on React Native development, TypeScript applications, cloud infrastructure, and building scalable mobile applications with real-time features.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Thoughts on Mobile Development, DevOps, and Cloud Architecture.
        </p>
      </div>

      {/* Search and Filter Component */}
      <BlogSearchClient posts={posts} />

      {/* Featured Posts Section */}
      {posts.filter(post => post.featured).length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Featured Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {posts
              .filter(post => post.featured)
              .map((post) => (
                <BlogCard
                  key={post.slug}
                  {...post}
                  className="border-accent/20 bg-accent/5"
                />
              ))}
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">All Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              {...post}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
