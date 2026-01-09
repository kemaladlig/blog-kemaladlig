import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
};

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
    try {
        const realSlug = slug.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

        if (!fs.existsSync(fullPath)) {
            return undefined;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            tags: data.tags,
            content: content,
        } as Post;
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return undefined;
    }
}

export async function getAllPosts(): Promise<Post[]> {
    if (!fs.existsSync(postsDirectory)) {
        console.warn(`Posts directory not found at ${postsDirectory}`);
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                tags: data.tags,
                content: content,
            } as Post;
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
