import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <footer id="minimal-footer" className="bg-black text-cream pt-16 pb-12 mt-20 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start pb-10 border-b border-cream/10">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-3 sm:col-span-2">
            <div className="font-fraunces text-xl md:text-2xl font-bold tracking-tight text-white">
              DTW Consults
            </div>
            <p className="font-sans text-xs text-cream/70 max-w-sm leading-relaxed">
              Academic &amp; Career Consulting. Empowering West African students and professionals across local matriculations and international university pathways.
            </p>
            <div className="font-space text-[10px] tracking-widest text-gold uppercase font-bold">
              Destined To Win
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-space text-xs font-bold tracking-wider text-gold uppercase">
              RESOURCES &amp; PORTALS
            </h4>
            <div className="flex flex-col space-y-2 font-work text-xs text-cream/70">
              <button 
                onClick={() => handleNavClick('home')} 
                className="hover:text-gold transition text-left cursor-pointer"
              >
                HOME
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="hover:text-gold transition text-left cursor-pointer"
              >
                ABOUT OUR MISSION
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className="hover:text-gold transition text-left cursor-pointer"
              >
                SERVICES MATRIX
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="hover:text-gold transition text-left cursor-pointer"
              >
                CONTACT DESK
              </button>
              <a 
                href="https://www.dtwedustore.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gold transition text-left uppercase"
              >
                DTW EduStore
              </a>
              <a 
                href="https://www.youtube.com/dtwtutorials" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gold transition text-left uppercase"
              >
                YouTube Classes
              </a>
            </div>
          </div>

          {/* Institutional Statement Column */}
          <div className="space-y-3">
            <h4 className="font-space text-xs font-bold tracking-wider text-cream uppercase">
              CREDIBILITY &amp; ETHICS
            </h4>
            <p className="font-sans text-[11px] text-cream/50 leading-relaxed max-w-sm">
              DTW Consults operates with total honesty and transparency. We strictly do not provide academic shortcuts, grade manipulation, exam leaking, or guaranteed admissions. All results depend on candidate diligence, structured advisory, and focused strategic planning.
            </p>
          </div>

        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] font-work text-cream/40 tracking-wider">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {currentYear} DTW CONSULTS. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-cream/20">|</span>
            <span className="opacity-70">Lagos • Abuja • London</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 uppercase">
            <span>TERMS</span>
            <span>PRIVACY POLICY</span>
            <span>COMPLIANCE</span>
          </div>
        </div>
      </div>

      {/* 
        WHATSAPP FLOATING WIDGET:
        Fixed helper button (+234 908 509 9582) featuring 
        constant shadow pulse and active hover zoom effects.
      */}
      <a 
        href="https://wa.me/2349085099582" 
        target="_blank" 
        rel="noopener noreferrer"
        className="animate-pulse-glow fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group hover:shadow-2xl cursor-pointer"
        aria-label="Chat with DTW Consults on WhatsApp"
      >
        <svg 
          className="w-7 h-7 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.402.002 9.792-4.382 9.795-9.786.002-2.593-1.01-5.033-2.85-6.875C16.326 2.1 13.89 1.089 11.296 1.088 5.892 1.088 1.5 5.472 1.497 10.877c-.002 1.743.46 3.447 1.336 4.965L1.87 20.25l4.777-1.096zM17.471 14.77c-.313-.156-1.848-.912-2.126-1.013-.278-.1-.482-.15-.683.15-.201.3-.778.98-.953 1.18-.175.201-.35.226-.663.07-1.32-.656-2.182-1.162-3.045-2.637-.228-.39.227-.362.65-.1.378-.26.425-.3.61-.43.185-.13.092-.26.046-.36-.046-.1-.48-1.155-.658-1.58-.173-.418-.347-.36-.48-.36h-.414c-.143 0-.376.054-.572.27-.196.216-.749.732-.749 1.786 0 1.055.767 2.073.874 2.22.107.149 1.51 2.3 3.66 3.228 1.258.544 1.864.646 2.527.546.702-.106 1.848-.756 2.11-.1.263-.655.263-1.22.185-1.32-.078-.1-.286-.156-.6-.312z" />
        </svg>
      </a>
    </footer>
  );
}
