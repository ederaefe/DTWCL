import { ShieldAlert, BookOpen, Globe2, FileText, Briefcase, Code, CheckCircle, AlertTriangle } from 'lucide-react';
import { Page, ServiceLine } from '../types';

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const services: ServiceLine[] = [
    {
      id: "international-edu",
      num: "01",
      title: "International Education Consulting",
      shortDescription: "Expert pathway planning for undergraduate admissions globally.",
      description: "Our advisors evaluate candidate transcripts, match academic profiles to fitting institutions in the UK, US, Canada, and Europe, and lead families step-by-step through application pipelines. We build structured timelines, manage deadlines, and assist in compiling strong personal profiles that highlight applicant potential.",
      notIncluded: [
        "Visas or financial aid guarantees (we consult on preparation, but final decisions lie with sovereign embassies and university boards).",
        "Direct scholarship procurement (we provide research and application guidance, not financial guarantees)."
      ]
    },
    {
      id: "standardized-test-prep",
      num: "02",
      title: "Standardized Test Preparation",
      shortDescription: "Rigorous preparation schedules for SAT, GMAT, IELTS, and TOEFL.",
      description: "We deliver structured test strategies, review key content, and host monitored mock examinations. Our classes focus on comprehension and logical strategy, helping students approach GMAT quantitative sections, SAT reading prompts, and IELTS/TOEFL linguistic grids with absolute confidence.",
      notIncluded: [
        "Pre-solved answers, exam leaks, or short-cuts (DTW operates with strict ethical compliance and zero-tolerance for academic malpractice).",
        "Test center registrations (candidates must pay official boards directly, though we assist in scheduling)."
      ]
    },
    {
      id: "local-academic-support",
      num: "03",
      title: "Local Academic Support (JAMB, WAEC, NECO)",
      shortDescription: "Rigorous mastery classes for national West African examinations.",
      description: "We provide thorough preparatory lectures, study schedules, and exam review syllabi for the Joint Admissions and Matriculation Board (JAMB), West African Senior School Certificate Examination (WAEC), and National Examinations Council (NECO). This curriculum possesses equal importance to our international pathways, ensuring local students excel in national entries.",
      notIncluded: [
        "Grade manipulation, WAEC/NECO center modifications, or 'special center' registrations.",
        "Guaranteed university placements (JAMB cut-offs and departmental intakes remain sovereign university decisions)."
      ]
    },
    {
      id: "postgraduate-consulting",
      num: "04",
      title: "Postgraduate Consulting",
      shortDescription: "Mastery strategy for MA, MSc, MBA, and PhD admissions.",
      description: "We collaborate with academic and corporate professionals to plan and compile postgraduate profiles. Our consultants specialize in statement of purpose (SOP) critiques, resume optimization, curriculum vitae restructuring, and institutional recommendation workflows.",
      notIncluded: [
        "Ghostwriting statements of purpose or academic CVs from scratch (our consultants edit and refine, but the intellectual property remains the applicant's).",
        "Guaranteed research or graduate assistantships."
      ]
    },
    {
      id: "career-development",
      num: "05",
      title: "Career Development",
      shortDescription: "Mapping and positioning for the modern professional job market.",
      description: "We offer career counseling, resume critiques, mock behavioral interviews, and LinkedIn positioning strategies. Our program is designed for Nigerian professionals seeking to transition into international job markets or elevate their status in local corporations.",
      notIncluded: [
        "Guaranteed job placements or direct recruiter hires (we build candidate capability, not direct employment).",
        "Internship placements (we assist with matching, but the selection remains the firm's decision)."
      ]
    },
    {
      id: "tech-bootcamps",
      num: "06",
      title: "Tech Bootcamps & Advisory",
      shortDescription: "High-density technical literacy training for digital careers.",
      description: "Our intensive short-term courses cover data analytics, front-end software engineering principles, and visual UI/UX product design. We equip students with robust digital portfolios, professional github structures, and real-world project experience.",
      notIncluded: [
        "Hardware or personal laptop provisioning (candidates must supply their own laptops).",
        "Direct software engineering job placement (we equip you with the raw skills and portfolio, not a contract)."
      ]
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12 md:pt-20">
      
      {/* Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-black/10">
        <div className="lg:col-span-8 space-y-4">
          <div className="text-xs font-mono tracking-widest text-gold uppercase">
            INSTITUTIONAL SERVICES MATRIX
          </div>
          <h1 className="font-fraunces text-4xl sm:text-5xl font-normal text-black tracking-tight">
            Consulting Pathways & Scope
          </h1>
          <p className="font-sans text-base text-black/70 max-w-2xl leading-relaxed">
            We guide candidates through academic, test-taking, and professional milestones with a strict emphasis on structural preparation. Below is a comprehensive declaration of our operational scope, outlining exactly what is included in our consultation processes and, of equal importance, what is explicitly excluded.
          </p>
        </div>
        <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-gold text-black font-space text-xs font-bold tracking-wider px-6 py-3.5 hover:bg-stone transition uppercase w-full sm:w-auto text-center"
          >
            REQUEST CONSULTATION DETAIL
          </button>
        </div>
      </div>

      {/* Services List (Stacked in sequence, Australian government design system style) */}
      <div className="divide-y divide-black/10">
        {services.map((service) => (
          <div 
            key={service.id} 
            id={service.id}
            className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-black/[0.01] transition-colors px-2 rounded-xs"
          >
            {/* Numeral Column */}
            <div className="lg:col-span-2">
              <span className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-light text-gold block select-none">
                {service.num}
              </span>
            </div>

            {/* Service Details Column */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-fraunces text-2xl md:text-3xl font-medium text-black">
                {service.title}
              </h2>
              <p className="font-sans text-black/80 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-space text-[10px] font-bold tracking-widest text-black/60 uppercase">
                  {service.shortDescription}
                </span>
              </div>
            </div>

            {/* What is NOT Included Column */}
            <div className="lg:col-span-4 bg-stone border border-black/5 p-6 rounded-xs space-y-4">
              <div className="flex items-center gap-2 text-charcoal font-space text-[10px] font-bold tracking-wider uppercase">
                <ShieldAlert className="h-4 w-4 text-gold" />
                EXPLICITLY NOT INCLUDED:
              </div>
              <ul className="space-y-3">
                {service.notIncluded.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-xs text-black/60 leading-relaxed">
                    <span className="text-gold font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* Services Secondary Scratch Reveal Section */}
      <div className="mt-16 border-t border-black/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-fraunces text-2xl md:text-3xl font-normal text-black tracking-tight">
            Our Strict Guarantee of Educational Ethics
          </h3>
          <p className="font-sans text-sm text-black/70 leading-relaxed">
            DTW Consult is founded upon the principle of sustainable and verifiable intellectual advancement. We never offer secondary shortcut shortcuts or participate in examination scams. 
          </p>
          <p className="font-sans text-sm text-black/70 leading-relaxed">
            Our commitment is to guide, teach, correct, and position candidates so they are capable of securing success on their own merits—which is the only guarantee of surviving and thriving in global colleges or high-level careers.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-stone border border-black/10 p-6 md:p-8 shadow-sm">
            <div className="mb-4 text-xs text-gold font-space font-bold tracking-wider uppercase">
              DTW ETHICS RESOLVE
            </div>
            <div className="font-fraunces text-lg text-black leading-relaxed italic">
              “No Shortcuts: Under no circumstances does DTW Consult guarantee marks, grades, test scores, admission invitations, or job offers. We train candidates to achieve authentic success through structured academic rigor and elite preparation.”
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
