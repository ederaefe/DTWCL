import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Ordered: HOME -> ABOUT -> SERVICES -> CONTACT
  const navItems: { label: string; value: Page }[] = [
    { label: 'HOME', value: 'home' },
    { label: 'ABOUT', value: 'about' },
    { label: 'SERVICES', value: 'services' },
    { label: 'CONTACT', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <header id="sticky-header" className="sticky top-0 z-40 w-full border-b border-black/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-12">
        
        {/* Brand Wordmark (Fraunces Serif) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded px-1 cursor-pointer"
        >
          <span className="font-fraunces text-xl md:text-2xl font-bold tracking-tight text-black">
            DTW Consults
          </span>
          <span className="font-space text-[9px] tracking-widest text-gold uppercase mt-0.5">
            Destined To Win
          </span>
        </button>

        {/* Desktop Navigation Menu (Work Sans) */}
        <nav className="hidden md:flex items-center space-x-8 font-work text-xs font-semibold tracking-wider text-black">
          {navItems.map((item) => {
            const isActive = currentPage === item.value;
            return (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`relative py-2 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:text-gold cursor-pointer ${
                  isActive ? 'text-black' : 'text-black/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gold animate-fade-in" />
                )}
              </button>
            );
          })}
          
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-gold text-black font-space text-xs font-bold tracking-wider px-4 py-2 hover:bg-stone active:scale-98 transition duration-150 cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-black md:hidden hover:text-gold transition cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-black/10 bg-cream animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6 py-6 font-work text-sm font-semibold tracking-widest text-black">
            {navItems.map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left py-2 border-l-2 pl-3 transition-colors cursor-pointer ${
                    isActive
                      ? 'border-gold text-black'
                      : 'border-transparent text-black/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gold text-black font-space text-xs font-bold tracking-wider py-3 text-center transition w-full cursor-pointer"
            >
              GET IN TOUCH
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
