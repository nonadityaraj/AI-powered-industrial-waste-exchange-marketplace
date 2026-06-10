import React from 'react';
import { Quote, MessageSquare } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      quote: "EcoMatch AI completely transformed our waste management. We diverted 500 tons of brewery spent grain directly to local feed manufacturers, turning a disposal cost into a new revenue stream.",
      name: "Vikram Mehta",
      role: "Operations Director",
      company: "GreenBrew Beverages",
      initials: "VM",
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      quote: "Finding high-quality recycled feedstock used to take months of vetting. With EcoMatch's purity scoring and location filters, we sourced 100% of our packaging inputs locally within a week.",
      name: "Dr. Ananya Iyer",
      role: "Head of Sustainability",
      company: "BioPack Solutions",
      initials: "AI",
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
      quote: "The CO₂ savings tracking has been key for our ESG audits. We saved over 45 tons of carbon emissions this quarter alone by sourcing textile waste local to Pune.",
      name: "Rajesh Kulkarni",
      role: "Supply Chain Lead",
      company: "Pune Textiles Guild",
      initials: "RK",
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      quote: "EcoMatch AI provides verified chemical purity profiles that give us full confidence in upcycling wood shavings into premium composite panels. An absolute game-changer.",
      name: "Sarah Jenkins",
      role: "Technical Director",
      company: "Apex Woodworks",
      initials: "SJ",
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      quote: "By automating matches between our plastic scraps and regional upcyclers, EcoMatch helped us reach our Net Zero target two years ahead of schedule.",
      name: "Amit Sharma",
      role: "Head of Supply Chain",
      company: "CleanPoly Ltd",
      initials: "AS",
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    }
  ];

  // Double the reviews to create a seamless infinite loop scroll
  const doubleReviews = [...reviews, ...reviews];

  return (
    <section className="relative w-full py-24 bg-slate-950 text-slate-100 overflow-hidden font-sans border-t border-slate-900">
      
      {/* Self-contained CSS injection for infinite loop marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marqueeLoop 35s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Decorative anti-gravity background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-800/40 text-emerald-400 text-xs font-semibold mb-4 tracking-wider uppercase backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5" />
            Social Proof
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            Trust & Symbiosis
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-medium">
            Hear from leading partners who are closing materials loops and saving costs.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="w-full relative py-6 mask-gradient overflow-hidden">
        {/* Left and Right blur covers to hide edge cuts */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-loop flex gap-6 px-4">
          {doubleReviews.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[350px] md:w-[400px] p-8 rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-xl hover:border-slate-800 hover:bg-slate-900/40 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border ${item.color}`}>
                  {item.initials}
                </div>
                <Quote className="w-6 h-6 text-slate-700 group-hover:text-emerald-500/40 transition-colors" />
              </div>
              
              <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              
              <div className="border-t border-slate-900/60 pt-4">
                <span className="block text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="block text-xs font-semibold text-slate-500 mt-0.5">
                  {item.role}, <span className="text-emerald-400/80">{item.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
