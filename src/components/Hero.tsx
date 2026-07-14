import { ArrowRight, Award, Compass, Globe, Shield, Star, Users } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const servicePreviews = [
    "International Education Consulting",
    "Standardized Test Preparation",
    "Local Academic Support",
    "Postgraduate Consulting",
    "Career Development",
    "Tech Bootcamps",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12 md:pt-20">
      
      {/* Editorial Typographic Hero Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#242423]/10">
        
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#242423] tracking-tight">
            Guiding those <br className="hidden md:inline" />
            <span className="italic font-normal">Destined To Win</span> toward <br />
            academic & career success.
          </h1>

          <p className="font-sans text-base md:text-lg text-[#242423]/75 leading-relaxed max-w-2xl">
            DTW Consult is a highly credible educational and career advisory firm. We support students and career-minded professionals across Nigerian national systems (JAMB, WAEC, NECO) and global pathways (SAT, GMAT, IELTS, TOEFL, postgraduate admissions) with uncompromising depth.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#f5cb5c] text-[#242423] font-space text-sm font-bold tracking-wider px-8 py-4 hover:bg-[#cfdbd5] active:scale-98 transition duration-150 text-center uppercase"
            >
              Get in Touch
            </button>
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-[#242423] text-[#242423] font-space text-sm font-bold tracking-wider px-8 py-4 hover:bg-[#242423] hover:text-[#e8eddf] transition duration-150 text-center uppercase"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Right column: Typographic Grid Visual */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-[#242423]/15 p-6 md:p-8 bg-[#e8eddf] space-y-6 rounded-xs relative">
            {/* Elegant grid background decoration */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#242423_1px,transparent_1px),linear-gradient(to_bottom,#242423_1px,transparent_1px)] bg-[size:14px_24px]" />
            
            <h3 className="font-space text-xs font-bold tracking-widest text-[#242423]/50 uppercase relative z-10">
              OUR CORE PHILOSOPHY
            </h3>
            
            <div className="bg-[#cfdbd5] border border-[#242423]/10 p-6 md:p-8 relative z-10 shadow-sm">
              <div className="mb-4 text-xs text-[#f5cb5c] font-space font-bold tracking-wider uppercase">
                DTW Consult Credo
              </div>
              <div className="font-fraunces text-xl text-[#242423] leading-relaxed italic">
                “Destined To Win: We believe academic and career transitions are not matters of chance, but of deliberate preparation, uncompromising integrity, and precise institutional guidance.”
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Services Preview Strip Section */}
      <div className="py-12 border-b border-[#242423]/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="font-space text-[11px] font-bold tracking-widest text-[#f5cb5c] uppercase">
              CORE PRACTICE PATHWAYS
            </h2>
            <p className="font-fraunces text-xl text-[#242423] mt-1">
              Six balanced support vectors for academic & career growth
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 font-space text-xs font-bold tracking-wider text-[#242423] hover:text-[#f5cb5c] transition uppercase"
          >
            Detailed Syllabi <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6-item horizontal preview strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {servicePreviews.map((service, idx) => (
            <div 
              key={idx} 
              className="border border-[#242423]/10 p-5 bg-[#cfdbd5] flex flex-col justify-between hover:border-[#f5cb5c] transition-all group cursor-pointer"
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-fraunces text-xl text-[#242423]/30 font-medium group-hover:text-[#f5cb5c] transition">
                0{idx + 1}
              </span>
              <p className="font-space text-[11px] font-bold tracking-wide text-[#242423] mt-6 group-hover:text-[#242423] uppercase leading-tight">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Institution Pillars Section */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="space-y-3">
          <div className="h-10 w-10 flex items-center justify-center bg-[#D4A017]/10 text-[#D4A017] rounded-full">
            <Shield className="h-5 w-5" />
          </div>
          <h4 className="font-space text-xs font-bold tracking-wider text-[#1F1F1F] uppercase">
            UNCOMPROMISING HONESTY
          </h4>
          <p className="font-sans text-xs text-[#1F1F1F]/65 leading-relaxed">
            We provide realistic evaluations. We never claim guaranteed admissions or scholarships. We offer pure procedural expertise and rigorous study strategies.
          </p>
        </div>

        <div className="space-y-3">
          <div className="h-10 w-10 flex items-center justify-center bg-[#D4A017]/10 text-[#D4A017] rounded-full">
            <Globe className="h-5 w-5" />
          </div>
          <h4 className="font-space text-xs font-bold tracking-wider text-[#1F1F1F] uppercase">
            LOCAL & INTERNATIONAL PARITY
          </h4>
          <p className="font-sans text-xs text-[#1F1F1F]/65 leading-relaxed">
            We treat West African curricula and international entry grids with identical weight. Neither is a secondary focus; our advisors have proven masteries in both.
          </p>
        </div>

        <div className="space-y-3">
          <div className="h-10 w-10 flex items-center justify-center bg-[#D4A017]/10 text-[#D4A017] rounded-full">
            <Users className="h-5 w-5" />
          </div>
          <h4 className="font-space text-xs font-bold tracking-wider text-[#1F1F1F] uppercase">
            SYSTEMIC GUIDANCE
          </h4>
          <p className="font-sans text-xs text-[#1F1F1F]/65 leading-relaxed">
            We operate like a classic advisory firm. We analyze your academic metrics, identify systemic bottlenecks, and co-design a personalized pathway to success.
          </p>
        </div>

      </div>

    </section>
  );
}
