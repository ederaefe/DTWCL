import { Page } from '../types';
import { IconHandset, IconEnvelope, IconPin } from './Icons';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        
        {/* Footer grid blocks */}
        <div className="footer-grid">
          
          {/* Brand description */}
          <div className="footer-brand">
            <h3>DTW Consults</h3>
            <p>
              Strategic educational consulting and career advisory firm. We bridge candidate transcripts and baseline preparations to global placements.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <button onClick={() => setCurrentPage('home')}>Home</button>
            <button onClick={() => setCurrentPage('about')}>About Us</button>
            <button onClick={() => setCurrentPage('services')}>Services</button>
            <button onClick={() => setCurrentPage('contact')}>Contact</button>
            <a 
              href="https://www.dtwedustore.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              DTW EduStore
            </a>
            <a 
              href="https://www.youtube.com/dtwtutorials" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              YouTube Classes
            </a>
          </div>

          {/* Contacts */}
          <div className="footer-links">
            <h4>Contact Desk</h4>
            <a href="tel:+2349085099582" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconHandset size={14} strokeWidth={1.5} />
              +234 908 509 9582
            </a>
            <a href="mailto:dtwconsultng@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconEnvelope size={14} strokeWidth={1.5} />
              dtwconsultng@gmail.com
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'default' }}>
              <IconPin size={14} strokeWidth={1.5} />
              Lagos, Nigeria
            </a>
          </div>

        </div>

        {/* Footer bottom details */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} DTW Consults. All rights reserved.</p>
          <div className="social-links">
              {/* Facebook — geometric F monogram SVG */}
              <a href="https://www.facebook.com/dtwtutorials" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <rect x="2" y="2" width="20" height="20" />
                  <path d="M15 2v4h-2a2 2 0 0 0-2 2v3h4l-1 4h-3v7" />
                </svg>
              </a>
              {/* Instagram — geometric camera frame SVG */}
              <a href="https://www.instagram.com/dtwtutorials" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <rect x="2" y="2" width="20" height="20" />
                  <rect x="8" y="8" width="8" height="8" />
                  <line x1="17" y1="5" x2="19" y2="5" />
                </svg>
              </a>
              {/* LinkedIn — geometric L-in frame SVG */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <rect x="2" y="2" width="20" height="20" />
                  <line x1="7" y1="10" x2="7" y2="17" />
                  <line x1="7" y1="7" x2="7" y2="7" strokeWidth="3" />
                  <line x1="11" y1="17" x2="11" y2="13" />
                  <path d="M11 13a3 3 0 0 1 6 0v4" />
                </svg>
              </a>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp chat widget */}
      <a 
        href="https://wa.me/2349085099582" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp" 
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </footer>
  );
}
