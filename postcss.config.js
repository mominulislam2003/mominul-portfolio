/**
 * =============================================================================
 * POSTCSS CONFIGURATION (postcss.config.js)
 * =============================================================================
 * PostCSS processes your CSS during development and build time.
 * 
 * - tailwindcss: Scans template files and compiles the utility classes used.
 * - autoprefixer: Automatically appends vendor prefixes (-webkit-, -moz-, etc.)
 *   to CSS rules to ensure broad browser compatibility.
 * =============================================================================
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

