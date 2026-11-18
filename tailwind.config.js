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
        dark: {
          950: '#030712',
          900: '#060a17',
          850: '#0a1024',
          800: '#0f172a',
          750: '#15213b',
          700: '#1e293b',
          600: '#334155',
        },
        cyber: {
          blue: '#00d2ff',
          neon: '#00f5ff',
          cyan: '#06b6d4',
          accent: '#3b82f6',
          purple: '#8b5cf6',
          muted: '#64748b',
          glow: 'rgba(0, 210, 255, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'circuit-grid': "radial-gradient(circle at 1px 1px, rgba(0, 210, 255, 0.08) 1px, transparent 0)",
        'cyber-gradient': 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(139, 92, 246, 0.1) 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'circuit': 'circuitFlow 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        circuitFlow: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      boxShadow: {
        'cyber': '0 0 25px -5px rgba(0, 210, 255, 0.2)',
        'cyber-lg': '0 0 35px -5px rgba(0, 210, 255, 0.35)',
        'cyber-card': '0 8px 32px 0 rgba(0, 10, 30, 0.45)',
        'neon-cyan': '0 0 15px rgba(0, 245, 255, 0.4)',
      }
    },
  },
  plugins: [],
};
