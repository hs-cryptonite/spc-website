'use client'

import { useState, useEffect } from 'react'

// ── SVG Logo Component ───────────────────────────────────────────────────────
function SPCLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring — process boundary */}
      <circle cx="50" cy="50" r="46" stroke="#00d4ff" strokeWidth="1.5" opacity="0.4" />
      <circle cx="50" cy="50" r="42" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />

      {/* Control limits — upper and lower dashed lines */}
      <line x1="15" y1="28" x2="85" y2="28" stroke="#00ff88" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
      <line x1="15" y1="72" x2="85" y2="72" stroke="#ff4444" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />

      {/* Center line — target/mean */}
      <line x1="15" y1="50" x2="85" y2="50" stroke="#8892a4" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

      {/* Signal line — 5 nodes: grey, green, red, green, grey (symmetric) */}
      <polyline
        points="22,50 36,28 50,72 64,28 78,50"
        stroke="#00d4ff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data points — 5 nodes */}
      <circle cx="22" cy="50" r="2.5" fill="#8892a4" />            {/* 1: grey line */}
      <circle cx="36" cy="28" r="2.5" fill="#00ff88" />            {/* 2: green line */}
      <circle cx="50" cy="72" r="2.5" fill="#ff4444" />            {/* 3: red line */}
      <circle cx="64" cy="28" r="2.5" fill="#00ff88" />            {/* 4: green line */}
      <circle cx="78" cy="50" r="2.5" fill="#8892a4">              {/* 5: grey line */}
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Corner brackets — framing the system */}
      <path d="M 8 20 L 8 8 L 20 8" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 92 20 L 92 8 L 80 8" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 8 80 L 8 92 L 20 92" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 92 80 L 92 92 L 80 92" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  )
}

// ── Principle Card ───────────────────────────────────────────────────────────
function Principle({ index, title, body }) {
  return (
    <div className="border border-spc-border rounded-lg p-6 bg-spc-dark/40 backdrop-blur-sm hover:border-spc-accent/40 transition-colors duration-300">
      <div className="font-mono text-spc-accent/60 text-xs mb-3">{index}</div>
      <h3 className="font-mono text-white text-lg mb-3">{title}</h3>
      <p className="text-spc-gray text-sm leading-relaxed">{body}</p>
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen grid-bg scanlines">

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-spc-darker/80 backdrop-blur-md border-b border-spc-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SPCLogo size={32} />
            <span className="font-mono font-bold text-lg tracking-wider">SPC<span className="text-spc-accent">_</span>LABS</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#approach" className="font-mono text-xs text-spc-gray hover:text-spc-accent transition-colors">APPROACH</a>
            <a href="#focus" className="font-mono text-xs text-spc-gray hover:text-spc-accent transition-colors">FOCUS</a>
            <a href="#contact" className="font-mono text-xs text-spc-gray hover:text-spc-accent transition-colors">CONTACT</a>
          </div>
          <div className="flex items-center gap-2 sm:hidden">
            <div className="w-2 h-2 rounded-full bg-spc-green pulse-dot"></div>
            <span className="font-mono text-xs text-spc-gray">ACTIVE</span>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo */}
          <div className="mb-8 fade-in-up">
            <SPCLogo size={80} />
          </div>

          {/* Company Name */}
          <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight mb-4 fade-in-up fade-in-up-delay-1">
            <span className="text-white">SPC</span>
            <span className="text-spc-accent"> Capital</span>
          </h1>

          {/* Tagline */}
          <p className="font-mono text-spc-gray text-lg md:text-xl mb-2 fade-in-up fade-in-up-delay-2">
            Systematic. Quantitative. Disciplined.
          </p>

          {/* Line separator */}
          <div className="flex justify-center my-8">
            <div className="h-px bg-gradient-to-r from-transparent via-spc-accent to-transparent line-expand max-w-md"></div>
          </div>

          {/* Description */}
          <p className="text-spc-gray text-base md:text-lg max-w-xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-3">
            Proprietary algorithmic trading.
            <br />
            <span className="text-spc-accent/70">Calgary, Alberta.</span>
          </p>

          {/* Scroll cue */}
          <div className="mt-16 fade-in-up fade-in-up-delay-4">
            <a href="#approach" className="inline-flex flex-col items-center gap-2 text-spc-gray/50 hover:text-spc-accent transition-colors group">
              <span className="font-mono text-xs tracking-widest">SCROLL</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-bounce">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Approach Section ────────────────────────────────────────── */}
      <section id="approach" className="py-28 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-spc-accent/60 text-sm tracking-widest mb-3">// APPROACH</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">Process over prediction</h2>
            <p className="text-spc-gray text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              We treat markets as noisy processes to be measured, not fortunes to be told.
              Every decision is defined in advance, validated out-of-sample, and executed
              without discretion.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Principle
              index="01"
              title="Systematic"
              body="Rules are written, backtested, and locked. The system decides — not emotion, not narrative, not the trade that feels right today."
            />
            <Principle
              index="02"
              title="Evidence-based"
              body="Strategies survive walk-forward validation, permutation testing, and combinatorial cross-validation before a single dollar is risked."
            />
            <Principle
              index="03"
              title="Risk-first"
              body="Position sizing, drawdown breakers, and regime filters come before returns. Capital preservation is the first rule of compounding."
            />
          </div>
        </div>
      </section>

      {/* ── Quote Section ───────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-spc-border to-transparent mb-16"></div>
          <blockquote className="font-mono text-xl md:text-2xl text-spc-gray italic leading-relaxed">
            &ldquo;The integrity of the structure determines the quality of the output.&rdquo;
          </blockquote>
          <div className="h-px bg-gradient-to-r from-transparent via-spc-border to-transparent mt-16"></div>
        </div>
      </section>

      {/* ── Focus Section ───────────────────────────────────────────── */}
      <section id="focus" className="py-28 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-spc-accent/60 text-sm tracking-widest mb-3">// FOCUS</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">Where we operate</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-spc-border rounded-lg p-8 bg-spc-dark/40 backdrop-blur-sm">
              <h3 className="font-mono text-white text-xl mb-3">Equities</h3>
              <p className="text-spc-gray text-sm leading-relaxed">
                Cross-sectional momentum across a broad universe of liquid North American
                equities, with regime awareness that steps aside when the signal breaks down.
              </p>
            </div>
            <div className="border border-spc-border rounded-lg p-8 bg-spc-dark/40 backdrop-blur-sm">
              <h3 className="font-mono text-white text-xl mb-3">Digital Assets</h3>
              <p className="text-spc-gray text-sm leading-relaxed">
                Systematic strategies in crypto markets, trading only when regime conditions
                favour the edge and sitting in cash when they do not.
              </p>
            </div>
          </div>

          <p className="text-spc-gray/60 text-xs text-center mt-10 max-w-2xl mx-auto leading-relaxed font-mono">
            Strategy details, methodology, and performance are proprietary and confidential.
          </p>
        </div>
      </section>

      {/* ── Contact Section ─────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-spc-accent/60 text-sm tracking-widest mb-3">// CONTACT</div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-6">Get in touch</h2>
          <p className="text-spc-gray text-base max-w-xl mx-auto leading-relaxed mb-4">
            SPC Capital is a private firm trading its own capital. For inquiries, reach us below.
          </p>
          <p className="text-spc-gray/70 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Founded by Hågen Sagli, a Calgary-based finance professional and
            McGill Master of Finance graduate.
          </p>
          <a
            href="mailto:contact@spclabs.ca"
            className="inline-block font-mono text-spc-accent border border-spc-accent/40 rounded-lg px-8 py-3 hover:bg-spc-accent/10 hover:border-spc-accent transition-all duration-300"
          >
            contact@spclabs.ca
          </a>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="py-16 px-6 border-t border-spc-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <SPCLogo size={24} />
              <span className="font-mono text-sm text-spc-gray">SPC Capital Inc.</span>
            </div>
            <div className="font-mono text-xs text-spc-gray/50 text-center md:text-right">
              <div>Federal Corporation (CBCA) &middot; Calgary, Alberta, Canada</div>
              <div className="mt-1">&copy; {new Date().getFullYear()} SPC Capital Inc. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
