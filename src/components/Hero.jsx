import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FiArrowDown, FiDownload, FiSend, FiZap, FiCode, FiStar } from 'react-icons/fi';
import MagneticButton from './MagneticButton.jsx';
import { stats } from '../data.js';

const words = ["Hi,", "I'm", "Mominul", "Islam"];

export default function Hero() {
  const particles = useMemo(() => Array.from({ length: 44 }, (_, index) => ({
    left: (index * 37) % 100,
    top: (index * 61) % 100,
    delay: (index % 9) * 0.18,
    scale: 0.55 + (index % 5) * 0.12,
  })), []);

  useEffect(() => {
    const xTo = gsap.quickTo('.hero-reactive', '--react-x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo('.hero-reactive', '--react-y', { duration: 0.6, ease: 'power3.out' });
    function move(event) {
      const x = (event.clientX / window.innerWidth - 0.5) * 26;
      const y = (event.clientY / window.innerHeight - 0.5) * 22;
      xTo(x + 'px');
      yTo(y + 'px');
    }
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  /* Calculate cumulative char index for staggered animation delay */
  let charCounter = 0;

  return (
    <section id="home" className="hero-reactive relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 noise-layer" />
      <div className="particle-field" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={index}
            style={{ left: particle.left + '%', top: particle.top + '%', animationDelay: particle.delay + 's', transform: 'scale(' + particle.scale + ')' }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] xl:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)]">
        {/* Left: Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge intro */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-5 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/35 bg-cyan/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-cyan shadow-glow backdrop-blur-md">
              <FiZap className="text-cyan animate-pulse" /> Full Stack Developer
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-400 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
              Available for hire
            </div>
          </motion.div>

          <h1 className="hero-title max-w-4xl justify-center lg:justify-start font-display text-3xl font-black text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
            {words.map((word, wordIndex) => {
              const charElements = word.split('').map((char, index) => {
                const globalIndex = charCounter++;
                return (
                  <motion.span
                    key={word + char + index}
                    initial={{ opacity: 0, y: 40, rotateX: -70 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.62, delay: 0.28 + globalIndex * 0.022, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              });
              return (
                <span key={word + wordIndex} className="hero-word">
                  {charElements}
                </span>
              );
            })}
          </h1>

          {/* Mobile Profile photo: visible only below lg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="my-8 flex w-full justify-center lg:hidden"
          >
            <div className="hero-photo-frame">
              <div className="hero-photo-ring hero-photo-ring-1" />
              <div className="hero-photo-ring hero-photo-ring-2" />
              <div className="hero-photo-glow" />
              <div className="hero-photo-wrap">
                <img src="/avater.png" alt="Mominul Islam — Full Stack Developer" className="hero-photo-img" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hero-float-badge hero-float-badge-tl"
              >
                <FiCode className="text-cyan text-base" />
                <div className="text-left">
                  <span className="block text-white text-xs font-bold leading-tight">React &amp; PHP</span>
                  <span className="block text-slate-400 text-[10px]">Full Stack</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hero-float-badge hero-float-badge-br"
              >
                <FiStar className="text-amber-400 text-base" />
                <div className="text-left">
                  <span className="block text-white text-xs font-bold leading-tight">2+ Years</span>
                  <span className="block text-slate-400 text-[10px]">Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-3 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mt-6"
          >
            I build modern, high-performance, visually stunning web experiences with clean systems, refined interfaces, and cinematic motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex w-full flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
          >
            <MagneticButton href="#projects" className="w-full sm:w-auto">View Projects</MagneticButton>
            <MagneticButton href="#contact" variant="secondary" className="w-full sm:w-auto"><FiSend /> Contact Me</MagneticButton>
            <MagneticButton href="/mominul-islam-cv.pdf" download variant="secondary" className="w-full sm:w-auto"><FiDownload /> Download CV</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            className="mt-10 grid w-full max-w-xl grid-cols-3 gap-2 sm:gap-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card text-left">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile photo (visible on lg screens and up) */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="hero-photo-frame">
            {/* Decorative orbit rings */}
            <div className="hero-photo-ring hero-photo-ring-1" />
            <div className="hero-photo-ring hero-photo-ring-2" />
            {/* Ambient glow blob */}
            <div className="hero-photo-glow" />
            {/* Profile image */}
            <div className="hero-photo-wrap">
              <img src="/avater.png" alt="Mominul Islam — Full Stack Developer" className="hero-photo-img" />
            </div>
            {/* Floating badge: stack */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-float-badge hero-float-badge-tl"
            >
              <FiCode className="text-cyan text-lg" />
              <div>
                <span className="block text-white text-xs font-bold leading-tight">React &amp; PHP</span>
                <span className="block text-slate-400 text-[10px]">Full Stack</span>
              </div>
            </motion.div>
            {/* Floating badge: rating */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="hero-float-badge hero-float-badge-br"
            >
              <FiStar className="text-amber-400 text-lg" />
              <div>
                <span className="block text-white text-xs font-bold leading-tight">2+ Years</span>
                <span className="block text-slate-400 text-[10px]">Experience</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
        <FiArrowDown />
      </a>
    </section>
  );
}
