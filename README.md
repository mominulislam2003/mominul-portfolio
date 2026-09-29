# ⚡ Mominul Islam — Developer Portfolio

A developer portfolio built with **React 19**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Lenis Scroll**. Features an iOS/cyberpunk frosted glass aesthetic, kinetic 3D typography, particle fields, planetary orbit skill visualizers, and interactive magnetic controls.

---

## 🌟 Key Features

- **🚀 Ultra Fast & Responsive**: Built with Vite 7 and React 19 for instantaneous hot module replacement (HMR) and optimized production bundles.
- **✨ Apple iOS-Style Frosted Glass**: Dynamic blurred glass panels (`backdrop-filter`) with custom ambient neon glows.
- **🪐 Planetary Orbital Skills Stage**: Multi-orbit cosmic visualization revolving technologies around a core hub, paired with interactive 3D tilt cards.
- **🌊 Lenis Smooth Momentum Scrolling**: Decoupled momentum scrolling synchronized seamlessly with **GSAP ScrollTrigger**.
- **🎯 Interactive Magnetic Buttons**: Buttons that calculate real-time mouse distance and physically pull toward the user's cursor.
- **📱 iOS Control-Center Mobile Navigation**: Floating pill navbar on desktop transitioning into an animated modal drawer on mobile.
- **🖥️ Simulated Browser Mockups**: Realistic Mac-style application windows showcasing projects with gradient overlays and live demo links.
- **📬 Contact Form & Channels**: Interactive messaging interface, direct email/phone links, and quick-connect social channels.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 7](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS 3](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer) |
| **Animations & Motion** | [Framer Motion 12](https://www.framer.com/motion/), [GSAP 3](https://gsap.com/) (ScrollTrigger) |
| **Smooth Scrolling** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, SimpleIcons, Feather) |
| **Typography** | Space Grotesk & Inter via Google Fonts |

---

## 📁 Project Structure

```text
mominul-portfolio-main/
├── public/                 # Static public assets (images, CV, icons)
│   ├── avatar.png          # Main developer portrait
│   └── mominul-islam-cv.pdf # Downloadable resume/CV
├── src/
│   ├── components/         # Modular React components
│   │   ├── About.jsx       # Bio, core traits, and career journey timeline
│   │   ├── Contact.jsx     # Contact info, social links, and message form
│   │   ├── CustomCursor.jsx# Spring-physics animated cursor follower
│   │   ├── Footer.jsx      # Bottom branding and scroll-to-top button
│   │   ├── Hero.jsx        # Kinetic typography, parallax, badges, and CTAs
│   │   ├── MagneticButton.jsx # Cursor attraction physics button
│   │   ├── Navbar.jsx      # Frosted glass nav bar with scroll-spy
│   │   ├── Projects.jsx    # Projects showcase with browser mockups
│   │   ├── Section.jsx     # Consistent layout wrapper & entrance animation
│   │   ├── Services.jsx    # Engineering offerings grid
│   │   ├── Skills.jsx      # Planetary orbit & 3D tilt skill cards
│   │   └── Testimonials.jsx# Client testimonial carousel with autoplay
│   ├── data.js             # 💡 Central data store (content, skills, links, projects)
│   ├── styles.css          # Global CSS, Tailwind layers, frosted glass, & keyframes
│   ├── App.jsx             # Top-level orchestrator (loader, Lenis, GSAP, layout)
│   └── main.jsx            # Application mount point (React.StrictMode)
├── index.html              # HTML shell, SEO meta tags, OG cards, and Google Fonts
├── tailwind.config.js      # Color tokens, fonts, glow shadows, and keyframes
├── vite.config.js          # Vite build configuration and plugins
├── postcss.config.js       # PostCSS plugin pipeline
└── package.json            # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm`, `yarn`, or `pnpm`

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd mominul-portfolio-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` (or the URL displayed in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled, minified production assets will be generated in the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🎨 How to Customize Your Content

All website content is conveniently organized in clean, well-commented files:

### 1. Update Content, Skills & Projects (`src/data.js`)
Edit [`src/data.js`](src/data.js) to modify:
- **`navItems`**: Navigation links.
- **`stats`**: Metric counters displayed in the Hero section.
- **`skills`**: Add/remove technologies, custom icons, and accent colors.
- **`projects`**: Project titles, descriptions, tech tags, and card gradients.
- **`services`**: Development services and descriptions.
- **`socials`**: Social media profiles (GitHub, LinkedIn, WhatsApp, etc.).

### 2. Update Profile Photo & Resume
- **Photo**: Replace `public/avatar.png` with your own square photo (PNG or JPG).
- **Resume/CV**: Place your PDF file in `public/mominul-islam-cv.pdf`.

### 3. Connect the Contact Form to Real Emails
In [`src/components/Contact.jsx`](src/components/Contact.jsx), replace the simulated `submit` handler with an email service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/):
```javascript
async function submit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });
  
  setSent(true);
  event.currentTarget.reset();
}
```

### 4. Adjust Colors & Theme Tokens
Open [`tailwind.config.js`](tailwind.config.js) to customize the brand palette:
```javascript
colors: {
  space: '#050816',   // Base dark background
  cyan: '#38BDF8',    // Primary highlight
  mint: '#2DD4BF',    // Secondary green accent
  violet: '#7C3AED',  // Accent purple
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
