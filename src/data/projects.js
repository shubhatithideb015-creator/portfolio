/**
 * PROJECTS DATA
 * =============================================================================
 * Add, edit, or reorder projects below.
 * - Set `visible: false` to hide a project without deleting it.
 * - Set `githubUrl` or `demoUrl` to null or "" if not yet available; the UI
 *   will automatically hide those action buttons.
 * - Screenshots can be an image path in /public or set to null to use the
 *   built-in editorial SVG badge visual.
 * - Never invent features or metrics. Only describe genuinely implemented functionality.
 * =============================================================================
 */

export const projectsData = [
  {
    id: "cinematch",
    visible: true,
    title: "CineMatch",
    tagline: "Media Watchlist & Discovery Application",
    description:
      "A media discovery and watchlist tracking application allowing users to search titles, explore film details, maintain personalized watchlists, and manage viewing history. Built with a responsive React frontend and a lightweight Flask backend backed by SQLite for reliable local state persistence.",
    status: "Completed",
    category: "Full-Stack Development",
    technologies: ["React", "Flask", "SQLite", "OMDb API", "JavaScript", "Python", "CSS3"],
    features: [
      "Live title search and metadata retrieval using the OMDb API",
      "Personalized watchlist management with status tracking (to watch, watched)",
      "Persistent user watchlist records stored in SQLite via Flask REST endpoints",
      "Clean, responsive interface for cross-device browsing"
    ],
    screenshot: null, // Add path like "/projects/cinematch.png" or leave null for clean editorial graphic
    githubUrl: "https://github.com/shubhatithideb015-creator", // Update with exact repo link when public
    demoUrl: null, // Add live deployment URL if hosted, or leave null to hide
    detailsUrl: null
  },
  {
    id: "ai-engineering-project",
    visible: true,
    title: "AI Engineering Project — In Progress",
    tagline: "Machine Learning & Intelligent Systems Exploration",
    description:
      "An individual project currently under active design and development, exploring modern machine learning workflows, model evaluation, and practical AI application integration. Architecture, model selection, and dataset pipeline in progress.",
    status: "In Progress",
    category: "AI & Machine Learning",
    technologies: ["Python", "Machine Learning", "Data Science", "API Design"],
    features: [
      "Formulation of ML problem scope and data pipeline requirements",
      "Exploration of feature extraction, model experimentation, and evaluation",
      "System design targeting clean integration with a software client"
    ],
    screenshot: null,
    githubUrl: null, // Hidden until repository is initialized
    demoUrl: null,
    detailsUrl: null
  }
];
