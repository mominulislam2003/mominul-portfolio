/**
 * =============================================================================
 * SKILLS SECTION COMPONENT (src/components/Skills.jsx)
 * =============================================================================
 * Highlights technical skills using two synced representations:
 * 1. An orbital cosmic animation stage (orbit-stage) revolving icon nodes
 *    around a central "Full Stack" core.
 * 2. An interactive grid of cards with 3D tilt effects (`rotateX`, `rotateY`)
 *    and custom color accents (`--skill`).
 * 
 * HOW TO MAKE CHANGES:
 * - Update technologies in `src/data.js` (skills array).
 * - Change orbit radius or rotation speed: inspect the `.orbit-*` classes in `src/styles.css`.
 * =============================================================================
 */

import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A stack built for elegant, reliable web products." className="overflow-hidden">
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left Column: Orbital Planetary Stage */}
        <div className="orbit-stage" aria-hidden="true">
          {/* Central core node */}
          <div className="orbit-core">
            <span>Full Stack</span>
          </div>
          {/* Orbiting satellite icons (first 6 skills) */}
          {skills.slice(0, 6).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <span key={skill.name} className={'orbit-icon orbit-icon-' + index} style={{ color: skill.accent }}>
                <Icon />
              </span>
            );
          })}
        </div>

        {/* Right Column: Interactive 3D Skill Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                // 3D tilt and elevation on hover
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="skill-card"
                // Pass accent color as CSS variable for glow / border highlights
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

