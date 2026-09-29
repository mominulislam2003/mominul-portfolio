/**
 * =============================================================================
 * SECTION WRAPPER COMPONENT (src/components/Section.jsx)
 * =============================================================================
 * Provides consistent layout, spacing, scroll anchors, and viewport entrance
 * animations across all major sections of the portfolio.
 * 
 * PROPS:
 * - `id` (string): Anchor identifier used by navbar links (e.g. "skills", "projects")
 * - `eyebrow` (string): Small uppercase category chip above the title (e.g. "Skills")
 * - `title` (string): Primary section heading text
 * - `children` (ReactNode): Content placed within the section container
 * - `className` (string): Additional custom Tailwind classes
 * 
 * ANIMATION:
 * - Uses Framer Motion `fadeUp` variant triggered when 15% of section enters viewport.
 * =============================================================================
 */

import { motion } from 'framer-motion';

// Animation variant for smooth upward fade with subtle blur clearing
export const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={['section-shell relative scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24', className].join(' ')}
    >
      <motion.div
        className="mx-auto max-w-7xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header containing eyebrow pill and main section heading */}
        {eyebrow || title ? (
          <div className="mb-7 sm:mb-10 max-w-3xl">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
          </div>
        ) : null}
        {/* Render child elements */}
        {children}
      </motion.div>
    </section>
  );
}

