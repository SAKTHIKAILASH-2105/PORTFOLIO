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
        // HYPER-FUSION MECHATRONICS COMBINED PALETTE (Burgundy + Lavender + Copper + Champagne + Obsidian)
        fusion: {
          cyan:      '#00f0ff',
          cobalt:    '#0284c7',
          lavender:  '#c084fc',
          purple:    '#a855f7',
          violet:    '#7e22ce',
          burgundy:  '#9f1239',
          crimson:   '#be123c',
          rose:      '#e11d48',
          copper:    '#ea7e3b',
          amber:     '#f59e0b',
          gold:      '#fbbf24',
          champagne: '#fef08a',
          emerald:   '#10b981',
          carbon:    '#06070b',
          obsidian:  '#090d16',
          steel:     '#cbd5e1',
          platinum:  '#f8fafc',
        },

        // INDUSTRIAL COPPER PALETTE (Theme 1: Black + Copper + Cream)
        copper: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ea7e3b',
          600: '#d97706',
          700: '#c2410c',
          800: '#9a3412',
          900: '#78350f',
          950: '#451a03',
          glow: 'rgba(234, 126, 59, 0.55)',
        },

        // CYBER LAVENDER & VIOLET PALETTE (Theme 5: Lavender + Charcoal + Silver)
        lavender: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#581c87',
          900: '#381867',
          950: '#1e0e38',
          glow: 'rgba(168, 85, 247, 0.55)',
        },

        // ROYAL BURGUNDY PALETTE (Theme 4: Burgundy + Champagne + White)
        burgundy: {
          50:  '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#e11d48',
          600: '#be123c',
          700: '#9f1239',
          800: '#881337',
          900: '#4c0519',
          950: '#2a040d',
          glow: 'rgba(190, 18, 60, 0.55)',
        },

        // CHAMPAGNE & CREAM HIGHLIGHTS (Theme 1 & 4)
        champagne: {
          50:  '#fffdfa',
          100: '#fefce8',
          200: '#fef08a',
          300: '#fde047',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          glow: 'rgba(254, 240, 138, 0.45)',
        },

        cream: {
          50:  '#ffffff',
          100: '#f8fafc',
          200: '#fef08a',
          300: '#fed7aa',
          400: '#fdba74',
          500: '#ea7e3b',
          glow: 'rgba(254, 240, 138, 0.45)',
        },

        // DEEP OBSIDIAN & CARBON CORE
        charcoal: {
          950: '#06070b',
          900: '#0a0d15',
          850: '#0f1420',
          800: '#151c2c',
          750: '#1d263a',
          700: '#26324c',
          600: '#334155',
          500: '#475569',
          glow: 'rgba(168, 85, 247, 0.35)',
        },

        graphite: {
          950: '#06070b',
          900: '#0a0d15',
          850: '#0f1420',
          800: '#151c2c',
          750: '#1d263a',
          700: '#26324c',
        },

        titanium: {
          900: '#0a0d15',
          850: '#0f1420',
          800: '#151c2c',
          750: '#1d263a',
          700: '#26324c',
          600: '#334155',
          500: '#475569',
          400: '#94a3b8',
          300: '#cbd5e1',
        },

        metallic: {
          chrome: '#ffffff',
          silver: '#f8fafc',
          pewter: '#e2e8f0',
          steel:  '#cbd5e1',
          carbon: '#94a3b8',
        },

        dark: {
          950: '#06070b',
          900: '#0a0d15',
          850: '#0f1420',
          800: '#151c2c',
          750: '#1d263a',
          700: '#26324c',
          600: '#334155',
        },

        cyber: {
          blue: '#0284c7',
          neon: '#00f0ff',
          cyan: '#00f0ff',
          copper: '#ea7e3b',
          accent: '#38bdf8',
          purple: '#a855f7',
          lavender: '#c084fc',
          burgundy: '#9f1239',
          muted: '#94a3b8',
          glow: 'rgba(0, 240, 255, 0.5)',
          copperGlow: 'rgba(234, 126, 59, 0.6)',
        }
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', '"Liberation Serif"', 'serif'],
        mono: ['"Times New Roman"', 'Times', '"Liberation Serif"', 'serif'],
        display: ['"Times New Roman"', 'Times', '"Liberation Serif"', 'serif'],
        serif: ['"Times New Roman"', 'Times', '"Liberation Serif"', 'serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle at 1px 1px, rgba(234, 126, 59, 0.1) 1px, transparent 0)",
        'electro-circuit': "radial-gradient(circle at 1px 1px, rgba(192, 132, 252, 0.1) 1px, transparent 0)",
        'copper-trace': 'linear-gradient(90deg, transparent, #ea7e3b, #fef08a, #ea7e3b, transparent)',
        'lavender-trace': 'linear-gradient(90deg, transparent, #c084fc, #f8fafc, #a855f7, transparent)',
        'burgundy-trace': 'linear-gradient(90deg, transparent, #be123c, #fef08a, #9f1239, transparent)',
        'fusion-trace': 'linear-gradient(90deg, transparent, #ea7e3b, #be123c, #c084fc, #00f0ff, transparent)',
        'metallic-linear': 'linear-gradient(135deg, rgba(29, 38, 58, 0.9) 0%, rgba(6, 7, 11, 0.95) 100%)',
        'fusion-gradient': 'linear-gradient(135deg, rgba(234, 126, 59, 0.18) 0%, rgba(159, 18, 57, 0.18) 40%, rgba(168, 85, 247, 0.18) 75%, rgba(6, 7, 11, 0.95) 100%)',
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
        'metallic-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(254, 240, 138, 0.15)',
        'metallic-md': '0 6px 20px -2px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(254, 240, 138, 0.2)',
        'metallic-lg': '0 12px 35px -4px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(254, 240, 138, 0.25)',
        'copper-glow-sm': '0 0 12px rgba(234, 126, 59, 0.45)',
        'copper-glow-lg': '0 0 28px rgba(234, 126, 59, 0.65)',
        'lavender-glow-sm': '0 0 12px rgba(168, 85, 247, 0.45)',
        'lavender-glow-lg': '0 0 28px rgba(168, 85, 247, 0.65)',
        'burgundy-glow-sm': '0 0 12px rgba(190, 18, 60, 0.45)',
        'burgundy-glow-lg': '0 0 28px rgba(190, 18, 60, 0.65)',
        'fusion-glow': '0 0 30px rgba(234, 126, 59, 0.35), 0 0 45px rgba(168, 85, 247, 0.35)',
      },
    },
  },
  plugins: [],
}
