import { Award, CheckCircle, Compass, HelpCircle, History, Sparkles } from 'lucide-react';
import { Page, CoreValue } from '../types';

export default function About() {
  const coreValues: CoreValue[] = [
    {
      title: "Professionalism",
      description: "We execute our work with institutional precision. All guidance is backed by careful academic and corporate research, ensuring our advisory remains reliable and factual."
    },
    {
      title: "Reliability",
      description: "We do not overpromise or exaggerate candidate likelihoods. Families and candidates receive candid, honest reports of where they stand and how they must prepare."
    },
    {
      title: "Excellence",
      description: "We maintain elite standards across West African and international academic curriculums. We do not engage in compromise, delivering top-quality lectures and test strategies."
    },
    {
      title: "Client-First",
      description: "We tailor educational pathways around the individual candidate's financial, academic, and geographical realities. Your true success is our primary benchmark."
    },
    {
      title: "Local and Global Depth",
      description: "We are deeply familiar with Nigerian examination boards (JAMB, WAEC, NECO) as well as foreign matriculation matrices. We possess a unique regional context and global reach."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12 md:pt-20">
      
      {/* Header Row */}
      <div className="pb-12 border-b border-black/10 space-y-4">
        <div className="text-xs font-mono tracking-widest text-gold uppercase">
          OUR MISSION & IDENTITY
        </div>
        <h1 className="font-fraunces text-4xl sm:text-5xl font-normal text-black tracking-tight">
          Destined To Win
        </h1>
      </div>

      {/* Main Core Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-black/10">
        
        {/* Left Column: Overview Paragraphs */}
        <div className="lg:col-span-7 space-y-6 font-sans text-sm md:text-base text-black/80 leading-relaxed">
          <p>
            DTW Consult is an institutional consulting firm established to lead West African students and corporate professionals through critical academic and professional transitions. In a globalized landscape, success depends on understanding both national roots and international pathways. We exist to provide that dual clarity.
          </p>
          <p>
            The name <span className="font-semibold text-black">DTW Consult</span> and our core tagline, <span className="font-semibold text-gold">"Destined To Win"</span>, reflect our fundamental posture: that with proper strategy, rigorous study, and ethical planning, any candidate can excel. We guide candidates from local high school entries to foreign master's boardrooms without compromise.
          </p>
          <p>
            We operate with a team of specialized advisors, test-taking masters, and admissions veterans. By utilizing detailed student evaluations and tailored milestone grids, we transform what is historically an anxious, opaque transition into a predictable, transparent development path.
          </p>
        </div>

        {/* Right Column: Vision Pullquote & Visual Grid */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
          
          {/* Vision Statement (Italicized Pull-quote) */}
          <div className="border-l-4 border-gold pl-6 py-2 bg-stone rounded-r-xs">
            <span className="font-space text-[10px] font-bold tracking-widest text-black/50 uppercase block mb-3">
              THE VISION
            </span>
            <p className="font-fraunces text-xl md:text-2xl italic font-normal text-black leading-relaxed">
              “To build a credible, standard-setting bridge that connects West African intellects to national and global boardrooms, established entirely on merit and structural preparation.”
            </p>
          </div>

          <div className="bg-stone border border-black/10 p-6 md:p-8 shadow-sm">
            <div className="mb-4 text-xs text-gold font-space font-bold tracking-wider uppercase">
              FOUNDATION PLEDGE
            </div>
            <div className="font-fraunces text-lg text-black leading-relaxed italic">
              “Our Pledge: We promise to evaluate candidates with absolute transparency. We will highlight weak areas early, design real remedial tracks, and support your transition with honest, non-inflated advisory.”
            </div>
          </div>

        </div>

      </div>

      {/* Core Values Section (Australian Design System Style) */}
      <div className="py-16">
        <div className="mb-12">
          <h2 className="font-space text-xs font-bold tracking-widest text-gold uppercase">
            OUR BRAND PILLARS
          </h2>
          <p className="font-fraunces text-2xl md:text-3xl text-black mt-1">
            Five Pillars of Uncompromising Consult Practice
          </p>
        </div>

        {/* List of Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((value, idx) => (
            <div key={idx} className="border border-black/10 p-6 bg-stone space-y-4 hover:border-gold transition duration-200">
              <div className="font-fraunces text-lg font-bold text-black/30 select-none">
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
