import { motion } from 'framer-motion';
import {
  FiBookOpen, FiCompass, FiCpu, FiTarget,
  FiAward, FiCode, FiGlobe, FiHeart,
  FiCheckCircle,
} from 'react-icons/fi';
import Section from './Section.jsx';

const traits = [
  {
    icon: FiCpu,
    title: 'Technical Depth',
    accent: '#38bdf8',
    text: 'Comfortable across the full stack — from crafting pixel-perfect React interfaces to designing efficient MySQL schemas and PHP-powered backends.',
  },
  {
    icon: FiHeart,
    title: 'Passion for Craft',
    accent: '#fb7185',
    text: 'Every project is treated as a story to tell. I obsess over the small details — spacing, animation timing, and color that makes users feel something.',
  },
  {
    icon: FiGlobe,
    title: 'Impact Driven',
    accent: '#2dd4bf',
    text: 'Started by solving real local web problems, turning that experience into refined products that create genuine value for users and businesses.',
  },
  {
    icon: FiTarget,
    title: 'Mission Focused',
    accent: '#a78bfa',
    text: 'Building web experiences that feel fast, look sharp, and help people move through information with clarity and confidence.',
  },
];

const timeline = [
  { year: '2022', label: 'Started web development journey with HTML, CSS & JavaScript fundamentals.' },
  { year: '2023', label: 'Built first full stack project — a Student Management System using PHP & MySQL.' },
  { year: '2024', label: 'Expanded into React ecosystem; launched commerce & notice platforms for local clients.' },
  { year: '2025', label: 'Refined craft with animation (Framer Motion, GSAP), Tailwind CSS, and clean system design.' },
  { year: 'Now', label: 'Available for exciting projects, collaborations, and full-time roles worldwide.' },
];

const values = ['Clean code & maintainability', 'Performance-first mindset', 'Pixel-perfect UI implementation', 'Responsive & accessible design'];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Systems-minded developer with a designer's eye.">
      {/* Bio paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="glass-panel p-5 sm:p-8 lg:p-10 mb-8 sm:mb-10"
      >
        <p className="text-base sm:text-lg leading-7 sm:leading-9 text-slate-300 max-w-4xl">
          I'm <span className="text-white font-bold">Mominul Islam</span>, a passionate full stack web developer from{' '}
          <span className="text-cyan font-semibold">Khulna, Bangladesh</span>. I specialise in building modern,
          high-performance digital products using{' '}
          <span className="text-white font-semibold">React, PHP, MySQL, Tailwind CSS,</span> and cutting-edge
          animation libraries. My work bridges the gap between engineering precision and visual storytelling —
          every interface I build is crafted to feel <em className="text-cyan not-italic">fast, beautiful, and purposeful</em>.
        </p>
        <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-400 max-w-4xl">
          Beyond just writing code, I think deeply about user experience, information hierarchy, and the subtle
          motion details that transform a good interface into an unforgettable one. Whether it's a complex
          admin dashboard or a personal brand site, I bring the same level of care and craftsmanship to every
          pixel.
        </p>
        {/* Core values list */}
        <ul className="mt-6 sm:mt-7 grid gap-2.5 sm:grid-cols-2 max-w-2xl">
          {values.map((val) => (
            <li key={val} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
              <FiCheckCircle className="flex-shrink-0 text-cyan text-sm sm:text-base" />
              {val}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Trait cards */}
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-8 sm:mb-10">
        {traits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="about-trait-card"
              style={{ '--trait': item.accent }}
            >
              <span className="about-trait-icon">
                <Icon />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          );
        })}
      </div>

      {/* Journey timeline */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="glass-panel p-5 sm:p-8 lg:p-10"
      >
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <FiBookOpen className="text-cyan text-lg sm:text-xl" />
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">My Journey</h3>
        </div>
        <div className="about-timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="about-timeline-item"
            >
              <div className="about-timeline-dot" />
              <div className="about-timeline-year">{item.year}</div>
              <p className="about-timeline-text">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
