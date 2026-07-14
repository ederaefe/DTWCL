import { useState } from 'react';
import { ChevronDown, GraduationCap, Laptop, ShieldCheck, Youtube, ExternalLink } from 'lucide-react';

export default function About() {
  // Accordion state to toggle Mission, Vision, and Values panels
  const [activePanel, setActivePanel] = useState<string | null>('mission');

  const togglePanel = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const coreValues = [
    {
      title: "Uncompromising Integrity",
      description: "We provide realistic, honest assessments of candidate portfolios. We reject false admission claims, focusing strictly on merit and rigorous preparation."
    },
    {
      title: "Academic Rigor",
      description: "We deliver deep, detailed test preparation and advisory resources. Our methods are built on proven performance strategies, not shortcuts."
    },
    {
      title: "Global Parity",
      description: "We treat national systems (WAEC, JAMB) and international matrices (SAT, GMAT, GCE) with equal importance, ensuring no candidate is restricted by regional boundaries."
    },
    {
      title: "Student-Centricity",
      description: "Every pathway we design is calibrated around the student's unique academic, financial, and geographic reality, prioritizing their true growth."
    },
    {
      title: "Procedural Clarity",
      description: "We remove the confusion from transitions, detailing every application step, visa protocol, and course conversion requirement with absolute transparency."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12 md:pt-20 space-y-16">
      
      {/* Header Block */}
      <div className="pb-12 border-b border-black/10 space-y-4">
        <div className="text-xs font-mono tracking-widest text-gold uppercase">
          WHO WE ARE &amp; HOW WE PLAN
        </div>
        <h1 className="font-fraunces text-4xl sm:text-5xl font-normal text-black tracking-tight">
          About DTW Consults
        </h1>
      </div>

      {/* Main Core Identity & Accordion Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-black/10 items-start">
        
        {/* Left Column: Parent Brand Content */}
        <div className="lg:col-span-6 space-y-6 font-sans text-sm md:text-base text-black/80 leading-relaxed">
          <p className="text-black font-semibold text-lg">
            DTW Consults (Destined To Win) is a premier educational advisory and strategic transition firm.
          </p>
          <p>
            We specialize in bridging local talent with global opportunities. Our professional services enable West African secondary students, graduates, and corporate professionals to achieve placements in competitive academic institutions and global workspaces.
          </p>
          <p>
            Whether navigating international boardrooms, converting academic transcripts for European admissions, or preparing candidates for high-stakes standardised tests, our processes remain objective, metrics-driven, and completely transparent.
          </p>
          <p>
            Under the guidance of our leadership team, we manage candidate evaluations, map strategic milestone timelines, and oversee university placements across the UK, USA, Canada, and Europe.
          </p>
        </div>

        {/* Right Column: Collapsible Accordion (UI Layout Ported from firconsulting.com) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="accordion">
            
            {/* Panel 1: Mission */}
            <div className={`accordion-item ${activePanel === 'mission' ? 'active' : ''}`}>
              <button 
                onClick={() => togglePanel('mission')}
                className="accordion-header"
                aria-expanded={activePanel === 'mission'}
              >
                <span>🎯 Our Mission</span>
                <ChevronDown className="accordion-icon h-5 w-5" />
              </button>
              <div className="accordion-body">
                <p className="pt-2 text-sm text-black/75">
                  <strong>To empower students and professionals</strong> with academic clarity, global advisory, and structured preparation pathways that drive sustainable career growth, international parity, and lasting placement success.
                </p>
              </div>
            </div>

            {/* Panel 2: Vision */}
            <div className={`accordion-item ${activePanel === 'vision' ? 'active' : ''}`}>
              <button 
                onClick={() => togglePanel('vision')}
                className="accordion-header"
                aria-expanded={activePanel === 'vision'}
              >
                <span>🔭 Our Vision</span>
                <ChevronDown className="accordion-icon h-5 w-5" />
              </button>
              <div className="accordion-body">
                <p className="pt-2 text-sm text-black/75">
                  <strong>To be the most trusted educational and career advisory bridge</strong> between West Africa and global institutions — renowned for academic integrity, standardized preparation, and transparent, merit-based admissions.
                </p>
              </div>
            </div>

            {/* Panel 3: Values */}
            <div className={`accordion-item ${activePanel === 'values' ? 'active' : ''}`}>
              <button 
                onClick={() => togglePanel('values')}
                className="accordion-header"
                aria-expanded={activePanel === 'values'}
              >
                <span>💎 Our Core Values</span>
                <ChevronDown className="accordion-icon h-5 w-5" />
              </button>
              <div className="accordion-body">
                <p className="pt-2 text-sm text-black/75">
                  <strong>Integrity, Academic Rigor, Global Parity, Uncompromising Transparency, and Student-Centric Mentorship.</strong> These standards guide every timeline we outline, every document we evaluate, and every candidate we advise.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* DTW Tutorials - Child Company Segment */}
      <div className="py-16 border-b border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Context Image with HTB mask style */}
        <div className="lg:col-span-5 relative order-last lg:order-first">
          <div className="relative border border-black/10 bg-stone p-2 rounded-xs">
            {/* Inner info display card representing the software store */}
            <div className="bg-cream border border-black/10 p-6 md:p-8 space-y-6">
              <span className="font-space text-[10px] font-bold tracking-widest text-gold uppercase block">
                CHILD COMPANY PLATFORM
              </span>
              <h4 className="font-fraunces text-2xl font-normal text-black italic">
                DTW Tutorials Store
              </h4>
              <p className="font-sans text-xs text-black/70 leading-relaxed">
                Purchase WAEC syllabus guides, JAMB UTME practice software, and results check cards directly at our e-commerce portal:
              </p>
              <a 
                href="https://www.dtwedustore.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-space text-xs font-bold tracking-widest text-black hover:text-gold uppercase"
              >
                Visit dtwedustore.com <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            {/* Overlapping small grid background decoration */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#242423_1px,transparent_1px),linear-gradient(to_bottom,#242423_1px,transparent_1px)] bg-[size:10px_20px]" />
          </div>
        </div>

        {/* Right Column: Historic Background Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono tracking-widest text-gold uppercase">
            FOUNDATION &amp; LOCAL IMPACT
          </div>
          <h2 className="font-fraunces text-3xl md:text-4xl font-normal text-black tracking-tight">
            DTW Tutorials — Our Foundations
          </h2>
          <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed">
            Before DTW Consults expanded into global career transitions and GMAT/GRE international advisory, we founded <strong>DTW Tutorials</strong>. Operating as our specialized child company, DTW Tutorials addresses the critical need for high-quality, free secondary education and test preparation within Nigeria and West Africa.
          </p>
          <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed">
            Founded by <strong>Blessing Seun Chukwuka</strong>, the DTW Tutorials YouTube initiative has grown to support over <strong>200,000+ students</strong>. We deliver free step-by-step Math and Physics video tutorials, WAEC prep classes, JAMB mock tests, and post-UTME syllabus guides. 
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="border border-black/10 p-4 bg-stone/40 rounded-xs flex items-start gap-3">
              <Youtube className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="font-space text-xs font-bold text-black uppercase">200k+ YouTube</h5>
                <p className="font-sans text-[11px] text-black/60 mt-1">Free Math &amp; Physics video tutorials.</p>
              </div>
            </div>
            <div className="border border-black/10 p-4 bg-stone/40 rounded-xs flex items-start gap-3">
              <Laptop className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="font-space text-xs font-bold text-black uppercase">CBT Practice</h5>
                <p className="font-sans text-[11px] text-black/60 mt-1">Interactive offline prep software.</p>
              </div>
            </div>
            <div className="border border-black/10 p-4 bg-stone/40 rounded-xs flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="font-space text-xs font-bold text-black uppercase">Local Entry</h5>
                <p className="font-sans text-[11px] text-black/60 mt-1">Comprehensive JAMB, WAEC &amp; NECO prep.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Leadership / Founders Grid (UI Adapted from firconsulting.com) */}
      <div className="py-16">
        <div className="mb-12 space-y-2">
          <h2 className="font-space text-xs font-bold tracking-widest text-gold uppercase">
            OUR STRATEGIC LEADERSHIP
          </h2>
          <p className="font-fraunces text-2xl md:text-3xl text-black">
            The Advisors Behind DTW Consults
          </p>
        </div>

        {/* 2-Column Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          
          {/* Founder: Blessing Seun Chukwuka */}
          <div className="border border-black/10 p-8 bg-stone rounded-xs space-y-6 hover:border-gold transition-all duration-300 shadow-sm relative group">
            <div className="flex items-center gap-6">
              {/* Initials Avatar Card */}
              <div className="w-16 h-16 rounded-full bg-cream border-2 border-gold flex items-center justify-center font-space text-xl font-bold text-black shrink-0 shadow-inner group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                BC
              </div>
              <div>
                <h3 className="font-fraunces text-2xl font-normal text-black leading-tight">
                  Blessing Seun Chukwuka
                </h3>
                <span className="font-space text-xs font-bold tracking-wider text-black/45 uppercase block mt-1">
                  Founder, CEO &amp; Lead Consultant
                </span>
              </div>
            </div>
            <p className="font-sans text-xs md:text-sm text-black/70 leading-relaxed pt-2">
              Blessing is an educational pioneer who has guided thousands of West African candidates toward career success. As the founder of the DTW brand, she oversees global partnerships, international admissions advising, and strategic curriculum direction for our child company platforms.
            </p>
          </div>

          {/* Member 2: Victor Uyanna */}
          <div className="border border-black/10 p-8 bg-stone rounded-xs space-y-6 hover:border-gold transition-all duration-300 shadow-sm relative group">
            <div className="flex items-center gap-6">
              {/* Initials Avatar Card */}
              <div className="w-16 h-16 rounded-full bg-cream border-2 border-gold flex items-center justify-center font-space text-xl font-bold text-black shrink-0 shadow-inner group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                VU
              </div>
              <div>
                <h3 className="font-fraunces text-2xl font-normal text-black leading-tight">
                  Victor Uyanna
                </h3>
                <span className="font-space text-xs font-bold tracking-wider text-black/45 uppercase block mt-1">
                  Head of Academic Programs
                </span>
              </div>
            </div>
            <p className="font-sans text-xs md:text-sm text-black/70 leading-relaxed pt-2">
              Victor directs the pedagogical design of the test prep structures. He oversees our writing team, maps exam trends for WAEC, JAMB, GMAT, and SAT, and coordinates online academic operations across West Africa to maintain our high success metrics.
            </p>
          </div>

        </div>
      </div>

      {/* Brand Pillars Section */}
      <div className="py-16">
        <div className="mb-12 space-y-2">
          <h2 className="font-space text-xs font-bold tracking-widest text-gold uppercase">
            OUR PRACTICE VECTORS
          </h2>
          <p className="font-fraunces text-2xl md:text-3xl text-black">
            Five Pillars of Uncompromising Consult Practice
          </p>
        </div>

        {/* List of Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((value, idx) => (
            <div 
              key={idx} 
              className="border border-black/10 p-6 bg-stone space-y-4 hover:border-gold transition duration-200 shadow-xs"
            >
              <div className="font-fraunces text-lg font-bold text-black/35 select-none">
                0{idx + 1}
              </div>
              <h3 className="font-space text-xs font-bold tracking-wider text-black uppercase">
                {value.title}
              </h3>
              <p className="font-sans text-xs text-black/60 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
