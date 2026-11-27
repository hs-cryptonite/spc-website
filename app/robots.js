const SITE_URL = 'https://spclabs.ca'

// Next.js App Router metadata route — generates /robots.txt at build time.
// Works with `output: 'export'` (static). Points crawlers at the generated sitemap.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
