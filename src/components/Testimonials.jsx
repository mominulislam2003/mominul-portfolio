import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Section from './Section.jsx';
import { testimonials } from '../data.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  function prev() {
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((value) => (value + 1) % testimonials.length);
  }

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="A premium carousel for social proof.">
      <div className="testimonial-shell">
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
        <div className="testimonial-controls">
          <button onClick={prev} aria-label="Previous testimonial"><FiChevronLeft /></button>
          <button onClick={next} aria-label="Next testimonial"><FiChevronRight /></button>
        </div>
      </div>
    </Section>
  );
}
