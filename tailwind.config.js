/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f2f0ff',
          100: '#e6e1fe',
          200: '#cec3fd',
          300: '#ac98fb',
          400: '#8b6af5',
          500: '#7245ec',
          600: '#5f2fd1',
          700: '#4d26a8',
          800: '#3f2184',
          900: '#341d69',
          950: '#1f1140',
        },
        ink: {
          50: '#f5f7fa',
          100: '#e9edf3',
          200: '#cfd7e3',
          300: '#a7b4c7',
          400: '#7688a3',
          500: '#556681',
          600: '#43526b',
          700: '#374357',
          800: '#232b3a',
          900: '#141924',
          950: '#0a0d14',
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)',
      },
      animation: {
        blob: 'blob 16s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
