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
        // INDUSTRIAL COPPER PALETTE (Rich Molten Copper, Burnished Bronze & Amber)
        copper: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ea7e3b',
          600: '#d97736',
          700: '#c26526',
          800: '#9a4b17',
          900: '#7c3a10',
          950: '#431d05',
          glow: 'rgba(234, 126, 59, 0.45)',
        },

        // CREAM & WARM IVORY PALETTE (Elegant Cream, Champagne Ivory & Soft Gold)
        cream: {
          50:  '#fffdfa',
          100: '#fff7ed',
          200: '#ffedd5',
          300: '#fed7aa',
          400: '#fde047',
          500: '#facc15',
          glow: 'rgba(254, 215, 170, 0.35)',
        },

        // PITCH BLACK & CHARCOAL PALETTE (Deep Obsidian, Matte Graphite & Dark Steel)
        charcoal: {
          950: '#08080a',
          900: '#0d0d11',
          850: '#141419',
          800: '#1a1a22',
          750: '#22222c',
          700: '#2a2a36',
          600: '#383848',
          500: '#4c4c5e',
          glow: 'rgba(42, 42, 54, 0.5)',
        },

        // Compatibility Aliases: Map graphite directly to Pitch Black & Charcoal
        graphite: {
          950: '#08080a',
          900: '#0d0d11',
          850: '#141419',
          800: '#1a1a22',
          750: '#22222c',
          700: '#2a2a36',
        },

        // Compatibility Aliases: Map titanium to Industrial Dark Steel & Graphite
        titanium: {
          900: '#0d0d11',
          850: '#141419',
          800: '#1a1a22',
          750: '#22222c',
          700: '#2a2a36',
          600: '#383848',
          500: '#4c4c5e',
          400: '#94a3b8',
          300: '#cbd5e1',
        },

        // Compatibility Aliases: Map lavender to warm cream & copper highlights
        lavender: {
          50:  '#fffdfa',
          100: '#fff7ed',
          200: '#ffedd5',
          300: '#fed7aa',
          400: '#fb923c',
          500: '#ea7e3b',
          600: '#d97736',
          700: '#c26526',
          800: '#9a4b17',
          900: '#7c3a10',
          950: '#431d05',
          glow: 'rgba(234, 126, 59, 0.45)',
        },

        // Compatibility Aliases: Map burgundy to Deep Copper/Charcoal Depth
        burgundy: {
          950: '#08080a',
          900: '#0d0d11',
          850: '#141419',
          800: '#1a1a22',
          750: '#22222c',
          700: '#431d05',
          600: '#7c3a10',
          500: '#9a4b17',
          400: '#c26526',
          300: '#ea7e3b',
          glow: 'rgba(234, 126, 59, 0.4)',
        },

        // Compatibility Aliases: Map champagne to Cream
        champagne: {
          50:  '#fffdfa',
          100: '#fff7ed',
          200: '#ffedd5',
          300: '#fed7aa',
          400: '#fde047',
          500: '#ea7e3b',
          600: '#d97736',
          700: '#c26526',
          800: '#9a4b17',
          900: '#431d05',
          glow: 'rgba(254, 215, 170, 0.35)',
        },

        // Metallic Typography & Accents in Cream & Chrome White
        metallic: {
          chrome: '#ffffff',
          silver: '#fff7ed',
          pewter: '#ffedd5',
          steel:  '#fed7aa',
          carbon: '#94a3b8',
        },

        // Dark compatibility mapping
        dark: {
          950: '#08080a',
          900: '#0d0d11',
          850: '#141419',
          800: '#1a1a22',
          750: '#22222c',
          700: '#2a2a36',
          600: '#383848',
        },

        // Cyber & Electric Highlights in Molten Copper & Warm Cream
        cyber: {
          blue: '#ffedd5',
          neon: '#ffffff',
          cyan: '#fed7aa',
          copper: '#ea7e3b',
          accent: '#fff7ed',
          purple: '#d97736',
          muted: '#94a3b8',
          glow: 'rgba(234, 126, 59, 0.45)',
          copperGlow: 'rgba(234, 126, 59, 0.55)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle at 1px 1px, rgba(234, 126, 59, 0.1) 1px, transparent 0)",
        'electro-circuit': "radial-gradient(circle at 1px 1px, rgba(254, 215, 170, 0.1) 1px, transparent 0)",
        'copper-trace': 'linear-gradient(90deg, transparent, #ea7e3b, #fff7ed, #ea7e3b, transparent)',
        'metallic-linear': 'linear-gradient(135deg, rgba(34, 34, 44, 0.9) 0%, rgba(8, 8, 10, 0.95) 100%)',
        'fusion-gradient': 'linear-gradient(135deg, rgba(234, 126, 59, 0.18) 0%, rgba(20, 20, 25, 0.85) 50%, rgba(254, 215, 170, 0.12) 100%)',
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
        'metallic-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(254, 215, 170, 0.15)',
        'metallic-md': '0 6px 20px -2px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(254, 215, 170, 0.2)',
        'metallic-lg': '0 12px 35px -4px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(254, 215, 170, 0.25)',
        'copper-glow-sm': '0 0 12px rgba(234, 126, 59, 0.35)',
        'copper-glow-lg': '0 0 28px rgba(234, 126, 59, 0.55)',
        'cyan-glow-sm': '0 0 12px rgba(254, 215, 170, 0.4)',
        'cyan-glow-lg': '0 0 28px rgba(254, 215, 170, 0.6)',
      },
    },
  },
  plugins: [],
}
