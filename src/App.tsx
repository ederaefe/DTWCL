import { useState } from 'react';
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
            className={currentPage === 'home' ? 'block animate-fade-in' : 'hidden'}
            aria-hidden={currentPage !== 'home'}
            id="section-home"
          >
            <Hero setCurrentPage={handlePageChange} />
          </div>

          {/* About Component Stage (Placed before Services in the DOM) */}
          <div
            className={currentPage === 'about' ? 'block animate-fade-in' : 'hidden'}
            aria-hidden={currentPage !== 'about'}
            id="section-about"
          >
            <About />
          </div>

          {/* Services Component Stage */}
          <div
            className={currentPage === 'services' ? 'block animate-fade-in' : 'hidden'}
            aria-hidden={currentPage !== 'services'}
            id="section-services"
          >
            <Services setCurrentPage={handlePageChange} />
          </div>

          {/* Contact Component Stage */}
          <div
            className={currentPage === 'contact' ? 'block animate-fade-in' : 'hidden'}
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
