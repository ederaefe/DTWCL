import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="minimal-footer" className="bg-black text-cream pt-16 pb-12 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-10 border-b border-cream/10">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-3">
            <div className="font-fraunces text-xl md:text-2xl font-bold tracking-tight text-white">
              DTW Consult
            </div>
            <p className="font-sans text-xs text-cream/70 max-w-xs leading-relaxed">
              Academic & Career Consulting. Empowering students and professionals across Nigerian and international academic pathways.
            </p>
            <div className="font-space text-[10px] tracking-widest text-gold uppercase font-bold">
              Destined To Win
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3 md:col-span-1 md:justify-self-center">
            <h4 className="font-space text-xs font-bold tracking-wider text-gold uppercase">
              RESOURCES
            </h4>
            <div className="flex flex-col space-y-2 font-work text-xs text-cream/70">
              <button 
                onClick={() => handleNavClick('home')} 
                className="hover:text-gold transition text-left"
              >
                HOME
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className="hover:text-gold transition text-left"
              >
                SERVICES & CREDENTIALS
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="hover:text-gold transition text-left"
              >
                ABOUT OUR MISSION
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="hover:text-gold transition text-left"
              >
                CONTACT DESK
              </button>
            </div>
          </div>

          {/* Institutional Statement Column */}
          <div className="space-y-3">
            <h4 className="font-space text-xs font-bold tracking-wider text-cream uppercase">
              CREDIBILITY & ETHICS
            </h4>
            <p className="font-sans text-[11px] text-cream/50 leading-relaxed max-w-sm">
              DTW Consult operates with total honesty and transparency. We strictly do not provide academic short-cuts, grade manipulation, exam leaking, or guaranteed admissions. All results depend on real candidate diligence, structured advisory, and focused strategic planning.
            </p>
          </div>

        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] font-work text-cream/40 tracking-wider">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {currentYear} DTW CONSULT. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-cream/20">|</span>
            <span className="opacity-70">Lagos • Abuja • London</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 uppercase">
            <span>TERMS</span>
            <span>PRIVACY DECREE</span>
            <span>COMPLIANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
