import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Focused services for modern digital products.">
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="service-card"
            >
              <span className="service-icon"><Icon /></span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
