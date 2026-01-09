import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/ui/blog-card";

export const metadata = {
  title: "Blog | Kemal Adlığ",
  description: "Thoughts on Mobile Development, DevOps, and Cloud Architecture.",
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

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            {...post}
          />
        ))}
      </div>
    </div>
  );
}
