/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'spc-dark': '#0a0a0f',
        'spc-darker': '#050508',
        'spc-accent': '#00d4ff',
        'spc-accent-dim': '#0099bb',
        'spc-green': '#00ff88',
        'spc-red': '#ff4444',
        'spc-gray': '#8892a4',
        'spc-border': '#1a1a2e',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
