const SITE_URL = 'https://spclabs.ca'

// Next.js App Router metadata route — generates /sitemap.xml at build time.
// Works with `output: 'export'` (static). Single-page site today; add entries
// here if new routes are introduced so the sitemap never drifts from reality.
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
