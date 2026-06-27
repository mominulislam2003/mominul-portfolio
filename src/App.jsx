import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        '.page-shell',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      );
    }
  }, [loading]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-space text-white selection:bg-cyan/30 selection:text-white">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] grid place-items-center bg-space"
            exit={{ opacity: 0, filter: 'blur(12px)' }}
            transition={{ duration: 0.55 }}
          >
            <div className="loader-mark">
              <span><img className="loader-avatar" src="/avater.png" alt="Mominul Islam" /></span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />

      <div className="page-shell opacity-0">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
