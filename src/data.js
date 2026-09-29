/**
 * =============================================================================
 * PORTFOLIO DATA STORE (src/data.js)
 * =============================================================================
 * Central content hub for the portfolio. Update this single file to change
 * text, skills, projects, services, contact channels, and links across the site.
 * 
 * HOW TO MAKE CHANGES:
 * - Add/Modify Skills: Update the `skills` array. Pick an icon from react-icons.
 * - Add/Modify Projects: Update the `projects` array with title, description, tags, and colors.
 * - Add/Modify Services: Update the `services` array with title, icon, and short description.
 * - Update Social Links: Update the `socials` array with your personal profile links.
 * =============================================================================
 */

import {
  FaCss3Alt,
  FaFacebookF,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedinIn,
  FaPhp,
  FaReact,
  FaWhatsapp,
} from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';
import { FiCode, FiDatabase, FiLayers, FiMonitor, FiPenTool } from 'react-icons/fi';

/**
 * Navigation Bar Menu Items
 * Note: Each item corresponds to an HTML section id in lowercase
 * (e.g. 'Home' -> #home, 'About' -> #about, etc.)
 */
export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

/**
 * Hero Section Statistics Cards
 * Displayed beneath the call-to-action buttons in the Hero section.
 */
export const stats = [
  { value: '2+', label: 'Years building' },
  { value: '12+', label: 'Project flows' },
  { value: '8', label: 'Core tools' },
];

/**
 * Skills & Technologies
 * Displayed in the Skills section (orbit sphere + grid cards).
 * - `name`: Display name of technology
 * - `icon`: Icon component imported from react-icons
 * - `accent`: Hex color code used for icon glow and card hover effects
 */
export const skills = [
  { name: 'HTML', icon: FaHtml5, accent: '#fb7185' },
  { name: 'CSS', icon: FaCss3Alt, accent: '#38bdf8' },
  { name: 'JavaScript', icon: FaJs, accent: '#facc15' },
  { name: 'React', icon: FaReact, accent: '#22d3ee' },
  { name: 'PHP', icon: FaPhp, accent: '#a78bfa' },
  { name: 'MySQL', icon: SiMysql, accent: '#2dd4bf' },
  { name: 'Git', icon: FaGitAlt, accent: '#fb923c' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, accent: '#67e8f9' },
];

/**
 * Selected Projects Showcase
 * Displayed in the Projects section.
 * - `title`: Name of the project
 * - `description`: 1-2 sentence overview of functionality and problem solved
 * - `stack`: Array of tech badges/tags
 * - `palette`: Tailwind gradient class string for the simulated browser mockup header
 */
export const projects = [
  {
    title: 'Student Management System',
    description: 'A structured admin workflow for student records, notices, authentication, and data clarity.',
    stack: ['PHP', 'MySQL', 'Admin UI'],
    palette: 'from-cyan-400 via-sky-500 to-violet-500',
  },
  {
    title: 'Notice Website',
    description: 'A fast publishing experience for announcements with readable layouts and responsive sections.',
    stack: ['React', 'Tailwind', 'CMS Flow'],
    palette: 'from-emerald-300 via-cyan-400 to-blue-500',
  },
  {
    title: 'Mobile Master Shop Website',
    description: 'A polished commerce-facing interface for mobile products, repair services, and shop discovery.',
    stack: ['Frontend', 'Catalog', 'UX'],
    palette: 'from-rose-400 via-fuchsia-500 to-violet-600',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal brand system with cinematic motion, project storytelling, and contact conversion.',
    stack: ['React', 'Motion', 'SEO'],
    palette: 'from-amber-300 via-orange-400 to-rose-500',
  },
];

/**
 * Service Offerings
 * Displayed in the Services section cards.
 * - `title`: Service title
 * - `icon`: Icon component from react-icons/fi
 * - `text`: Summary of client delivery
 */
export const services = [
  { title: 'Web Development', icon: FiCode, text: 'Production-ready web platforms with clean structure and purposeful motion.' },
  { title: 'Frontend Development', icon: FiMonitor, text: 'Responsive interfaces that feel fast, clear, and premium across devices.' },
  { title: 'Admin Panel Development', icon: FiLayers, text: 'Dashboards and management systems designed for daily operational use.' },
  { title: 'Database Design', icon: FiDatabase, text: 'Practical schemas and data flows for reliable, scalable applications.' },
  { title: 'UI/UX Implementation', icon: FiPenTool, text: 'Pixel-aware implementation from design ideas to interactive experiences.' },
];

/**
 * Social Media & Contact Links
 * Displayed in the Contact section glass panel.
 * - `name`: Network name (accessible label)
 * - `icon`: Icon component from react-icons/fa
 * - `href`: Direct profile or messaging URL
 */
export const socials = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/mominulislam2003' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/mominulislammiad' },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/mominulislam.miad' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/015600193656' },
];

