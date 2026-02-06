// Placeholder for markdown logic
// In a real app, this would use fs and path to read .mdx files
// and a library like gray-matter to parse frontmatter.

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
};

export const posts: Post[] = [
    {
        slug: "kubernetes-architecture",
        title: "Building Scalable Cloud Architectures with Kubernetes",
        date: "Oct 24, 2023",
        excerpt: "A deep dive into container orchestration, ELB configuration, and CI/CD pipelines on Huawei Cloud.",
        tags: ["DevOps", "Kubernetes", "Cloud"],
        content: `
# Building Scalable Cloud Architectures with Kubernetes

Kubernetes has become the de-facto standard for container orchestration. In this post, I'll share my experience building a scalable search engine infrastructure using K8s.

## The Challenge

We needed a way to manage microservices that could scale up during high traffic and scale down during quiet periods to save costs.

## The Solution

We utilized Huawei Cloud's CCE (Cloud Container Engine) to manage our clusters.

### Key Components:
- **ELB (Elastic Load Balance):** Distributes incoming traffic.
- **SWR (SoftWare Repository):** Manages our Docker images.
- **Auto-scaling Policies:** Configured based on CPU and Memory usage.

## Conclusion

By adopting a cloud-native approach, we achieved 99.9% availability and reduced deployment times by 60%.
        `
    },
    {
        slug: "react-native-optimization",
        title: "Optimizing React Native Performance",
        date: "Jan 15, 2024",
        excerpt: "Tips and tricks for achieving 60fps animations and fast startup times in Expo apps.",
        tags: ["Mobile", "React Native", "Performance"],
        content: "Content coming soon..."
    },
    {
        slug: "mastering-typescript-generics",
        title: "Mastering TypeScript Generics",
        date: "Feb 10, 2024",
        excerpt: "A comprehensive guide to understanding and using generics in TypeScript for building reusable components.",
        tags: ["TypeScript", "Web Development"],
        content: "Content coming soon..."
    },
    {
        slug: "ci-cd-pipelines-with-github-actions",
        title: "Automating Deployments with GitHub Actions",
        date: "Mar 05, 2024",
        excerpt: "Learn how to set up robust CI/CD pipelines for your Next.js applications using GitHub Actions.",
        tags: ["DevOps", "CI/CD", "GitHub"],
        content: "Content coming soon..."
    },
    {
        slug: "introduction-to-framer-motion",
        title: "Animating React with Framer Motion",
        date: "Apr 22, 2024",
        excerpt: "Bring your React applications to life with smooth and declarative animations using Framer Motion.",
        tags: ["React", "Animation", "Framer Motion"],
        content: "Content coming soon..."
    }
];

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
    return posts.find((post) => post.slug === slug);
}

export async function getAllPosts(): Promise<Post[]> {
    return posts;
}
