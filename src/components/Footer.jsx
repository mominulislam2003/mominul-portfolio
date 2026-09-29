/**
 * =============================================================================
 * FOOTER COMPONENT (src/components/Footer.jsx)
 * =============================================================================
 * Displays bottom branding, copyright notice, and smooth scroll-to-top button.
 * 
 * HOW TO MAKE CHANGES:
 * - Update copyright year or text in the paragraph below.
 * - Change tagline: Edit the description text under the developer name.
 * =============================================================================
 */

import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  // Smoothly scrolls viewport back to the top hero section
  function top() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand identity & tagline */}
        <div>
          <p className="font-display text-lg font-bold text-white">Mominul Islam</p>
          <p className="mt-1 text-sm text-slate-400">
            Modern web experiences with performance, clarity, and motion.
          </p>
        </div>

        {/* Copyright note & return to top button */}
        <div className="flex items-center gap-4">
          <p className="text-sm text-slate-500">Copyright 2026. All rights reserved.</p>
          <button onClick={top} className="back-top" aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

