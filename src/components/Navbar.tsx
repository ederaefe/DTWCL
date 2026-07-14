import { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to trigger scrolled class on header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <header 
      id="header" 
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container header-inner">
        {/* logo and branding */}
        <button
          onClick={() => handleNavClick('home')}
          className="logo"
          aria-label="DTW Consults Home"
        >
        {/* Geometric SVG logo-icon monogram */}
          <div className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" shapeRendering="crispEdges">
              <polygon points="12,0 52,0 64,12 64,52 52,64 12,64 0,52 0,12" fill="#ad810b"/>
              <line x1="4" y1="32" x2="12" y2="32" stroke="#c5d3cc" strokeWidth="1.5"/>
              <line x1="52" y1="32" x2="60" y2="32" stroke="#c5d3cc" strokeWidth="1.5"/>
              <path d="M20 18 L20 46 L33 46 Q46 46 46 32 Q46 18 33 18 Z" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="miter"/>
              <path d="M26 24 L26 40 L33 40 Q39 40 39 32 Q39 24 33 24 Z" fill="rgba(255,255,255,0.35)"/>
            </svg>
          </div>
          <span>DTW Consults</span>
        </button>

        {/* Desktop nav links */}
        <nav 
          className={`nav-links ${isOpen ? 'open' : ''}`} 
          role="navigation" 
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.value;
            return (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={isActive ? 'active' : ''}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle button */}
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          id="menuToggle" 
          aria-label="Toggle menu" 
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
