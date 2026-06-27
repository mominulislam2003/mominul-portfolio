import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Focused services for modern digital products.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              whileHover={{ y: -8 }}
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
