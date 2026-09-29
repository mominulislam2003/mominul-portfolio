/**
 * =============================================================================
 * CONTACT SECTION COMPONENT (src/components/Contact.jsx)
 * =============================================================================
 * Provides direct communication channels and an interactive message form.
 * 
 * FEATURES:
 * - Direct contact links (Email, Phone, Location) with icons.
 * - Social media links (GitHub, LinkedIn, Facebook, WhatsApp) mapped from `src/data.js`.
 * - Interactive contact form with simulated submission toast feedback.
 * 
 * HOW TO CONNECT TO A REAL BACKEND / EMAIL SERVICE:
 * - Option 1: Use EmailJS, Formspree, or Web3Forms.
 *   In `submit(event)`, perform a `fetch()` POST request to your endpoint:
 *   e.g., `fetch("https://formspree.io/f/your_form_id", { method: "POST", body: new FormData(event.currentTarget) })`
 * - Option 2: Connect to your PHP / Express backend API endpoint.
 * =============================================================================
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import Section from './Section.jsx';
import { socials } from '../data.js';

export default function Contact() {
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/mwvnrkav', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        form.reset();
        window.setTimeout(() => {
          setStatus((prev) => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        const errorMsg = data?.errors?.map((e) => e.message).join(', ') || 'Something went wrong. Please try again.';
        setStatus({ submitting: false, submitted: false, error: errorMsg });
      }
    } catch {
      setStatus({ submitting: false, submitted: false, error: 'Network error. Please try again later.' });
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Have an idea? Let's build something sharp.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="glass-panel p-5 sm:p-8">
          <div className="space-y-3.5 sm:space-y-4">
            <a className="contact-line" href="mailto:mominulislam.miad@gmail.com">
              <FiMail /> <span>mominulislam.miad@gmail.com</span>
            </a>
            <a className="contact-line" href="tel:+8801560019656">
              <FiPhone /> <span>+8801560-019656</span>
            </a>
            <span className="contact-line">
              <FiMapPin /> <span>GPO-9000, Khulna, People's Republic of Bangladesh.</span>
            </span>
          </div>

          {/* Social media button row */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="social-button"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <motion.form
          action="https://formspree.io/f/mwvnrkav"
          method="POST"
          onSubmit={handleSubmit}
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
          <button className="form-submit md:col-span-2" type="submit" disabled={status.submitting}>
            <FiSend /> {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
          {/* Submission confirmation and error banners */}
          {status.submitted && (
            <p className="md:col-span-2 text-sm text-mint">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {status.error && (
            <p className="md:col-span-2 text-sm text-red-400">
              {status.error}
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

