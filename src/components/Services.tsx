import { Page } from '../types';

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const servicesList = [
    {
      num: "01",
      title: "International Education Consulting",
      meta: "Global Undergraduate Admissions",
      desc: "Our advisors evaluate candidate transcripts, match academic profiles to fitting institutions in the UK, US, Canada, and Europe, and lead families step-by-step through application pipelines."
    },
    {
      num: "02",
      title: "Standardized Test Preparation",
      meta: "SAT / GMAT / IELTS / TOEFL Prep",
      desc: "We deliver structured test strategies, review core math/verbal content, and host monitored mock examinations to build test-taking confidence under strict academic standards."
    },
    {
      num: "03",
      title: "Local Academic Support",
      meta: "JAMB / WAEC / NECO Preparations",
      desc: "Through our child company DTW Tutorials, we provide mock exams, syllabus guides, and classes to ensure local candidates excel in high-stakes West African national exams."
    },
    {
      num: "04",
      title: "Postgraduate Consulting",
      meta: "MBA / MSc / PhD Pathway Strategy",
      desc: "We collaborate with academic and corporate professionals to plan and compile postgraduate profiles. Includes SOP critique workshops, CV rebuilds, and transcript credential evaluation audits (WES)."
    },
    {
      num: "05",
      title: "Career Development & Advisory",
      meta: "Corporate Mentorship & Recruiting",
      desc: "We provide career counseling, mock behavioral interviews, and LinkedIn positioning strategies for professionals transitioning to global remote jobs or local executive roles."
    },
    {
      num: "06",
      title: "Tech Bootcamps & Literacy",
      meta: "Digital Engineering & Analytics",
      desc: "Intensive training bootcamps in data analytics, SQL/Python query basics, and product design (UI/UX) to build digital literacy portfolios for modern workspaces."
    }
  ];

  return (
    <main>
      {/* ========== SERVICES GRID SECTION ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Our Expertise</span>
            <h2>Consulting Pathways &amp; Scope</h2>
            <p>Objective, metrics-driven academic prep and career advisory services.</p>
          </div>

          <div className="services-grid">
            {servicesList.map((service, idx) => (
              <div 
                key={idx} 
                className="service-card animate"
                onClick={() => setCurrentPage('contact')}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-content">
                  <div className="service-num">{service.num}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <div className="service-meta">
                  {service.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONVERSION DATA TABLE ========== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header animate">
            <span className="section-label">Academic Equivalencies</span>
            <h2>Conversion Reference Grid</h2>
            <p>How local matriculations map to international targets under our pathway advisements.</p>
          </div>

          <div className="data-table-container animate">
            <table className="data-table">
              <thead>
                <tr>
                  <th>West African Standard</th>
                  <th>International Target</th>
                  <th>Preparatory Preparations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>JAMB UTME Score</strong></td>
                  <td>SAT / ACT Score Equivalence</td>
                  <td>Weekly quantitative workshops, prep classes, and simulated mock exams.</td>
                </tr>
                <tr>
                  <td><strong>WAEC / NECO Results</strong></td>
                  <td>A-Level / AP Placements</td>
                  <td>STEM curriculum bridge classes focusing on core Physics, Chemistry, and Math.</td>
                </tr>
                <tr>
                  <td><strong>Local BSc / BA Degree</strong></td>
                  <td>WES / ECE Credential Validation</td>
                  <td>Transcript translation reviews, syllabus matching, and SOP formatting advisory.</td>
                </tr>
                <tr>
                  <td><strong>Local Job Experience</strong></td>
                  <td>Global Remote &amp; Tech Hiring Grid</td>
                  <td>LinkedIn optimization workshops, mock recruiting interviews, and CV rebuilds.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== SERVICES CTA BLOCK ========== */}
      <section className="cta-section" id="cta">
        <div className="container animate">
          <h2>Ready to Plan Your Academic Journey?</h2>
          <p>
            Contact our advisors today for a detailed diagnostic baseline review. Get transparent guidance and a roadmap built for your success.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')} 
            className="btn btn-primary"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

    </main>
  );
}
