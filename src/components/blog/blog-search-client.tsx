"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import BlogCard from "@/components/ui/blog-card";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime?: number;
  featured?: boolean;
}

export default function BlogSearchClient({ posts }: { posts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerSearchTerm) ||
          post.excerpt.toLowerCase().includes(lowerSearchTerm) ||
          post.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm))
      );
    }

    // Filter by selected tag
    if (selectedTag) {
      filtered = filtered.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    return filtered;
  }, [posts, searchTerm, selectedTag]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTag(null);
  };

  const hasActiveFilters = searchTerm || selectedTag;

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Tag Filter */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={selectedTag || ""}
            onChange={(e) => setSelectedTag(e.target.value || null)}
            className="px-3 py-2 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Tags</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
          >
            <X className="h-4 w-4" />
            Clear
          </button>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {hasActiveFilters
            ? `Found ${filteredPosts.length} post${filteredPosts.length !== 1 ? "s" : ""}`
            : `Showing all ${filteredPosts.length} post${filteredPosts.length !== 1 ? "s" : ""}`}
        </p>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex gap-2">
            {searchTerm && (
              <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full">
                Search: &quot;{searchTerm}&quot;
              </span>
            )}
            {selectedTag && (
              <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full">
                Tag: {selectedTag}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found matching your criteria.
          </p>
          <button
            onClick={clearFilters}
            className="text-accent hover:underline"
          >
            Clear filters and try again
          </button>
        </div>
      )}
    </div>
  );
}
