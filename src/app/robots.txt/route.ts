const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kemal.dev';

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Block common bot paths
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/

# Allow specific important paths
Allow: /blog/
Allow: /projects/
Allow: /about/

# Crawl delay (optional, be respectful)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
