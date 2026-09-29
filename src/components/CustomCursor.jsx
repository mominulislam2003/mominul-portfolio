/**
 * =============================================================================
 * CUSTOM CURSOR COMPONENT (src/components/CustomCursor.jsx)
 * =============================================================================
 * Renders an animated glowing cursor follower with spring physics on desktop devices.
 * 
 * HOW IT WORKS:
 * - Pointer media query check: `matchMedia('(pointer: fine)')` ensures the custom
 *   cursor only activates on devices with precise pointer controls (mouse/trackpad),
 *   automatically disabling itself on touchscreen mobile phones/tablets.
 * - Physics: Framer Motion's `useSpring` generates organic trailing momentum.
 * - Interactive states: Listens for hover over clickable elements (`a`, `button`, etc.)
 *   and applies the `custom-cursor-active` class to expand and highlight the cursor ring.
 * =============================================================================
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  // Whether current device supports fine pointer (mouse/trackpad)
  const [enabled, setEnabled] = useState(false);
  // Whether cursor is currently hovering over an interactive element
  const [active, setActive] = useState(false);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth physics spring configurations (damping, stiffness, mass)
  const x = useSpring(cursorX, { damping: 26, stiffness: 450, mass: 0.45 });
  const y = useSpring(cursorY, { damping: 26, stiffness: 450, mass: 0.45 });

  useEffect(() => {
    // Only enable if device has a mouse/trackpad
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(finePointer);
    if (!finePointer) return undefined;

    // Track mouse position with offset to center the circle on cursor tip
    function move(event) {
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    }

    // Expand cursor when hovering interactive elements
    function over(event) {
      if (event.target.closest('a, button, input, textarea, .magnetic-button')) setActive(true);
    }

    // Shrink back to normal when moving away
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

  // Render nothing on touchscreens/mobile devices
  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={['custom-cursor', active ? 'custom-cursor-active' : ''].join(' ')}
      style={{ x, y }}
    />
  );
}

