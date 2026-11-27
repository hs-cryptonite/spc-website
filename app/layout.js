import './globals.css'

export const metadata = {
  metadataBase: new URL('https://spclabs.ca'),
  title: 'SPC Labs — Systematic Quantitative Trading',
  description: 'SPC Capital Inc. — proprietary systematic momentum trading. Algorithmic strategies built on statistical process control. Calgary, Alberta.',
  keywords: 'algorithmic trading, quantitative finance, momentum, systematic trading, statistical process control, Calgary',
  authors: [{ name: 'SPC Capital Inc.' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'SPC Labs — Systematic Quantitative Trading',
    description: 'Proprietary systematic momentum trading. Calgary, Alberta.',
    url: 'https://spclabs.ca',
    siteName: 'SPC Labs',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SPC Labs — Systematic Quantitative Trading',
    description: 'Proprietary systematic momentum trading. Calgary, Alberta.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
}

// Structured data — identifies SPC Capital Inc. (SPC Labs) and its founder,
// including both spellings of his name (Hågen / Haagen) so Google and AI
// assistants connect the firm to him regardless of how the name is written.
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SPC Capital Inc.',
  alternateName: ['SPC Labs', 'SPC Capital'],
  url: 'https://spclabs.ca',
  description:
    'Calgary-based proprietary systematic momentum trading firm. Disciplined, statistically driven algorithmic strategies across equities and crypto.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  founder: {
    '@type': 'Person',
    name: 'Hågen Sagli',
    alternateName: [
      'Haagen Sagli',
      'Hagen Sagli',
      'Hågen Moe Sagli',
      'Haagen Moe Sagli',
    ],
    jobTitle: 'Founder',
    url: 'https://haagensagli.com',
    sameAs: ['https://haagensagli.com'],
  },
  knowsAbout: [
    'Quantitative Finance',
    'Systematic Trading',
    'Momentum Strategies',
    'Statistical Process Control',
    'Algorithmic Trading',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
