import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#e8eddf] text-[#242423] font-sans flex flex-col justify-between selection:bg-[#f5cb5c]/20 selection:text-[#242423] antialiased">
      <div>
        {/* Sticky Header Navigation */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Dynamic Page Stage with Elegant Staggered Animations */}
        <main className="pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Institutional Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
