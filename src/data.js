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

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

export const stats = [
  { value: '2+', label: 'Years building' },
  { value: '12+', label: 'Project flows' },
  { value: '8', label: 'Core tools' },
];

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

export const services = [
  { title: 'Web Development', icon: FiCode, text: 'Production-ready web platforms with clean structure and purposeful motion.' },
  { title: 'Frontend Development', icon: FiMonitor, text: 'Responsive interfaces that feel fast, clear, and premium across devices.' },
  { title: 'Admin Panel Development', icon: FiLayers, text: 'Dashboards and management systems designed for daily operational use.' },
  { title: 'Database Design', icon: FiDatabase, text: 'Practical schemas and data flows for reliable, scalable applications.' },
  { title: 'UI/UX Implementation', icon: FiPenTool, text: 'Pixel-aware implementation from design ideas to interactive experiences.' },
];

export const testimonials = [
  {
    quote: 'Mominul turns rough ideas into clean, working interfaces with impressive attention to the small interactions.',
    name: 'Project Collaborator',
    role: 'Startup Founder',
  },
  {
    quote: 'His admin panel work made complex records easier to manage and much faster to understand.',
    name: 'Operations Lead',
    role: 'Education Platform',
  },
  {
    quote: 'The final website felt modern, smooth, and dependable on both desktop and mobile.',
    name: 'Local Business Owner',
    role: 'Retail Client',
  },
];

export const socials = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com/' },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com/' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/' },
];
