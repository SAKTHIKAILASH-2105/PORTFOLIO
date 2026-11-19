/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CYBER LAVENDER PALETTE (Glowing Lilac, Electric Violet & Neon Lavender)
        lavender: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
          glow: 'rgba(192, 132, 252, 0.45)',
        },

        // CHARCOAL PALETTE (Deep Obsidian, Matte Graphite & Midnight Slate)
        charcoal: {
          950: '#0b090e',
          900: '#120e18',
          850: '#1a1424',
          800: '#221a30',
          750: '#2b203d',
          700: '#35274c',
          600: '#453363',
          500: '#58417e',
          glow: 'rgba(53, 39, 76, 0.5)',
        },

        // METALLIC SILVER & CHROME PALETTE (Robotic Hardware & Polished Plates)
        silver: {
          50:  '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
          glow: 'rgba(226, 232, 240, 0.4)',
        },

        // Compatibility Aliases: Map graphite directly to Charcoal
        graphite: {
          950: '#0b090e',
          900: '#120e18',
          850: '#1a1424',
          800: '#221a30',
          750: '#2b203d',
          700: '#35274c',
        },

        // Compatibility Aliases: Map titanium to Charcoal-Slate & Polished Silver
        titanium: {
          900: '#120e18',
          850: '#1a1424',
          800: '#221a30',
          750: '#2b203d',
          700: '#35274c',
          600: '#453363',
          500: '#58417e',
          400: '#94a3b8',
          300: '#cbd5e1',
        },

        // Compatibility Aliases: Map copper directly to Cyber Lavender
        copper: {
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          glow: 'rgba(192, 132, 252, 0.45)',
        },

        // Compatibility Aliases: Map burgundy to Deep Charcoal & Electric Violet
        burgundy: {
          950: '#0b090e',
          900: '#120e18',
          850: '#1a1424',
          800: '#221a30',
          750: '#2b203d',
          700: '#35274c',
          600: '#453363',
          500: '#58417e',
          400: '#7e22ce',
          300: '#a855f7',
          glow: 'rgba(168, 85, 247, 0.4)',
        },

        // Compatibility Aliases: Map champagne to Silver & Lavender Tints
        champagne: {
          50:  '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#d8b4fe',
          500: '#c084fc',
          600: '#a855f7',
          700: '#9333ea',
          800: '#6b21a8',
          900: '#3b0764',
          glow: 'rgba(192, 132, 252, 0.4)',
        },

        // Metallic Typography & Accents
        metallic: {
          chrome: '#ffffff',
          silver: '#f8fafc',
          pewter: '#e2e8f0',
          steel:  '#cbd5e1',
          carbon: '#94a3b8',
        },

        // Dark compatibility mapping
        dark: {
          950: '#0b090e',
          900: '#120e18',
          850: '#1a1424',
          800: '#221a30',
          750: '#2b203d',
          700: '#35274c',
          600: '#453363',
        },

        // Cyber & Electric Highlights in Neon Lavender & Chrome Silver
        cyber: {
          blue: '#e9d5ff',
          neon: '#ffffff',
          cyan: '#d8b4fe',
          copper: '#c084fc',
          accent: '#f8fafc',
          purple: '#a855f7',
          muted: '#94a3b8',
          glow: 'rgba(192, 132, 252, 0.45)',
          copperGlow: 'rgba(168, 85, 247, 0.45)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle at 1px 1px, rgba(192, 132, 252, 0.1) 1px, transparent 0)",
        'electro-circuit': "radial-gradient(circle at 1px 1px, rgba(226, 232, 240, 0.1) 1px, transparent 0)",
        'copper-trace': 'linear-gradient(90deg, transparent, #c084fc, #ffffff, #c084fc, transparent)',
        'metallic-linear': 'linear-gradient(135deg, rgba(34, 26, 48, 0.9) 0%, rgba(11, 9, 14, 0.95) 100%)',
        'fusion-gradient': 'linear-gradient(135deg, rgba(192, 132, 252, 0.18) 0%, rgba(26, 20, 36, 0.85) 50%, rgba(148, 163, 184, 0.12) 100%)',
      },
      animation: {
        'gear-slow': 'gearRotate 55s linear infinite',
        'gear-reverse': 'gearRotateRev 40s linear infinite',
        'gear-medium': 'gearRotate 28s linear infinite',
        'copper-glow': 'copperPulse 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        gearRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gearRotateRev: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        copperPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'metallic-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(226, 232, 240, 0.15)',
        'metallic-md': '0 6px 20px -2px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(226, 232, 240, 0.2)',
        'metallic-lg': '0 12px 35px -4px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(226, 232, 240, 0.25)',
        'copper-glow-sm': '0 0 12px rgba(192, 132, 252, 0.35)',
        'copper-glow-lg': '0 0 28px rgba(192, 132, 252, 0.55)',
        'cyan-glow-sm': '0 0 12px rgba(226, 232, 240, 0.4)',
        'cyan-glow-lg': '0 0 28px rgba(226, 232, 240, 0.6)',
      },
    },
  },
  plugins: [],
}
