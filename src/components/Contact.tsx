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
      <div className="pb-12 border-b border-black/10 space-y-4">
        <div className="text-xs font-mono tracking-widest text-gold uppercase">
          SECURE CLIENT INTAKE
        </div>
        <h1 className="font-fraunces text-4xl sm:text-5xl font-normal text-black tracking-tight">
          Get in Touch with our Advisors
        </h1>
        <p className="font-sans text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
          Ready to chart your path? Complete our secure institutional intake form below, or contact our administrative desk directly. An experienced DTW advisor will review your academic background and coordinate a formal strategic interview within 24–48 hours.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
        
        {/* Left Column: Contact Info and Google Map */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Institutional Contact Block */}
          <div className="space-y-6">
            <h3 className="font-space text-xs font-bold tracking-widest text-black uppercase">
              ADMINISTRATIVE DESK
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 flex items-center justify-center bg-gold/10 text-gold rounded-full shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] font-bold tracking-wider text-black/50 uppercase">
                    LAGOS HEADQUARTERS ADDRESS
                  </h4>
                  <p className="font-sans text-xs text-black leading-relaxed mt-1 font-medium">
                    The Black Building,<br />
                    111/113 Ago Palace Way (before Market Square),<br />
                    Okota, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-9 w-9 flex items-center justify-center bg-gold/10 text-gold rounded-full shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] font-bold tracking-wider text-black/50 uppercase">
                    SECURE INQUIRIES
                  </h4>
                  <p className="font-sans text-xs text-black leading-relaxed mt-1">
                    dtwconsultng@gmail.com<br />
                    dtwtutorialsng@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-9 w-9 flex items-center justify-center bg-gold/10 text-gold rounded-full shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] font-bold tracking-wider text-black/50 uppercase">
                    TELEPHONE DIRECTORY
                  </h4>
                  <p className="font-sans text-xs text-black leading-relaxed mt-1 font-semibold">
                    +234 908 509 9582<br />
                    +234 803 873 2879
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="border border-black/10 p-6 bg-stone space-y-4">
            <h4 className="font-space text-xs font-bold tracking-wider text-black uppercase flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              STANDARD ENGAGEMENT HOURS
            </h4>
            <p className="font-sans text-xs text-black/70 leading-relaxed">
              Monday through Friday: 08:30 AM – 05:00 PM (West Africa Time)<br />
              Saturday appointments strictly by pre-screened reservation.
            </p>
          </div>

          {/* Google Maps Location Embedding */}
          <div className="space-y-4">
            <h4 className="font-space text-xs font-bold tracking-widest text-black/50 uppercase">
              OFFICE LOCATION MAP
            </h4>
            <div className="border border-black/10 p-1 bg-stone rounded-xs shadow-sm overflow-hidden">
              <iframe 
                title="DTW Consults Lagos Office Location Map"
                src="https://maps.google.com/maps?q=Market%20Square,%20Ago%20Palace%20Way,%20Okota,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="220" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-90 hover:grayscale-0 transition-all duration-500 rounded-xs"
              />
            </div>
            <p className="font-sans text-[10px] text-black/50 italic text-center">
              (Our office is situated in the black building right before the Ago Palace Way Market Square)
            </p>
          </div>

          {/* Contact Page Disclosure */}
          <div className="space-y-4">
            <h4 className="font-space text-xs font-bold tracking-widest text-black/50 uppercase">
              CONSULTATION DISCLOSURE SECURE KEY
            </h4>
            <div className="bg-stone border border-black/10 p-6 md:p-8 shadow-sm">
              <div className="mb-4 text-xs text-gold font-space font-bold tracking-wider uppercase">
                CONSULT POLICY DECREE
              </div>
              <div className="font-fraunces text-lg text-black leading-relaxed italic">
                “Initial Consultation: DTW Consult conducts structured diagnostics. There is no cost for the initial 15-minute intake screen. Full profile reviews, SAT/JAMB baseline diagnostics, and formal timeline plans carry custom administrative tariffs disclosed upfront.”
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Embedded Google Form Visual Mockup */}
        <div className="lg:col-span-7">
          <div className="border border-black/15 bg-cream p-6 md:p-8 rounded-xs relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold" />
            
            <div className="mb-6">
              <h3 className="font-fraunces text-xl md:text-2xl font-normal text-black">
                DTW Consult Intake &amp; Diagnostic Registry
              </h3>
              <p className="font-sans text-xs text-black/60 mt-1">
                Formal Request for Academic and Career Positioning Advisory
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                <div className="h-14 w-14 flex items-center justify-center bg-gold/20 text-gold rounded-full border-2 border-gold">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="font-space text-base font-bold tracking-wide text-black uppercase">
                  REGISTRY SUBMISSION VERIFIED
                </h4>
                <p className="font-sans text-xs text-black/65 max-w-sm leading-relaxed">
                  Thank you, <span className="font-semibold text-black">{formData.name}</span>. Your details have been securely logged in our transition database. A DTW Senior Advisor will email you at <span className="font-semibold text-black">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="font-space text-xs text-gold hover:underline font-bold uppercase pt-4 cursor-pointer"
                >
                  Log Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-space text-[10px] font-bold tracking-wider text-black uppercase">
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
                      className="w-full border border-black/15 bg-stone px-4 py-2.5 font-sans text-xs text-black focus:outline-hidden focus:border-gold transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-space text-[10px] font-bold tracking-wider text-black uppercase">
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
                      className="w-full border border-black/15 bg-stone px-4 py-2.5 font-sans text-xs text-black focus:outline-hidden focus:border-gold transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block font-space text-[10px] font-bold tracking-wider text-black uppercase">
                      Contact Telephone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 908 509 9582"
                      className="w-full border border-black/15 bg-stone px-4 py-2.5 font-sans text-xs text-black focus:outline-hidden focus:border-gold transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block font-space text-[10px] font-bold tracking-wider text-black uppercase">
                      Primary Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full border border-black/15 bg-stone px-4 py-2.5 font-sans text-xs text-black focus:outline-hidden focus:border-gold transition appearance-none cursor-pointer"
                    >
                      <option>International Education Consulting</option>
                      <option>Standardized Test Preparation</option>
                      <option>Local Academic Support (JAMB/WAEC/NECO)</option>
                      <option>Postgraduate Consulting</option>
                      <option>Career Development</option>
                      <option>Tech Bootcamps &amp; Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="curriculum" className="block font-space text-[10px] font-bold tracking-wider text-black uppercase">
                    Academic Curriculum Target
                  </label>
                  <select
                    id="curriculum"
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleInputChange}
                    className="w-full border border-black/15 bg-stone px-4 py-2.5 font-sans text-xs text-black focus:outline-hidden focus:border-gold transition appearance-none cursor-pointer"
                  >
                    <option>Both Local &amp; International</option>
                    <option>International Only (US/UK/Canada matriculation)</option>
                    <option>Local West African Only (JAMB/WAEC/NECO pathways)</option>
                    <option>Corporate Career Transition Only</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="notes" className="block font-space text-[10px] font-bold tracking-wider text-black uppercase">
                    Brief Statement of Academic / Career Objective
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Describe any current standardized scores, targeted universities, or intended career pivots..."
                    className="w-full border border-black/15 bg-stone px-4 py-2.5 font-sans text-xs text-black focus:outline-hidden focus:border-gold transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gold text-black font-space text-xs font-bold tracking-wider py-4 hover:bg-stone active:scale-98 transition duration-150 uppercase text-center cursor-pointer"
                  >
                    SUBMIT TO INTAKE REGISTRY
                  </button>
                </div>

                <div className="flex items-center gap-2 justify-center text-[10px] font-mono text-black/40 uppercase mt-4">
                  <ShieldCheck className="h-4 w-4 text-gold" />
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
