/**
 * Single source of truth for the deployed origin.
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project; the fallback keeps
 * canonical URLs, sitemap and RSS pointing at a live host.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kemaladlig.vercel.app";
