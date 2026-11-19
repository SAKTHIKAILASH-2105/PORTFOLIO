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
        // ROYAL BURGUNDY PALETTE (Deep, Rich, Luxurious Wine & Maroon)
        burgundy: {
          950: '#120205',
          900: '#1c0409',
          850: '#26070d',
          800: '#330a13',
          750: '#420e1a',
          700: '#531322',
          600: '#6e1b30',
          500: '#8b233e',
          400: '#aa2e4d',
          300: '#c74263',
          glow: 'rgba(139, 35, 62, 0.4)',
        },

        // CHAMPAGNE GOLD PALETTE (Elegant Warm Gold, Cream & Metallic Lustre)
        champagne: {
          50:  '#fffdfa',
          100: '#fdf8f2',
          200: '#f8ebd9',
          300: '#f1dcbe',
          400: '#e8c79d',
          500: '#d8b07d',
          600: '#c1945f',
          700: '#a27746',
          800: '#7e5b33',
          900: '#543b1e',
          glow: 'rgba(216, 176, 125, 0.38)',
        },

        // Map graphite to deep royal burgundy obsidian base
        graphite: {
          950: '#120205',
          900: '#1c0409',
          850: '#26070d',
          800: '#330a13',
          750: '#420e1a',
          700: '#531322',
        },

        // Map titanium to rich wine & metallic champagne slate tones
        titanium: {
          900: '#23060d',
          850: '#2e0a13',
          800: '#3b0f1a',
          750: '#4c1523',
          700: '#5e1b2c',
          600: '#76273a',
          500: '#94384e',
          400: '#b45269',
          300: '#d48096',
        },

        // Map copper directly to Champagne Gold (Hardware, PCB traces & Accents)
        copper: {
          200: '#f8ebd9',
          300: '#f1dcbe',
          400: '#e8c79d',
          500: '#d8b07d',
          600: '#c1945f',
          700: '#a27746',
          glow: 'rgba(216, 176, 125, 0.4)',
        },

        // Metallic White, Pearl & Warm Silver Typography
        metallic: {
          chrome: '#ffffff',
          silver: '#fdf8f2',
          pewter: '#ebdccb',
          steel: '#d1b9a5',
          carbon: '#8e715e',
        },

        // Dark compatibility mapping
        dark: {
          950: '#120205',
          900: '#1c0409',
          850: '#26070d',
          800: '#330a13',
          750: '#420e1a',
          700: '#531322',
          600: '#6e1b30',
        },

        // Cyber & Electric Highlights in Champagne Gold & Radiant White
        cyber: {
          blue: '#f8ebd9',
          neon: '#ffffff',
          cyan: '#f1dcbe',
          copper: '#d8b07d',
          accent: '#e8c79d',
          purple: '#c74263',
          muted: '#a88975',
          glow: 'rgba(216, 176, 125, 0.35)',
          copperGlow: 'rgba(216, 176, 125, 0.45)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle at 1px 1px, rgba(216, 176, 125, 0.08) 1px, transparent 0)",
        'electro-circuit': "radial-gradient(circle at 1px 1px, rgba(248, 235, 217, 0.09) 1px, transparent 0)",
        'copper-trace': 'linear-gradient(90deg, transparent, #d8b07d, transparent)',
        'metallic-linear': 'linear-gradient(135deg, rgba(66, 14, 26, 0.9) 0%, rgba(28, 4, 9, 0.95) 100%)',
        'fusion-gradient': 'linear-gradient(135deg, rgba(216, 176, 125, 0.15) 0%, rgba(38, 7, 13, 0.85) 50%, rgba(139, 35, 62, 0.12) 100%)',
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
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      boxShadow: {
        'copper': '0 0 25px -5px rgba(216, 176, 125, 0.3)',
        'copper-lg': '0 0 35px -5px rgba(216, 176, 125, 0.45)',
        'metallic': '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
        'fusion': '0 0 25px -5px rgba(216, 176, 125, 0.25), 0 0 15px -3px rgba(139, 35, 62, 0.3)',
        'cyber': '0 0 25px -5px rgba(248, 235, 217, 0.25)',
        'cyber-lg': '0 0 35px -5px rgba(248, 235, 217, 0.4)',
        'cyber-card': '0 10px 32px 0 rgba(18, 2, 5, 0.75)',
        'neon-cyan': '0 0 15px rgba(216, 176, 125, 0.45)',
        'royal-burgundy': '0 0 30px rgba(139, 35, 62, 0.35)',
        'champagne-glow': '0 0 20px rgba(216, 176, 125, 0.4)',
      }
    },
  },
  plugins: [],
};
