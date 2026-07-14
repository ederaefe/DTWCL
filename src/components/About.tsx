export default function About() {
  const valuesList = [
    {
      icon: "🔍",
      title: "Uncompromising Integrity",
      desc: "We provide realistic, honest assessments of candidate portfolios. We reject false admission claims, focusing strictly on merit and preparation."
    },
    {
      icon: "🎯",
      title: "Academic Rigor",
      desc: "We deliver deep, detailed test preparation and advisory resources. Our methods are built on proven performance, not shortcuts."
    },
    {
      icon: "🤝",
      title: "Collaborative Timelines",
      desc: "We work directly with candidates and parents to design application milestones, coordinate documents, and manage submission deadlines."
    },
    {
      icon: "💡",
      title: "Adaptive Preparation",
      desc: "We integrate classroom teaching with offline CBT software simulations, adapting standard lessons to active exam conditions."
    },
    {
      icon: "👥",
      title: "Candidate-Centricity",
      desc: "Every pathway we design is calibrated around the student's unique academic, financial, and geographic reality, prioritizing their true growth."
    }
  ];

  const whyFeatures = [
    {
      title: "Combined Advisory Experience",
      desc: "Our advisors bring deep knowledge of university requirements, exam structures, and credential conversions."
    },
    {
      title: "Tailored Academic Pathways",
      desc: "No general roadmaps. We design preparation and admissions schedules centered around your specific target institutions."
    },
    {
      title: "Verifiable Performance Results",
      desc: "A proven track record of student score improvements in SAT, GMAT, and WAEC, leading to competitive acceptances."
    },
    {
      title: "Dual Local & Global Competence",
      desc: "We provide expert support in West African secondary exams and global postgraduate admissions under one firm."
    }
  ];

  const partnersList = [
    {
      title: "DTW Tutorials Platform",
      desc: "Free STEM video lectures and syllabus guides supporting over 200,000+ students."
    },
    {
      title: "DTW EduStore",
      desc: "Secure e-commerce portal providing WAEC/NECO books and software access."
    },
    {
      title: "Offline CBT Software",
      desc: "Interactive mock software simulating JAMB and national computer-based testing."
    },
    {
      title: "YouTube Academic Channel",
      desc: "Step-by-step Math and Physics video tutorials for secondary school pupils."
    }
  ];

  return (
    <main>
      {/* ========== SECTION 1: ABOUT HERO ========== */}
      <section className="hero about-hero">
        <div className="container">
          <div className="hero-content animate">
            <span className="section-label">Our Story</span>
            <h1 className="hero-title">
              <span>A Team Committed to Your </span>
              <span className="hero-highlight">Academic Success</span>
            </h1>
            <p className="hero-desc">
              We don't just advise — we partner with you to execute. Navigating WAEC/JAMB, SAT/GMAT, and global admissions.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: OUR STORY ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Milestones</span>
            <h2>From Local Classrooms to Global Placements</h2>
            <p>How we turned years of classroom teaching into a comprehensive advisory firm.</p>
          </div>

          <div className="two-col">
            {/* Left Column: Image */}
            <div className="col animate-left">
              <img 
                src="/assets/hero-leadership.jpg" 
                alt="DTW Consults educational advisory journey" 
                className="rounded-image"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>

            {/* Right Column: Narrative & Stats */}
            <div className="col animate-right">
              <p>
                DTW Consults was founded to address a critical gap between raw academic prep and global admission pathways. What started as a dedicated YouTube tutorial channel has grown into a trusted partner for candidates across West Africa.
              </p>
              <p>
                Today, we combine classroom teaching with strategic advisory. We help students transition from local secondary mock settings to global university placements in the UK, US, and Europe.
              </p>
              
              <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
                <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-dark)' }}>200k+</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>Subscribers</div>
                </div>
                <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-dark)' }}>20k+</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>CBT Installs</div>
                </div>
                <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-dark)' }}>95%</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: OUR VALUES ========== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Our Values</span>
            <h2>What We Stand For</h2>
            <p>The principles that guide every candidate roadmap we map and class we direct.</p>
          </div>

          <div className="values-grid animate" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {valuesList.map((val, idx) => (
              <div 
                key={idx} 
                className="value-card"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-sm)', transition: 'all var(--transition)' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--secondary)' }}>{val.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: WHY CHOOSE US ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Why Choose Us</span>
            <h2>What Sets Us Apart</h2>
            <p>We do not just offer admissions advice — we build authentic academic performance.</p>
          </div>

          <div className="two-col reverse">
            {/* Left Column: List of Features */}
            <div className="col animate">
              <div className="why-features" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {whyFeatures.map((feat, idx) => (
                  <div key={idx} className="why-feature" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary-dark)', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', color: 'var(--secondary)', marginBottom: '4px' }}>{feat.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col animate">
              <img 
                src="/assets/hero-leadership.jpg" 
                alt="Why Choose DTW Consults" 
                className="rounded-image"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: PARTNERSHIPS ========== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Our Partnerships</span>
            <h2>Trusted Education Portals</h2>
            <p>We work in alignment with top prep programs to deliver complete support.</p>
          </div>

          <div className="partners-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {partnersList.map((partner, idx) => (
              <div 
                key={idx} 
                className="partner-card animate"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'center', transition: 'all var(--transition)' }}
              >
                <div style={{ width: '60px', height: '60px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--secondary)' }}>{partner.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
