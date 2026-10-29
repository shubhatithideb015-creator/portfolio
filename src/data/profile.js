/**
 * PROFILE DATA
 * =============================================================================
 * Edit this file to update your personal details, career direction, bio,
 * education, and social/contact links. Missing or empty links will automatically
 * be hidden from the UI.
 * =============================================================================
 */

export const profileData = {
  name: "Shubhatithi Deb",
  role: "Aspiring AI/ML Engineer & Software Developer",
  status: "Available for 2026 Internships",
  location: "Kolkata, India",
  headline: "Building intelligent systems into useful software.",
  summary:
    "Third-year B.Tech Computer Science student specializing in Data Science based in Kolkata, India. Focused on machine learning, AI engineering, Python, and modern full-stack development to build reliable, practical software.",

  // Academic Information - Update placeholders when ready
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Specialization in Data Science",
    institution: "[University / Institute Name — Edit in src/data/profile.js]", // Editable placeholder
    year: "Third Year (Expected 2027)", // Editable placeholder
    location: "Kolkata, India",
    focusAreas: [
      "Machine Learning & Data Science",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming (Python, C++)",
      "Web Technologies & Software Engineering"
    ]
  },

  // Current learning & engineering focus
  currentFocus: [
    "Exploring end-to-end AI application development and LLM system integrations",
    "Strengthening foundational ML algorithms, evaluation metrics, and feature pipelines",
    "Building clean, maintainable full-stack software with modern web architectures"
  ],

  // Contact and Social Links
  // Set to null, empty string, or remove to hide the link automatically
  socialLinks: {
    github: {
      label: "GitHub",
      username: "shubhatithideb015-creator",
      url: "https://github.com/shubhatithideb015-creator"
    },
    linkedin: {
      label: "LinkedIn",
      username: "shubhatithi-deb",
      url: "https://linkedin.com/in/shubhatithi-deb" // Replace with your verified LinkedIn profile URL
    },
    email: {
      label: "Email",
      address: "shubhatithi.deb@example.com", // Replace with your primary email address
      url: "mailto:shubhatithi.deb@example.com"
    },
    resume: {
      label: "Résumé",
      // Set to your resume link (e.g. "/resume.pdf" in public/ or a Google Drive link), or null to hide
      url: null 
    }
  }
};
