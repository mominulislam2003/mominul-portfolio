/**
 * =============================================================================
 * TAILWIND CSS CONFIGURATION (tailwind.config.js)
 * =============================================================================
 * Defines the design system tokens, themes, colors, typography, shadows,
 * and keyframe animations used across the portfolio.
 * 
 * HOW TO MAKE CHANGES:
 * - Add/change brand colors: Edit the `colors` object below.
 *   E.g., modify `cyan` or `mint` to shift the accent palette.
 * - Change fonts: Add new font families to `fontFamily`. Remember to import
 *   the corresponding font URL in `index.html`.
 * - Add animations: Add custom animations under `animation` and their
 *   corresponding frames under `keyframes`.
 * =============================================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Files Tailwind will scan to generate utility classes:
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Custom typography families
      fontFamily: {
        // Display font used for prominent titles, headings, and branding
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        // Base sans font for readable body text, descriptions, and labels
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Futuristic / Cyberpunk inspired theme color tokens
      colors: {
        space: '#050816',   // Deep dark background base
        ink: '#0B1120',     // Dark navy card / secondary backdrop
        cyan: '#38BDF8',    // Primary neon cyan highlight
        violet: '#7C3AED',  // Secondary purple / violet accent
        mint: '#2DD4BF',    // Vibrant mint green (success / live badges)
        flame: '#FB7185',   // Warm rose/coral accent
      },
      // Custom ambient glow box shadows for neon elements
      boxShadow: {
        glow: '0 0 32px rgba(56, 189, 248, 0.28)',
        violet: '0 0 40px rgba(124, 58, 237, 0.32)',
      },
      // Reusable utility animations (e.g. animate-marquee, animate-float)
      animation: {
        marquee: 'marquee 22s linear infinite',
        float: 'float 7s ease-in-out infinite',
        pulseLine: 'pulseLine 4s ease-in-out infinite',
      },
      // Animation keyframes defining the transform and opacity sequences
      keyframes: {
        // Continuous horizontal scrolling banner
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Gentle floating effect for decorative badges and cards
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(1deg)' },
        },
        // Subtle pulsing opacity line
        pulseLine: {
          '0%, 100%': { opacity: 0.28 },
          '50%': { opacity: 0.92 },
        },
      },
    },
  },
  plugins: [],
};

