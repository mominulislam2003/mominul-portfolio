/**
 * =============================================================================
 * MAGNETIC BUTTON COMPONENT (src/components/MagneticButton.jsx)
 * =============================================================================
 * Creates an interactive magnetic attraction button effect that physically pulls
 * slightly towards the user's cursor on mouse move, then snaps back on mouse leave.
 * 
 * PROPS:
 * - `as` (string): Underlying HTML element or motion component (default: 'a')
 * - `href` (string): URL or anchor target (e.g. "#projects")
 * - `download` (boolean|string): If present, triggers file download (e.g. CV)
 * - `children` (ReactNode): Label or icon content
 * - `className` (string): Additional CSS classes
 * - `variant` (string): 'primary' (neon gradient) or 'secondary' (frosted glass)
 * - `onClick` (function): Click event handler callback
 * 
 * HOW THE MAGNETIC EFFECT WORKS:
 * 1. Computes distance between cursor and center of the button bounding box.
 * 2. Sets CSS custom properties `--mx` and `--my` scaled by a damping factor (0.18).
 * 3. CSS applies `transform: translate3d(var(--mx), var(--my), 0)` to translate smoothly.
 * 4. `onMouseLeave` resets `--mx` and `--my` to 0px.
 * =============================================================================
 */

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  as = 'a',
  href,
  download,
  children,
  className = '',
  variant = 'primary',
  onClick,
}) {
  const ref = useRef(null);
  const Component = motion[as] || motion.a;

  // Calculates cursor offset relative to button center and applies as CSS variables
  function handleMove(event) {
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;
    // Damped motion multiplier: adjust 0.18 to make the pull stronger or weaker
    node.style.setProperty('--mx', x * 0.18 + 'px');
    node.style.setProperty('--my', y * 0.18 + 'px');
  }

  // Resets offsets back to center when cursor leaves button area
  function reset() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--mx', '0px');
    node.style.setProperty('--my', '0px');
  }

  return (
    <Component
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      className={[
        'magnetic-button',
        variant === 'secondary' ? 'magnetic-secondary' : 'magnetic-primary',
        className,
      ].join(' ')}
    >
      {children}
    </Component>
  );
}

