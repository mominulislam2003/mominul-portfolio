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
            viewport={{ once: true, amount: 0.15 }}
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
            <div className="p-4 sm:p-5">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-2.5 sm:mt-3 min-h-0 sm:min-h-[72px] text-xs sm:text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {project.stack.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="project-actions">
                <a href="#contact" className="w-full sm:w-auto"><FiExternalLink /> Live Demo</a>
                <a href="https://github.com/" className="w-full sm:w-auto"><FiGithub /> GitHub</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
