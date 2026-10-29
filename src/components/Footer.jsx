import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-astrolabe" aria-hidden="true">
            <span className="astrolabe-dot"></span>
          </div>
          <span className="footer-name">{profileData.name}</span>
          <span className="footer-separator">&bull;</span>
          <span className="footer-location">{profileData.location}</span>
          <span className="footer-separator">&bull;</span>
          <span className="footer-role">AI/ML & Software</span>
        </div>

        <div className="footer-center">
          <p className="footer-copyright">
            &copy; {currentYear} {profileData.name}. Designed with intentional pastel architecture & React.
          </p>
        </div>

        <div className="footer-actions">
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top of page"
          >
            <span>Top of Orbit</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
