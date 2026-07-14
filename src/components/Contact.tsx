import React, { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'International Education Consulting',
    curriculum: 'Both Local & International',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/mzdnzael", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'International Education Consulting',
          curriculum: 'Both Local & International',
          notes: ''
        });
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header animate">
          <span className="section-label">Contact Desk</span>
          <h2>Get in Touch with our Advisors</h2>
          <p>Chart your transition path. Submit details to our intake registry for baseline diagnostics.</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Contact details & Map */}
          <div className="contact-info animate-left">
            <h3 className="mb-6 font-semibold">Administrative Office</h3>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Lagos Headquarters</h4>
                <p>
                  The Black Building,<br />
                  111/113 Ago Palace Way (before Market Square),<br />
                  Okota, Lagos State, Nigeria
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <h4>Email Inquiries</h4>
                <p>
                  dtwconsultng@gmail.com<br />
                  dtwtutorialsng@gmail.com
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h4>Telephone Directory</h4>
                <p>
                  +234 908 509 9582<br />
                  +234 803 873 2879
                </p>
              </div>
            </div>

            {/* Google Maps Location Embedding */}
            <div style={{ marginTop: '32px' }}>
              <h4 style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '12px' }}>
                Office Location Map
              </h4>
              <div style={{ border: '1px solid var(--border)', padding: '4px', background: 'var(--surface)', borderRadius: 'var(--radius-sm)' }}>
                <iframe 
                  title="DTW Consults Lagos Office Location Map"
                  src="https://maps.google.com/maps?q=Market%20Square,%20Ago%20Palace%20Way,%20Okota,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="220" 
                  className="map-frame"
                  style={{ border: 0, borderRadius: '0px' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center', marginTop: '8px' }}>
                (Our office is situated in the black building right before Market Square)
              </p>
            </div>

          </div>

          {/* Right Column: Secure Formspree Intake Form */}
          <div className="animate-right">
            <div className="form-card">
              
              <h3 className="mb-4 text-black">Intake &amp; Diagnostic Registry</h3>
              
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }} className="animate">
                  <div style={{ fontSize: '3rem', color: 'var(--primary-dark)', marginBottom: '16px' }}>✓</div>
                  <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '1px' }}>
                    Submission Verified
                  </h4>
                  <p className="mt-4 font-sans text-sm text-black/75">
                    Your baseline details have been securely logged in our transition registry. A DTW Senior Advisor will email you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6"
                    style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-dark)', textTransform: 'uppercase', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Log Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="form-group">
                    <label htmlFor="name">Candidate Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Chinedu Okafor"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Secure Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="candidate@domain.com"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Contact Telephone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 908 509 9582"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Primary Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ cursor: 'pointer' }}
                    >
                      <option>International Education Consulting</option>
                      <option>Standardized Test Preparation</option>
                      <option>Local Academic Support (JAMB/WAEC/NECO)</option>
                      <option>Postgraduate Consulting</option>
                      <option>Career Development</option>
                      <option>Tech Bootcamps &amp; Advisory</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="curriculum">Academic Curriculum Target</label>
                    <select
                      id="curriculum"
                      name="curriculum"
                      value={formData.curriculum}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ cursor: 'pointer' }}
                    >
                      <option>Both Local &amp; International</option>
                      <option>International Only (US/UK/Canada matriculation)</option>
                      <option>Local West African Only (JAMB/WAEC/NECO pathways)</option>
                      <option>Corporate Career Transition Only</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Statement of Academic / Career Objective</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Describe any current standardized scores, targeted universities, or intended career pivots..."
                      className="form-control"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <div style={{ paddingTop: '8px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      {isSubmitting ? "Submitting to Registry..." : "Submit to Intake Registry"}
                    </button>
                    {submitError && (
                      <div style={{ color: '#e53e3e', fontSize: '0.75rem', textAlign: 'center', marginTop: '12px', fontWeight: '600' }}>
                        {submitError}
                      </div>
                    )}
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
