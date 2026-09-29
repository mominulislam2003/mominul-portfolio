/**
 * =============================================================================
 * NAVBAR COMPONENT (src/components/Navbar.jsx)
 * =============================================================================
 * Fixed floating frosted-glass navigation bar with dynamic scroll spying,
 * Lenis smooth scrolling integration, and iOS Control-Center style mobile drawer.
 * 
 * FEATURES:
 * - Desktop menu: Floating pill design with frosted glass backdrop blur.
 * - Scroll Spy: Uses browser `IntersectionObserver` to highlight the current section.
 * - Lenis Integration: Smooth scrolls to section targets when navigation links are clicked.
 * - Mobile Menu: Control-Center modal sheet with tap animations and icons.
 * 
 * HOW TO MAKE CHANGES:
 * - Update menu items: Edit `navItems` in `src/data.js`.
 * - Change scroll offset or speed: Adjust `offset` or `duration` in `handleScrollTo`.
 * =============================================================================
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiLayers, FiBriefcase, FiMail } from 'react-icons/fi';
import { navItems } from '../data.js';

// Icon map for mobile drawer menu items
const navIcons = {
  Home: FiHome,
  About: FiUser,
  Skills: FiCode,
  Projects: FiLayers,
  Services: FiBriefcase,
  Contact: FiMail,
};

export default function Navbar() {
  // Mobile drawer open/closed toggle state
  const [open, setOpen] = useState(false);
  // Current active navigation section name for highlighting
  const [active, setActive] = useState('Home');

  // Scroll Spy: Observes all sections and sets the active navigation link based on viewport intersection
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Capitalize first letter to match nav item name (e.g. 'about' -> 'About')
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      // Root margin creates a focused active trigger zone in the center of the viewport
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Smooth Scroll Handler: Uses Lenis if available, falls back to native scrollIntoView
  const handleScrollTo = (e, item) => {
    e.preventDefault();
    setOpen(false); // Close mobile drawer if open

    const targetId = `#${item.toLowerCase()}`;
    const element = document.querySelector(targetId);

    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80, // Offset for top fixed navbar height
          duration: 1.5,
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Floating Header Container */}
      <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/[0.08] px-3.5 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(0,0,0,0.2)] backdrop-blur-[30px] sm:px-5 sm:py-3">
          {/* Brand Logo / Avatar link */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, 'Home')}
            className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer"
            aria-label="Go to home"
          >
            <span className="brand-avatar" aria-hidden="true">
              <img src="/avater.png" alt="Avatar" />
            </span>
            <span className="font-display text-sm font-bold tracking-wide text-white">
              Mominul Islam
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={(e) => handleScrollTo(e, item)}
                className={['nav-link', active === item ? 'nav-link-active' : ''].join(' ')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-xl lg:hidden active:scale-95 transition"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </nav>

        {/* iPhone Control-Center Style Mobile Drawer Sheet */}
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-2.5 max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-[#0B1120]/85 p-3.5 shadow-[0_30px_70px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-[36px] lg:hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = navIcons[item] || FiHome;
                  const isActive = active === item;
                  return (
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      key={item}
                      whileTap={{ scale: 0.96 }}
                      onClick={(e) => handleScrollTo(e, item)}
                      className={[
                        'flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-semibold transition duration-200',
                        isActive
                          ? 'border border-cyan/40 bg-cyan/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_20px_rgba(56,189,248,0.25)]'
                          : 'border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white',
                      ].join(' ')}
                    >
                      <span className={isActive ? 'text-cyan' : 'text-slate-400'}>
                        <Icon size={16} />
                      </span>
                      <span>{item}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}