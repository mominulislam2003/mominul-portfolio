/**
 * =============================================================================
 * VITE CONFIGURATION (vite.config.js)
 * =============================================================================
 * Vite is the modern build tool and development server powering this application.
 * 
 * - @vitejs/plugin-react: Provides Fast Refresh (HMR) for React components,
 *   Babel/SWC JSX transformation, and React-specific optimizations.
 * 
 * HOW TO MAKE CHANGES:
 * - Change dev port: Add `server: { port: 3000 }` inside defineConfig.
 * - Base path: If deploying to a subdirectory on GitHub Pages (e.g. yourname.github.io/portfolio),
 *   add `base: '/portfolio/'`.
 * =============================================================================
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

