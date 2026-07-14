import { Page } from '../types';
import { useState } from 'react';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const [activePanel, setActivePanel] = useState<string | null>('mission');

  const togglePanel = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div>
      {/* ========== SECTION 1: HERO SECTION ========== */}
      <section className="hero" id="hero">
        <div className="container hero-content">
          
          {/* Left Column: Text Content */}
          <div className="hero-text animate-left">
            <span className="section-label">Academic &amp; Career Consults</span>
            <h1>
              <span>Guiding Candidates Toward Global </span>
              <span className="hero-highlight">Admissions</span>
              <span> &amp; Placement</span>
            </h1>
            <p>
              DTW Consults delivers professional academic advisory, standardized test preparation, and career transition consulting. We equip West African candidates to secure placements in competitive global universities and elite workspaces.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="btn btn-primary"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => setCurrentPage('services')} 
                className="btn btn-outline"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with Gold Offset Border */}
          <div className="hero-image animate-right">
            <img 
              src="/assets/hero-leadership.jpg" 
              alt="DTW Consults core leadership board and advisory team" 
              width="600" 
              height="400"
              loading="eager"
            />
          </div>

        </div>
      </section>

      {/* ========== SECTION 2: WHO WE ARE PREVIEW ========== */}
      <section className="section" id="about">
        <div className="container two-col">
          {/* Left Column: Image with Accent Dots */}
          <div className="two-col-image animate-left">
            <div className="accent-dot top-right"></div>
            <img 
              src="/assets/hero-leadership.jpg" 
              alt="DTW Consults team working on admissions roadmaps" 
              width="560" 
              height="420" 
              loading="lazy"
            />
            <div className="accent-dot bottom-left"></div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="animate-right">
            <span className="section-label">Who We Are</span>
            <h2>Direct Pathway Planning &amp; Mentorship</h2>
            <p>
              Under our advisory divisions, we coordinate candidate transcript audits, course equivalency translations, and admissions timelines. We manage local exam prep classes through our child company <strong>DTW Tutorials</strong>, ensuring candidates possess the qualifications for global entries.
            </p>
            <p>
              Our process is rooted in realistic diagnostics, collaborative timeline mapping, and measurable success. We do not offer shortcuts — we train you to win.
            </p>
            <button 
              onClick={() => setCurrentPage('about')} 
              className="btn btn-accent"
              style={{ marginTop: '1rem' }}
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: ACCORDION / FOUNDATION ========== */}
      <section className="section section-alt" id="history">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Our Principles</span>
            <h2>Mission, Vision &amp; Values</h2>
            <p>The core values that direct our candidate roadmaps and exam training processes.</p>
          </div>

          <div className="two-col">
            {/* Left: Graphic Placeholder Image */}
            <div className="animate-left">
              <img 
                src="/assets/hero-leadership.jpg" 
                alt="DTW Consults institutional foundation" 
                width="560" 
                height="380" 
                loading="lazy" 
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>

            {/* Right: Collapsible Accordion */}
            <div className="accordion animate-right" id="accordion">
              {/* Mission */}
              <div className={`accordion-item ${activePanel === 'mission' ? 'active' : ''}`}>
                <button 
                  className="accordion-header focus:outline-hidden"
                  onClick={() => togglePanel('mission')}
                  aria-expanded={activePanel === 'mission'}
                >
                  <span>🎯 Our Mission</span>
                  <span className="accordion-icon">▼</span>
                </button>
                <div className="accordion-body">
                  <p>
                    <strong>To empower candidates</strong> with academic clarity, global advisory, and structured preparation pathways that drive sustainable career growth, international parity, and lasting placement success.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className={`accordion-item ${activePanel === 'vision' ? 'active' : ''}`}>
                <button 
                  className="accordion-header focus:outline-hidden"
                  onClick={() => togglePanel('vision')}
                  aria-expanded={activePanel === 'vision'}
                >
                  <span>🔭 Our Vision</span>
                  <span className="accordion-icon">▼</span>
                </button>
                <div className="accordion-body">
                  <p>
                    <strong>To be the most trusted</strong> educational and career advisory bridge between West Africa and global institutions — renowned for academic integrity, standardized preparation, and transparent, merit-based admissions.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className={`accordion-item ${activePanel === 'values' ? 'active' : ''}`}>
                <button 
                  className="accordion-header focus:outline-hidden"
                  onClick={() => togglePanel('values')}
                  aria-expanded={activePanel === 'values'}
                >
                  <span>💎 Our Values</span>
                  <span className="accordion-icon">▼</span>
                </button>
                <div className="accordion-body">
                  <p>
                    <strong>Integrity, Excellence, Collaboration, and Client-Centricity.</strong> These standards guide every timeline we outline, every document we evaluate, and every candidate we advise.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== SECTION 4: TEAM MEMBERS GRID ========== */}
      <section className="section" id="team">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Advisory Board</span>
            <h2>Meet the Advisors Behind DTW</h2>
            <p>Diverse pedagogical expertise united by a shared commitment to student success.</p>
          </div>

          <div className="team-grid max-w-4xl mx-auto">
            {/* Advisor 1 */}
            <div className="team-card animate">
              <div className="team-avatar">BC</div>
              <h5>Blessing Seun Chukwuka</h5>
              <p className="role">Founder, CEO &amp; Lead Consultant</p>
              <p className="font-sans text-xs text-black/60 mt-4 leading-relaxed">
                Blessing is an educational pioneer who has guided thousands of West African candidates toward career success. As the founder of the DTW brand, she oversees global partnerships, international admissions advising, and strategic curriculum direction for our child company platforms.
              </p>
            </div>

            {/* Advisor 2 */}
            <div className="team-card animate">
              <div className="team-avatar">VU</div>
              <h5>Victor Uyanna</h5>
              <p className="role">Head of Academic Programs</p>
              <p className="font-sans text-xs text-black/60 mt-4 leading-relaxed">
                Victor directs the pedagogical design of the test prep structures. He maps exam trends for WAEC, JAMB, GMAT, and SAT, and coordinates online academic operations across West Africa to maintain our high success metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: CTA BANNER ========== */}
      <section className="cta-section" id="cta">
        <div className="container animate">
          <h2>Ready to Build Your Strategic Roadmap?</h2>
          <p>
            Get your first diagnostic profile review. No obligations — just clear, transparent guidance tailored to your goals.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')} 
            className="btn btn-primary"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
