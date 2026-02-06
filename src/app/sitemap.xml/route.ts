import { getAllPosts } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kemal.dev';

export async function GET() {
  const posts = getAllPosts();
  
  const staticPages = [
    { url: '/', lastModified: new Date() },
    { url: '/blog', lastModified: new Date() },
    { url: '/projects', lastModified: new Date() },
    { url: '/about', lastModified: new Date() },
  ];

  const blogPages = posts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.url === '/' ? '1.0' : page.url.startsWith('/blog') ? '0.8' : '0.6'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
