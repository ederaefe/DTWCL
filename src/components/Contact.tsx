import React, { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck, Clock, Check } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12 md:pt-20">
      
      {/* Header Grid */}
      <div className="pb-12 border-b border-[#242423]/10 space-y-4">
        <div className="text-xs font-mono tracking-widest text-[#f5cb5c] uppercase">
          SECURE CLIENT INTAKE
        </div>
        <h1 className="font-fraunces text-4xl sm:text-5xl font-normal text-[#242423] tracking-tight">
          Get in Touch with our Advisors
        </h1>
        <p className="font-sans text-sm md:text-base text-[#242423]/70 max-w-2xl leading-relaxed">
          Ready to chart your path? Complete our secure institutional intake form below, or contact our administrative desk directly. An experienced DTW advisor will review your academic background and coordinate a formal strategic interview within 24–48 hours.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
        
        {/* Left Column: Contact Info and Scratch Reveal */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Institutional Contact Block */}
          <div className="space-y-6">
            <h3 className="font-space text-xs font-bold tracking-widest text-[#242423] uppercase">
              ADMINISTRATIVE DESK
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 flex items-center justify-center bg-[#f5cb5c]/10 text-[#f5cb5c] rounded-full shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] font-bold tracking-wider text-[#242423]/50 uppercase">
                    HEADQUARTERS ADDRESS
                  </h4>
                  <p className="font-sans text-xs text-[#242423] leading-relaxed mt-1">
                    Plot 14, Admiralty Way, Lekki Phase 1,<br />
                    Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-9 w-9 flex items-center justify-center bg-[#f5cb5c]/10 text-[#f5cb5c] rounded-full shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] font-bold tracking-wider text-[#242423]/50 uppercase">
                    SECURE INQUIRIES
                  </h4>
                  <p className="font-sans text-xs text-[#242423] leading-relaxed mt-1">
                    admissions@dtwconsult.com<br />
                    careers@dtwconsult.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-9 w-9 flex items-center justify-center bg-[#f5cb5c]/10 text-[#f5cb5c] rounded-full shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] font-bold tracking-wider text-[#242423]/50 uppercase">
                    TELEPHONE DIRECTORY
                  </h4>
                  <p className="font-sans text-xs text-[#242423] leading-relaxed mt-1">
                    +234 (1) 456-7890<br />
                    +234 (0) 803-DTW-WINS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="border border-[#242423]/10 p-6 bg-[#cfdbd5] space-y-4">
            <h4 className="font-space text-xs font-bold tracking-wider text-[#242423] uppercase flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#f5cb5c]" />
              STANDARD ENGAGEMENT HOURS
            </h4>
            <p className="font-sans text-xs text-[#242423]/70 leading-relaxed">
              Monday through Friday: 08:30 AM – 05:00 PM (West Africa Time)<br />
              Saturday appointments strictly by pre-screened reservation.
            </p>
          </div>

          {/* Contact Page Scratch Reveal Component */}
          <div className="space-y-4">
            <h4 className="font-space text-xs font-bold tracking-widest text-[#242423]/50 uppercase">
              CONSULTATION DISCLOSURE SECURE KEY
            </h4>
            <div className="bg-[#cfdbd5] border border-[#242423]/10 p-6 md:p-8 shadow-sm">
              <div className="mb-4 text-xs text-[#f5cb5c] font-space font-bold tracking-wider uppercase">
                CONSULT POLICY DECREE
              </div>
              <div className="font-fraunces text-lg text-[#242423] leading-relaxed italic">
                “Initial Consultation: DTW Consult conducts structured diagnostics. There is no cost for the initial 15-minute intake screen. Full profile reviews, SAT/JAMB baseline diagnostics, and formal timeline plans carry custom administrative tariffs disclosed upfront.”
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Embedded Google Form Visual Mockup */}
        <div className="lg:col-span-7">
          <div className="border border-[#242423]/15 bg-[#e8eddf] p-6 md:p-8 rounded-xs relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#f5cb5c]" />
            
            <div className="mb-6">
              <h3 className="font-fraunces text-xl md:text-2xl font-normal text-[#242423]">
                DTW Consult Intake & Diagnostic Registry
              </h3>
              <p className="font-sans text-xs text-[#242423]/60 mt-1">
                Formal Request for Academic and Career Positioning Advisory
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                <div className="h-14 w-14 flex items-center justify-center bg-[#f5cb5c]/20 text-[#f5cb5c] rounded-full border-2 border-[#f5cb5c]">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="font-space text-base font-bold tracking-wide text-[#242423] uppercase">
                  REGISTRY SUBMISSION VERIFIED
                </h4>
                <p className="font-sans text-xs text-[#242423]/65 max-w-sm leading-relaxed">
                  Thank you, <span className="font-semibold text-[#242423]">{formData.name}</span>. Your details have been securely logged in our transition database. A DTW Senior Advisor will email you at <span className="font-semibold text-[#242423]">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="font-space text-xs text-[#f5cb5c] hover:underline font-bold uppercase pt-4"
                >
                  Log Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-space text-[10px] font-bold tracking-wider text-[#242423] uppercase">
                      Candidate Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Chinedu Okafor"
                      className="w-full border border-[#242423]/15 bg-[#cfdbd5] px-4 py-2.5 font-sans text-xs text-[#242423] focus:outline-hidden focus:border-[#f5cb5c] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-space text-[10px] font-bold tracking-wider text-[#242423] uppercase">
                      Secure Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="candidate@domain.com"
                      className="w-full border border-[#242423]/15 bg-[#cfdbd5] px-4 py-2.5 font-sans text-xs text-[#242423] focus:outline-hidden focus:border-[#f5cb5c] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block font-space text-[10px] font-bold tracking-wider text-[#1F1F1F] uppercase">
                      Contact Telephone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 803 000 0000"
                      className="w-full border border-[#242423]/15 bg-[#cfdbd5] px-4 py-2.5 font-sans text-xs text-[#242423] focus:outline-hidden focus:border-[#f5cb5c] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block font-space text-[10px] font-bold tracking-wider text-[#242423] uppercase">
                      Primary Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full border border-[#242423]/15 bg-[#cfdbd5] px-4 py-2.5 font-sans text-xs text-[#242423] focus:outline-hidden focus:border-[#f5cb5c] transition appearance-none cursor-pointer"
                    >
                      <option>International Education Consulting</option>
                      <option>Standardized Test Preparation</option>
                      <option>Local Academic Support (JAMB/WAEC/NECO)</option>
                      <option>Postgraduate Consulting</option>
                      <option>Career Development</option>
                      <option>Tech Bootcamps & Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="curriculum" className="block font-space text-[10px] font-bold tracking-wider text-[#242423] uppercase">
                    Academic Curriculum Target
                  </label>
                  <select
                    id="curriculum"
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleInputChange}
                    className="w-full border border-[#242423]/15 bg-[#cfdbd5] px-4 py-2.5 font-sans text-xs text-[#242423] focus:outline-hidden focus:border-[#f5cb5c] transition appearance-none cursor-pointer"
                  >
                    <option>Both Local & International</option>
                    <option>International Only (US/UK/Canada matriculation)</option>
                    <option>Local West African Only (JAMB/WAEC/NECO pathways)</option>
                    <option>Corporate Career Transition Only</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="notes" className="block font-space text-[10px] font-bold tracking-wider text-[#242423] uppercase">
                    Brief Statement of Academic / Career Objective
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Describe any current standardized scores, targeted universities, or intended career pivots..."
                    className="w-full border border-[#242423]/15 bg-[#cfdbd5] px-4 py-2.5 font-sans text-xs text-[#242423] focus:outline-hidden focus:border-[#f5cb5c] transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  {/* Repeated CTA styling: Amber fill, Space Grotesk, dark text, no gradient, no heavy shadow */}
                  <button
                    type="submit"
                    className="w-full bg-[#f5cb5c] text-[#242423] font-space text-xs font-bold tracking-wider py-4 hover:bg-[#cfdbd5] active:scale-98 transition duration-150 uppercase text-center"
                  >
                    SUBMIT TO INTAKE REGISTRY
                  </button>
                </div>

                <div className="flex items-center gap-2 justify-center text-[10px] font-mono text-[#242423]/40 uppercase mt-4">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" />
                  SSL Secured • Your academic record remains confidential
                </div>

              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}
