import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A stack built for elegant, reliable web products." className="overflow-hidden">
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="orbit-stage" aria-hidden="true">
          <div className="orbit-core">
            <span>Full Stack</span>
          </div>
          {skills.slice(0, 6).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <span key={skill.name} className={'orbit-icon orbit-icon-' + index} style={{ color: skill.accent }}>
                <Icon />
              </span>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="skill-card"
                style={{ '--skill': skill.accent }}
              >
                <Icon className="skill-icon" />
                <div>
                  <h3>{skill.name}</h3>
                  <p>Production workflow</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
