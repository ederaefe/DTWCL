import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'HOME', value: 'home' },
    { label: 'SERVICES', value: 'services' },
    { label: 'ABOUT', value: 'about' },
    { label: 'CONTACT', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="sticky-header" className="sticky top-0 z-40 w-full border-b border-[#242423]/10 bg-[#e8eddf]/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-12">
        
        {/* Brand Wordmark (Fraunces Serif) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5cb5c]/50 rounded px-1"
        >
          <span className="font-fraunces text-xl md:text-2xl font-bold tracking-tight text-[#242423]">
            DTW Consult
          </span>
          <span className="font-space text-[9px] tracking-widest text-[#f5cb5c] uppercase mt-0.5">
            Destined To Win
          </span>
        </button>

        {/* Desktop Navigation Menu (Work Sans) */}
        <nav className="hidden md:flex items-center space-x-8 font-work text-xs font-semibold tracking-wider text-[#242423]">
          {navItems.map((item) => {
            const isActive = currentPage === item.value;
            return (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`relative py-2 transition-colors duration-200 hover:text-[#f5cb5c] focus:outline-none focus-visible:text-[#f5cb5c] ${
                  isActive ? 'text-[#242423]' : 'text-[#242423]/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#f5cb5c]" />
                )}
              </button>
            );
          })}
          
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#f5cb5c] text-[#242423] font-space text-xs font-bold tracking-wider px-4 py-2 hover:bg-[#cfdbd5] active:scale-98 transition duration-150"
          >
            GET IN TOUCH
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#242423] md:hidden hover:text-[#f5cb5c] transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-[#242423]/10 bg-[#e8eddf] animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6 py-6 font-work text-sm font-semibold tracking-widest text-[#242423]">
            {navItems.map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left py-2 border-l-2 pl-3 transition-colors ${
                    isActive
                      ? 'border-[#f5cb5c] text-[#242423]'
                      : 'border-transparent text-[#242423]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#f5cb5c] text-[#242423] font-space text-xs font-bold tracking-wider py-3 text-center transition w-full"
            >
              GET IN TOUCH
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
