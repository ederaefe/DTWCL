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
          <div className="logo-icon">D</div>
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
