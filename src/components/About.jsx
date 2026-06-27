import { motion } from 'framer-motion';
import { FiBookOpen, FiCompass, FiCpu, FiTarget } from 'react-icons/fi';
import Section from './Section.jsx';

const cards = [
  { icon: FiCpu, title: 'Experience', text: 'Building practical full stack projects with clean dashboards, responsive pages, and maintainable code.' },
  { icon: FiBookOpen, title: 'Education', text: 'Focused on continuous learning across React, backend logic, databases, and interface craft.' },
  { icon: FiCompass, title: 'Short Story', text: 'Mominul started from solving real local web problems and shaped that work into refined digital products.' },
  { icon: FiTarget, title: 'Mission', text: 'Create web experiences that feel fast, look sharp, and help people move through information confidently.' },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Systems-minded developer with a designer's eye.">
      <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="relative"
        >
          <div className="avatar-frame">
            <div className="avatar-screen">
              <img className="about-photo" src="/avater.png" alt="Mominul Islam" />
              <div className="avatar-code avatar-code-a" />
              <div className="avatar-code avatar-code-b" />
              <div className="avatar-code avatar-code-c" />
            </div>
            <div className="avatar-ring" />
          </div>
        </motion.div>

        <div className="glass-panel p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-300">
            Mominul Islam is a passionate full stack developer focused on building modern UI, scalable systems, and clean digital experiences using React, PHP, MySQL, and modern web technologies.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.58, delay: index * 0.08 }}
                  className="mini-card"
                >
                  <Icon className="text-cyan" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
