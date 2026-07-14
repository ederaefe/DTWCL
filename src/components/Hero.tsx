import { ArrowRight, Globe, Shield, Users } from 'lucide-react';
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
    <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-8 md:pt-16 space-y-12">
      
      {/* Editorial Typographic Hero Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-12 border-b border-black/10">
        
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <h1 className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] md:leading-[1.1] text-black tracking-tight">
            Guiding those <br className="hidden md:inline" />
            <span className="italic font-normal text-black/95">Destined To Win</span> toward <br />
            academic &amp; career success.
          </h1>

          <p className="font-sans text-sm md:text-lg text-black/75 leading-relaxed max-w-2xl">
            DTW Consults is a highly credible educational and career advisory firm. We support students and career-minded professionals across Nigerian national systems (JAMB, WAEC, NECO) and global pathways (SAT, GMAT, IELTS, TOEFL, postgraduate admissions) with uncompromising depth.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-gold text-black font-space text-xs font-bold tracking-wider px-8 py-4 hover:bg-stone active:scale-95 btn-active-bounce transition duration-200 text-center uppercase cursor-pointer shadow-sm hover:shadow-md"
            >
              Get in Touch
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className="border border-black text-black font-space text-xs font-bold tracking-wider px-8 py-4 hover:bg-black hover:text-cream active:scale-95 btn-active-bounce transition duration-200 text-center uppercase cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Right column: Custom Image with HTB-Style Gradient Fading Mask & Bobbing Animation */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none animate-bob">
          <div className="relative group overflow-hidden border border-black/15 bg-stone rounded-xs p-1 shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* The Custom Hero Image */}
            <img 
              src="/assets/hero-leadership.jpg" 
              alt="DTW Consults Leadership and Global Career Advisory team" 
              className="w-full h-[280px] sm:h-[360px] md:h-[400px] object-cover filter grayscale opacity-90 transition-transform duration-700 hover:scale-105"
              width="500"
              height="400"
              loading="eager"
            />
            {/* 
              HTB STYLE FADING MASK:
              Gradient masks to blend image edges into our cream background.
            */}
            {/* Bottom Edge Fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream via-cream/40 to-transparent pointer-events-none" />
            {/* Top Edge Fade */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cream/20 to-transparent pointer-events-none" />
            {/* Side Borders Fades */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream/30 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream/30 to-transparent pointer-events-none" />
            
            {/* Premium Gold border highlight on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition duration-300 pointer-events-none" />
          </div>
          
          {/* Subtle caption overlay */}
          <div className="mt-3 text-right">
            <span className="font-space text-[9px] font-bold tracking-widest text-black/40 uppercase">
              DTW Executive Board &amp; Strategic Advisors
            </span>
          </div>
        </div>

      </div>

      {/* Services Preview Strip Section */}
      <div className="py-10 border-b border-black/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="font-space text-[10px] font-bold tracking-widest text-gold uppercase">
              CORE PRACTICE PATHWAYS
            </h2>
            <p className="font-fraunces text-xl text-black mt-1">
              Six balanced support vectors for academic &amp; career growth
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('services')}
            className="group inline-flex items-center gap-2 font-space text-xs font-bold tracking-wider text-black hover:text-gold transition uppercase cursor-pointer"
          >
            Detailed Syllabi <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>

        {/* 6-item horizontal preview strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {servicePreviews.map((service, idx) => (
            <div 
              key={idx} 
              className="border border-black/10 p-5 bg-stone/70 flex flex-col justify-between hover:border-gold hover:translate-y-[-4px] hover:shadow-xs transition-all duration-300 group cursor-pointer"
              onClick={() => {
                setCurrentPage('services');
              }}
            >
              <span className="font-fraunces text-xl text-black/30 font-medium group-hover:text-gold transition duration-200">
                0{idx + 1}
              </span>
              <p className="font-space text-[10px] font-bold tracking-wide text-black mt-6 group-hover:text-black uppercase leading-tight">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Institution Pillars Section */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        
        <div className="space-y-3 p-2 hover:translate-y-[-2px] transition-transform duration-200">
          <div className="h-10 w-10 flex items-center justify-center bg-gold/10 text-gold rounded-full">
            <Shield className="h-5 w-5" />
          </div>
          <h4 className="font-space text-xs font-bold tracking-wider text-black uppercase">
            UNCOMPROMISING HONESTY
          </h4>
          <p className="font-sans text-xs text-black/65 leading-relaxed">
            We provide realistic evaluations. We never claim guaranteed admissions or scholarships. We offer pure procedural expertise and rigorous study strategies.
          </p>
        </div>

        <div className="space-y-3 p-2 hover:translate-y-[-2px] transition-transform duration-200">
          <div className="h-10 w-10 flex items-center justify-center bg-gold/10 text-gold rounded-full">
            <Globe className="h-5 w-5" />
          </div>
          <h4 className="font-space text-xs font-bold tracking-wider text-black uppercase">
            LOCAL &amp; INTERNATIONAL PARITY
          </h4>
          <p className="font-sans text-xs text-black/65 leading-relaxed">
            We treat West African curricula and international entry grids with identical weight. Neither is a secondary focus; our advisors have proven masteries in both.
          </p>
        </div>

        <div className="space-y-3 p-2 hover:translate-y-[-2px] transition-transform duration-200">
          <div className="h-10 w-10 flex items-center justify-center bg-gold/10 text-gold rounded-full">
            <Users className="h-5 w-5" />
          </div>
          <h4 className="font-space text-xs font-bold tracking-wider text-black uppercase">
            SYSTEMIC GUIDANCE
          </h4>
          <p className="font-sans text-xs text-black/65 leading-relaxed">
            We operate like a classic advisory firm. We analyze your academic metrics, identify systemic bottlenecks, and co-design a personalized pathway to success.
          </p>
        </div>

      </div>

    </section>
  );
}
