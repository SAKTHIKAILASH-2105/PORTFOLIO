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
        // Graphite & Titanium Base
        graphite: {
          950: '#06080d',
          900: '#0a0d14',
          850: '#0f141f',
          800: '#151b28',
          750: '#1d2434',
          700: '#273043',
        },
        titanium: {
          900: '#181d26',
          800: '#232a37',
          700: '#323b4c',
          600: '#465267',
          500: '#5f6e87',
          400: '#7f90ac',
          300: '#a3b2cd',
        },
        // Copper Accent System (Mechatronics Hardware & PCB Traces)
        copper: {
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ea7e3b',
          600: '#d06020',
          700: '#a64410',
          glow: 'rgba(234, 126, 59, 0.35)',
        },
        // Metallic Silver & Chrome
        metallic: {
          chrome: '#f8fafc',
          silver: '#e2e8f0',
          pewter: '#cbd5e1',
          steel: '#94a3b8',
          carbon: '#475569',
        },
        // Backward-compatible dark palette mapped to graphite/titanium
        dark: {
          950: '#06080d',
          900: '#0a0e16',
          850: '#101521',
          800: '#171e2c',
          750: '#1f2738',
          700: '#2a3449',
          600: '#3c4862',
        },
        // Cyber & Electric Highlights
        cyber: {
          blue: '#00d2ff',
          neon: '#00f5ff',
          cyan: '#06b6d4',
          copper: '#ea7e3b',
          accent: '#3b82f6',
          purple: '#8b5cf6',
          muted: '#64748b',
          glow: 'rgba(0, 210, 255, 0.25)',
          copperGlow: 'rgba(234, 126, 59, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.08) 1px, transparent 0)",
        'electro-circuit': "radial-gradient(circle at 1px 1px, rgba(0, 245, 255, 0.09) 1px, transparent 0)",
        'copper-trace': 'linear-gradient(90deg, transparent, #ea7e3b, transparent)',
        'metallic-linear': 'linear-gradient(135deg, rgba(35, 42, 55, 0.9) 0%, rgba(15, 20, 30, 0.95) 100%)',
        'fusion-gradient': 'linear-gradient(135deg, rgba(234, 126, 59, 0.12) 0%, rgba(15, 20, 31, 0.8) 50%, rgba(0, 245, 255, 0.08) 100%)',
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
        'copper': '0 0 25px -5px rgba(234, 126, 59, 0.25)',
        'copper-lg': '0 0 35px -5px rgba(234, 126, 59, 0.4)',
        'metallic': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
        'fusion': '0 0 25px -5px rgba(0, 245, 255, 0.2), 0 0 15px -3px rgba(234, 126, 59, 0.15)',
        'cyber': '0 0 25px -5px rgba(0, 210, 255, 0.2)',
        'cyber-lg': '0 0 35px -5px rgba(0, 210, 255, 0.35)',
        'cyber-card': '0 10px 32px 0 rgba(6, 8, 14, 0.65)',
        'neon-cyan': '0 0 15px rgba(0, 245, 255, 0.4)',
      }
    },
  },
  plugins: [],
};
