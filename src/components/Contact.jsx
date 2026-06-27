import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import Section from './Section.jsx';
import { socials } from '../data.js';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2600);
    event.currentTarget.reset();
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Have an idea? Let's build something sharp.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel p-6 sm:p-8">
          <div className="space-y-4">
            <a className="contact-line" href="mailto:mominul@example.com"><FiMail /> mominul@example.com</a>
            <a className="contact-line" href="tel:+8801000000000"><FiPhone /> +880 1000 000000</a>
            <span className="contact-line"><FiMapPin /> Bangladesh</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.name} href={social.href} aria-label={social.name} className="social-button">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="contact-form"
        >
          <label>
            <span>Name</span>
            <input required name="name" type="text" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input required name="email" type="email" placeholder="you@example.com" />
          </label>
          <label className="md:col-span-2">
            <span>Message</span>
            <textarea required name="message" rows="6" placeholder="Tell me what you want to create" />
          </label>
          <button className="form-submit md:col-span-2" type="submit"><FiSend /> Send Message</button>
          {sent ? <p className="md:col-span-2 text-sm text-mint">Message interaction captured. Connect this form to your backend to receive real submissions.</p> : null}
        </motion.form>
      </div>
    </Section>
  );
}
