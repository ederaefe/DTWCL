import { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Enforce page scrolling to top when switching tab views
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll animations observer logic (staggered delay for high satisfaction)
  useEffect(() => {
    // Strip visible classes so they trigger fresh on entering the page
    const allAnimated = document.querySelectorAll('.animate, .animate-left, .animate-right');
    allAnimated.forEach((el) => el.classList.remove('visible'));

    const timer = setTimeout(() => {
      // Target only elements in the active view container
      const activeElements = document.querySelectorAll(
        `#section-${currentPage} .animate, #section-${currentPage} .animate-left, #section-${currentPage} .animate-right`
      );

      if (activeElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
        );

        activeElements.forEach((el) => {
          observer.observe(el);
        });

        return () => {
          activeElements.forEach((el) => {
            observer.unobserve(el);
          });
        };
      } else {
        // Fallback
        allAnimated.forEach((el) => el.classList.add('visible'));
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-transparent text-black font-sans flex flex-col justify-between selection:bg-gold/20 selection:text-black antialiased relative">
      <div>
        {/* Sticky Header Navigation */}
        <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

        {/* 
          TECHNICAL SEO: Dynamic Page Stage using complete DOM presence.
          Instead of conditional component mounting which hides content from basic crawlers, 
          all sections are rendered simultaneously. Crawlers can index all header elements, 
          about descriptions, services tables, and forms in one pass.
        */}
        <main className="pb-12">
          {/* Hero Component Stage */}
          <div 
            className={currentPage === 'home' ? 'block' : 'hidden'} 
            aria-hidden={currentPage !== 'home'}
            id="section-home"
          >
            <Hero setCurrentPage={handlePageChange} />
          </div>

          {/* About Component Stage (Placed before Services in the DOM) */}
          <div 
            className={currentPage === 'about' ? 'block' : 'hidden'} 
            aria-hidden={currentPage !== 'about'}
            id="section-about"
          >
            <About />
          </div>

          {/* Services Component Stage */}
          <div 
            className={currentPage === 'services' ? 'block' : 'hidden'} 
            aria-hidden={currentPage !== 'services'}
            id="section-services"
          >
            <Services setCurrentPage={handlePageChange} />
          </div>

          {/* Contact Component Stage */}
          <div 
            className={currentPage === 'contact' ? 'block' : 'hidden'} 
            aria-hidden={currentPage !== 'contact'}
            id="section-contact"
          >
            <Contact />
          </div>
        </main>
      </div>

      {/* Institutional Footer */}
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}
