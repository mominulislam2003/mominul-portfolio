/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        space: '#050816',
        ink: '#0B1120',
        cyan: '#38BDF8',
        violet: '#7C3AED',
        mint: '#2DD4BF',
        flame: '#FB7185',
      },
      boxShadow: {
        glow: '0 0 32px rgba(56, 189, 248, 0.28)',
        violet: '0 0 40px rgba(124, 58, 237, 0.32)',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        float: 'float 7s ease-in-out infinite',
        pulseLine: 'pulseLine 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(1deg)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: 0.28 },
          '50%': { opacity: 0.92 },
        },
      },
    },
  },
  plugins: [],
};
