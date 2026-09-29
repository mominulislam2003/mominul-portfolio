/**
 * =============================================================================
 * TESTIMONIALS CAROUSEL COMPONENT (src/components/Testimonials.jsx)
 * =============================================================================
 * An interactive feedback carousel showcasing client/collaborator reviews.
 * 
 * FEATURES:
 * - Auto-advances every 4.2 seconds using `setInterval`.
 * - Prev / Next directional controls with smooth wrap-around arithmetic.
 * - Framer Motion `AnimatePresence` with blur and slide transitions.
 * 
 * HOW TO MAKE CHANGES:
 * - If you want to use this component, add a `testimonials` array to `src/data.js`
 *   and import it into `App.jsx`.
 * - Adjust autoplay timing by changing the 4200ms value in the `useEffect`.
 * =============================================================================
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Section from './Section.jsx';
import { testimonials } from '../data.js';

export default function Testimonials() {
  // Current active index in the testimonials array
  const [index, setIndex] = useState(0);
  const active = testimonials ? testimonials[index] : null;

  // Auto-advance timer: moves to next slide every 4.2s
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % testimonials.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, []);

  // Jump to previous testimonial with modulo wrap-around
  function prev() {
    if (!testimonials || testimonials.length === 0) return;
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);
  }

  // Jump to next testimonial with modulo wrap-around
  function next() {
    if (!testimonials || testimonials.length === 0) return;
    setIndex((value) => (value + 1) % testimonials.length);
  }

  if (!active) return null;

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="A premium carousel for social proof.">
      <div className="testimonial-shell">
        {/* Animated quote card with entrance/exit transitions */}
        <AnimatePresence mode="wait">
          <motion.figure
            key={active.name}
            initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
            transition={{ duration: 0.45 }}
          >
            <blockquote>"{active.quote}"</blockquote>
            <figcaption>
              <strong>{active.name}</strong>
              <span>{active.role}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {/* Carousel pagination arrows */}
        <div className="testimonial-controls">
          <button onClick={prev} aria-label="Previous testimonial">
            <FiChevronLeft />
          </button>
          <button onClick={next} aria-label="Next testimonial">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </Section>
  );
}

