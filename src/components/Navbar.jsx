import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../data.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function jump(item) {
    setOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.055] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-5">
        <button onClick={() => jump('Home')} className="group flex items-center gap-3" aria-label="Go to home">
          <span className="brand-avatar" aria-hidden="true">
            <img src="/avater.png" alt="" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-white sm:block">Mominul Islam</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => jump(item)}
              className={['nav-link', active === item ? 'nav-link-active' : ''].join(' ')}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-[1.5rem] border border-white/10 bg-ink/90 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <button key={item} onClick={() => jump(item)} className="rounded-2xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10">
                {item}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
