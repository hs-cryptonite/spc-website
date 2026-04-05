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
          <div className="flex items-center gap-2">
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
        </div>
      </section>

      {/* ── Quote Section ───────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-spc-border to-transparent mb-16"></div>
          <blockquote className="font-mono text-xl md:text-2xl text-spc-gray italic leading-relaxed">
            &ldquo;The integrity of the structure determines the quality of the output.&rdquo;
          </blockquote>
          <div className="h-px bg-gradient-to-r from-transparent via-spc-border to-transparent mt-16"></div>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
