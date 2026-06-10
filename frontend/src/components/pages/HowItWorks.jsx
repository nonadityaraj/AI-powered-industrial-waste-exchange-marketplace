import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, UploadCloud, Cpu, Share2, Truck, Target, Bell, Route, ShieldCheck } from 'lucide-react';

export const HowItWorks = () => {
  const creatorSteps = [
    {
      step: "01",
      icon: <UploadCloud className="w-6 h-6 text-emerald-400" />,
      title: "Log & Label",
      desc: "Easily inventory your industrial byproducts with AI-assisted category matching, purity scores, and volume tracking."
    },
    {
      step: "02",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: "AI Analysis",
      desc: "Our algorithms evaluate byproduct specifications to calculate potential CO₂ offsets and verify financial cost savings."
    },
    {
      step: "03",
      icon: <Share2 className="w-6 h-6 text-emerald-400" />,
      title: "Syndicate & Match",
      desc: "The smart matcher alerts nearby verified upcyclers looking for that exact material grade to secure contracts."
    },
    {
      step: "04",
      icon: <Truck className="w-6 h-6 text-emerald-400" />,
      title: "Circular Transit",
      desc: "Coordinate with EcoMatch-partnered local transport to move materials directly from your dock to their lines."
    }
  ];

  const upcyclerSteps = [
    {
      step: "01",
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      title: "Define Feedstock",
      desc: "Specify raw material inputs, purity tolerances, supply volumes, and maximum shipping distances."
    },
    {
      step: "02",
      icon: <Bell className="w-6 h-6 text-indigo-400" />,
      title: "Sourcing Alerts",
      desc: "Receive real-time match notifications the second a local byproduct supplier uploads compatible stock."
    },
    {
      step: "03",
      icon: <Route className="w-6 h-6 text-indigo-400" />,
      title: "Emissions Routing",
      desc: "Assess Scope 3 transport profiles, verify pick-up logistics, and estimate chemical parity compatibility."
    },
    {
      step: "04",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      title: "Scale Production",
      desc: "Seamlessly transition standard feedstock to lower-cost secondary materials, tracking circular analytics in real time."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-slate-950 text-slate-100 overflow-hidden font-sans border-t border-slate-900">
      {/* Decorative anti-gravity background shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-800/40 text-emerald-400 text-xs font-semibold mb-4 tracking-wider uppercase backdrop-blur-md"
          >
            <Leaf className="w-3.5 h-3.5" />
            Operational Flow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400"
          >
            How It Operates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-medium"
          >
            A seamless B2B matchmaker closing the loop between byproducts and secondary manufacturing.
          </motion.p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          
          {/* Vertical center separator line for desktops */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent transform -translate-x-1/2" />

          {/* Track 1: Waste Creator (Emerald Accents) */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
              <h3 className="text-xl font-bold text-emerald-400 tracking-wide">Waste Creator Track</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {creatorSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative flex gap-6 p-6 rounded-2xl border border-slate-900 bg-slate-900/30 backdrop-blur-xl hover:border-emerald-500/20 hover:bg-slate-900/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950 border border-slate-850 group-hover:border-emerald-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-xs font-semibold text-slate-600 tracking-widest">{item.step}</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Track 2: Upcycler (Indigo Accents) */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.5)]" />
              <h3 className="text-xl font-bold text-indigo-400 tracking-wide">Upcycler Track</h3>
            </div>

            <div className="flex flex-col gap-6">
              {upcyclerSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative flex gap-6 p-6 rounded-2xl border border-slate-900 bg-slate-900/30 backdrop-blur-xl hover:border-indigo-500/20 hover:bg-slate-900/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950 border border-slate-850 group-hover:border-indigo-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-xs font-semibold text-slate-600 tracking-widest">{item.step}</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default HowItWorks;
