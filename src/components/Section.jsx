import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={['section-shell relative scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8', className].join(' ')}>
      <motion.div
        className="mx-auto max-w-7xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow || title ? (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
          </div>
        ) : null}
        {children}
      </motion.div>
    </section>
  );
}
