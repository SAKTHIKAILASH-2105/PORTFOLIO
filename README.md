# Sakthi Kailash — Futuristic Engineering Portfolio

> **"Building Intelligent Solutions Through Electronics, Innovation & Technology."**

A premium, modern, futuristic, fully responsive personal portfolio website designed for **Sakthi Kailash**, Mechatronics Engineering Student and Aspiring Electronics & VLSI Engineer.

---

## ⚡ Tech Stack & Architecture

- **Core Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling & Theme:** [Tailwind CSS](https://tailwindcss.com/) (Custom futuristic dark theme, neon glow, cyber grids, and glassmorphic panels)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Scroll triggers, smooth spring modals, responsive drawers)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Typography:** Space Grotesk (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Engineering & Code telemetry)
- **Interactive Canvas:** Custom HTML5 Canvas rendering dynamic circuit traces, signal pulses, and logic bus lines.

---

## 📁 Project Structure

```
SK PORTFOLIO/
├── public/
│   └── favicon.svg                  # High-tech semiconductor IC SVG icon
├── src/
│   ├── assets/                      # Media assets & graphics
│   ├── components/
│   │   ├── CircuitBackground.jsx    # Interactive canvas PCB circuit traces & pulses
│   │   ├── CustomCursor.jsx         # Futuristic reticle cursor (desktop only)
│   │   ├── Footer.jsx               # Engineering footer with live IST core clock
│   │   ├── LoadingScreen.jsx        # Bootloader initialization screen
│   │   ├── Navbar.jsx               # Floating glassmorphic navbar with active tracker
│   │   ├── ProjectModal.jsx         # Detailed system architecture modal
│   │   ├── ResumeModal.jsx          # Resume preview, print, and download modal
│   │   ├── ScrollToTop.jsx          # Circular scroll progress back-to-top button
│   │   ├── SectionHeader.jsx        # Standardized engineering section headers
│   │   └── StatusBadge.jsx          # Reusable status tags (Core, Learning, Active)
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all editable content
│   ├── sections/
│   │   ├── Hero.jsx                 # Landing page with terminal typing effect
│   │   ├── About.jsx                # Narrative, education, and mechatronics synergy
│   │   ├── Skills.jsx               # Filterable skill cards (Experienced vs Learning)
│   │   ├── Projects.jsx             # Interactive project showcase with schematics
│   │   ├── Journey.jsx              # Vertical engineering roadmap timeline
│   │   ├── Certifications.jsx       # NPTEL, workshops, and SIH participation
│   │   └── Contact.jsx              # Form, one-click copy email, and closing quote
│   ├── styles/
│   │   └── index.css                # Tailwind directives, custom scrollbars, animations
│   ├── App.jsx                      # Root application layout
│   └── main.jsx                     # Vite entry point
├── index.html                       # HTML5 metadata & Google Fonts
├── package.json                     # Dependencies & build scripts
├── tailwind.config.js               # Futuristic dark theme palette & keyframes
└── vite.config.js                   # Vite configuration
```

---

## 🚀 Quick Start Guide

### 1. Development Server
To start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
To create an optimized production build:
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Customization & Updating Data

All content is centrally managed in **`src/data/portfolioData.js`**. You can edit:
- **Social Links:** Update your GitHub URL, LinkedIn URL, and active Email address.
- **Projects:** Add new projects or update technical descriptions, architectures, and repository URLs.
- **Skills:** Add new tools or transition skills from "Currently Learning" to "Core / Experienced".
- **Certifications & Workshops:** Replace placeholder IDs with real certificates and credentials as you complete them.
- **Resume:** Place your PDF in the `public/` directory (e.g., `public/Sakthi_Kailash_Resume.pdf`) and update `resumeUrl` in `src/data/portfolioData.js`.

---

## 🛡️ Accessibility & Performance

- **Reduced Motion Support:** Respects `prefers-reduced-motion` to smoothly disable intensive canvas particles and fast transitions for sensitive users.
- **Desktop Only Cursor:** Automatically detects touch devices and disables custom cursor overlays to maintain native touch responsiveness.
- **High Contrast:** All text passes WCAG contrast checks against deep navy and black backgrounds.
