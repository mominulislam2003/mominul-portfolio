import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ as = 'a', href, download, children, className = '', variant = 'primary', onClick }) {
  const ref = useRef(null);
  const Component = motion[as] || motion.a;

  function handleMove(event) {
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;
    node.style.setProperty('--mx', x * 0.18 + 'px');
    node.style.setProperty('--my', y * 0.18 + 'px');
  }

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
      className={['magnetic-button', variant === 'secondary' ? 'magnetic-secondary' : 'magnetic-primary', className].join(' ')}
    >
      {children}
    </Component>
  );
}
