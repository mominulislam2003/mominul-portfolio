import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { damping: 26, stiffness: 450, mass: 0.45 });
  const y = useSpring(cursorY, { damping: 26, stiffness: 450, mass: 0.45 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(finePointer);
    if (!finePointer) return undefined;

    function move(event) {
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    }

    function over(event) {
      if (event.target.closest('a, button, input, textarea, .magnetic-button')) setActive(true);
    }

    function out(event) {
      if (event.target.closest('a, button, input, textarea, .magnetic-button')) setActive(false);
    }

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={['custom-cursor', active ? 'custom-cursor-active' : ''].join(' ')}
      style={{ x, y }}
    />
  );
}
