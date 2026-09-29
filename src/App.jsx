/**
 * =============================================================================
 * ROOT APPLICATION COMPONENT (src/App.jsx)
 * =============================================================================
 * Coordinates global behaviors, including:
 * 1. Initial page loader screen with avatar animation
 * 2. Lenis smooth momentum scrolling integration
 * 3. GSAP ScrollTrigger plugin registration & page entrance animation
 * 4. Assembling top-level layout (Navbar, Page Sections, and Footer)
 * 
 * HOW TO MAKE CHANGES:
 * - Change loading time: Edit the timeout in the first useEffect (default 1050ms).
 * - Adjust scroll smoothness: Modify `duration` or `easing` in the Lenis constructor.
 * - Reorder or add sections: Reorder or insert components inside the <main> tag.
 * =============================================================================
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Register GSAP ScrollTrigger plugin globally for scroll-linked animations
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Loading state controls whether the full-screen splash loader is visible
  const [loading, setLoading] = useState(true);

  // Initial Loader Timeout: Dismiss splash screen after 1.05 seconds
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  // GSAP Entrance Animation: Fades in and slides up the main page once loading finishes
  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        '.page-shell',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      );
    }
  }, [loading]);

  // Lenis Smooth Scroll Setup: Creates momentum-based buttery scrolling experience
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration curve
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Expose lenis instance globally so Navbar can trigger programmatic smooth scrolls
    window.lenis = lenis;

    // Synchronize GSAP ScrollTrigger with Lenis scroll positions
    lenis.on('scroll', ScrollTrigger.update);

    // Bind Lenis animation frame loop to GSAP's high-precision internal ticker
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0, 0);

    // Cleanup when component unmounts to prevent memory leaks
    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-space text-white selection:bg-cyan/30 selection:text-white">
      {/* Initial Splash Screen Loader with avatar animation */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] grid place-items-center bg-space"
            exit={{ opacity: 0, filter: 'blur(12px)' }}
            transition={{ duration: 0.55 }}
          >
            <div className="loader-mark">
              <span>
                <img className="loader-avatar" src="/avater.png" alt="Mominul Islam" />
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Fixed Frosted Glass Navigation Bar */}
      <Navbar />

      {/* Main Page Container (animated via GSAP once loader completes) */}
      <div className="page-shell opacity-0">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        {/* Page Footer */}
        <Footer />
      </div>
    </div>
  );
}