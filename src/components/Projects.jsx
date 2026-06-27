import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Section from './Section.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work with polish, structure, and momentum.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.64, delay: index * 0.07 }}
            className="project-card group"
          >
            <div className={['project-visual bg-gradient-to-br', project.palette].join(' ')}>
              <div className="project-browser">
                <div className="window-controls"><span /><span /><span /></div>
                <div className="project-lines"><i /><i /><i /></div>
                <div className="project-panel" />
              </div>
              <div className="project-shine" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="project-actions">
                <a href="#contact"><FiExternalLink /> Live Demo</a>
                <a href="https://github.com/"><FiGithub /> GitHub</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
