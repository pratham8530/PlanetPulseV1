/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        gray: {
          850: '#1f2937',
          950: '#0f172a',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
      },
    },
  },
  safelist: [
    'bg-emerald-500',
    'bg-amber-500',
    'bg-red-500',
    'from-emerald-500',
    'to-emerald-400',
    'from-amber-500',
    'to-amber-400',
    'from-red-500',
    'to-red-400',
    'border-emerald-500',
    'border-amber-500',
    'border-red-500',
    'bg-emerald-500/20',
    'bg-amber-500/20',
    'bg-red-500/20',
  ],
  plugins: [],
};