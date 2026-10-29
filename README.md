# Shubhatithi Deb — Personal Portfolio

A personal portfolio website for **Shubhatithi Deb**, designed with a **premium dark editorial aesthetic** (near-black background, warm white typography, muted grey text, and restrained violet accents). Built for optimal performance, accessibility, minimal AI usage, clean code, and effortless future editability.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), Vite 6
- **Styling**: Vanilla CSS with custom properties (`src/styles/global.css`, `src/styles/components.css`)
- **Typography**: Plus Jakarta Sans & Newsreader (via Google Fonts)
- **Zero Heavy Dependencies**: No bloated UI component libraries, no heavy animation frameworks, no external icon packs. Fast, lightweight, and responsive.

---

## 📁 Project Architecture

```
porfolio/
├── index.html                  # SEO meta tags, Google Fonts, accessible layout
├── package.json                # Lean dependencies (React, Vite, @vitejs/plugin-react)
├── vite.config.js              # Vite configuration
├── src/
│   ├── main.jsx                # App entry point
│   ├── App.jsx                 # Page structure & semantic layout
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Sticky nav with working mobile drawer
│   │   ├── Hero.jsx            # Headline, bio, CTA buttons, status pill
│   │   ├── Projects.jsx        # Projects section container
│   │   ├── ProjectCard.jsx     # Reusable card with abstract SVG/media support
│   │   ├── Skills.jsx          # 4 genuine skill categories (no progress bars)
│   │   ├── Certifications.jsx  # Verified credentials & issuer treatments
│   │   ├── About.jsx           # Bio, academic record, current learning focus
│   │   ├── Contact.jsx         # Mailto & copy-to-clipboard, social handles
│   │   └── Footer.jsx          # Dynamic copyright year & back-to-top
│   ├── data/                   # ⭐️ ALL CONTENT IS CENTRALLY MANAGED HERE ⭐️
│   │   ├── profile.js          # Personal bio, education, location, links
│   │   ├── projects.js         # CineMatch, AI Engineering project, future work
│   │   ├── skills.js           # 4 skill categories with contextual notes
│   │   └── certifications.js   # 5 credentials with date and verification handlers
│   └── styles/
│       ├── global.css          # Design tokens, color system, typography reset
│       └── components.css      # Component layouts, abstract mockups, media queries
```

---

## 🚀 How to Run Locally

### 1. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the printed local address (default: `http://localhost:5173/`).

### 2. Create a Production Build
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Edit Content

All content is strictly separated from presentation logic. You do **not** need to touch JSX or CSS to edit text, add projects, or update credentials.

### 1. Personal Profile & Education
Edit **`src/data/profile.js`**:
- **Name, headline, and bio summary**.
- **Institution name** (e.g. replace placeholder `"[University / Institute Name]"`).
- **Graduation year** and focus areas.
- **Social links**: update your LinkedIn handle, contact email, and optional résumé PDF link. Set any link to `null` to hide it automatically from the UI.

### 2. Projects
Edit **`src/data/projects.js`**:
- **CineMatch**: add live demo URL or update feature highlights.
- **AI Engineering Project**: when your model and repo are ready, update the title, description, and `githubUrl`.
- **Add New Projects**: duplicate an entry in `projectsData`. Set `visible: false` to hide any draft project without deleting it.

### 3. Skills
Edit **`src/data/skills.js`**:
- Grouped into: `Programming Languages`, `AI & Data Science`, `Software Development`, and `Tools & Workflows`.
- Set `highlight: true` to give a skill item subtle emphasis.

### 4. Certifications
Edit **`src/data/certifications.js`**:
- Verified programs: Google Cloud Skills Boost, IBM SkillsBuild, Cisco Networking Academy, Deloitte / Forage, Udemy.
- Set `verificationUrl` to your official credential link (or leave `null` to display clean completion badge).
- Update the issue date for Deloitte once verified.

---

## 🎯 Credibility & Integrity Standards

- **No invented achievements**: Only authentic coursework, real credentials, and genuine project scopes are included.
- **No arbitrary progress bars**: Skills are listed with descriptive, interview-ready notes instead of misleading percentages.
- **Graceful link handling**: Incomplete or missing URLs are cleanly hidden from the UI.
- **Fast and Accessible**: Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`), keyboard focus indicators, screen-reader skip links, and reduced-motion media query support.
