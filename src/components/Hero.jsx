import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FiArrowDown, FiDownload, FiSend, FiZap } from 'react-icons/fi';
import MagneticButton from './MagneticButton.jsx';
import { stats } from '../data.js';

const title = "Hi, I'm Mominul Islam";

export default function Hero() {
  const cardRef = useRef(null);
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

  function tilt(event) {
    const node = cardRef.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.setProperty('--tilt-x', y * -13 + 'deg');
    node.style.setProperty('--tilt-y', x * 16 + 'deg');
  }

  function resetTilt() {
    const node = cardRef.current;
    if (!node) return;
    node.style.setProperty('--tilt-x', '0deg');
    node.style.setProperty('--tilt-y', '0deg');
  }

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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan shadow-glow"
          >
            <FiZap /> Full Stack Developer
          </motion.div>

          <h1 className="mt-7 max-w-5xl font-display text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: -70 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.62, delay: 0.28 + index * 0.018, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            I build modern, high-performance, visually stunning web experiences with clean systems, refined interfaces, and cinematic motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href="#contact" variant="secondary"><FiSend /> Contact Me</MagneticButton>
            <MagneticButton href="/mominul-islam-cv.txt" download variant="secondary"><FiDownload /> Download CV</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          <div className="developer-stage" ref={cardRef} onMouseMove={tilt} onMouseLeave={resetTilt}>
            <div className="dev-card main-dev-card">
              <div className="dev-card-top">
                <div>
                  <span className="tiny-label">Live workspace</span>
                  <h2>Mominul.dev</h2>
                </div>
                <span className="status-dot">Online</span>
              </div>
              <div className="code-window">
                <div className="window-controls"><span /><span /><span /></div>
                <pre>{'const craft = {\n  ui: "premium",\n  stack: ["React", "PHP", "MySQL"],\n  motion: "cinematic"\n};'}</pre>
              </div>
              <div className="metric-row">
                <div><span>Performance</span><strong>98%</strong></div>
                <div><span>Motion</span><strong>60fps</strong></div>
              </div>
            </div>
            <div className="dev-card floating-widget widget-a">React<br /><strong>Interface Systems</strong></div>
            <div className="dev-card floating-widget widget-b">MySQL<br /><strong>Clean Data Flow</strong></div>
            <div className="dev-card floating-widget widget-c">PHP<br /><strong>Admin Logic</strong></div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
        <FiArrowDown />
      </a>
    </section>
  );
}
