import './globals.css'

export const metadata = {
  title: 'SPC Labs — Statistical Process Control',
  description: 'Systematic momentum trading. Algorithmic strategies for capacity-constrained markets.',
  keywords: 'algorithmic trading, quantitative finance, momentum, systematic trading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
