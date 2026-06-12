import React from 'react';
import { 
  Globe, ChevronDown, Bell, Leaf, BookOpen, Target, Brain, 
  ShieldCheck, Users, Factory, Truck, Building2, Cloud, Handshake, Recycle, Bookmark
} from 'lucide-react';
import { SignInLogo } from '../common/Icons';
import Footer from '../common/Footer';
import circularEconomy3dImg from '../../assets/circular_economy_3d.png';

export const AboutUs = ({ setCurrentPage, triggerToast }) => {
  return (
    <div className="landing-page-wrapper min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* ============================================================================
         NAVBAR
         ============================================================================ */}
      <header className="landing-navbar">
        <div 
          className="landing-navbar-brand cursor-pointer" 
          onClick={() => setCurrentPage('listsource')}
        >
          <SignInLogo size={34} color="#15803D" />
          <span className="landing-brand-name">EcoMatch</span>
        </div>

        <div className="landing-navbar-actions">
          <button className="landing-loc-btn" onClick={() => triggerToast('Current Location: Pune, India')}>
            <Globe size={18} />
            Pune, India
            <ChevronDown size={14} />
          </button>

          <button className="landing-icon-btn" aria-label="Notifications" onClick={() => triggerToast('Notifications open')}>
            <Bell size={20} />
          </button>

          <button className="landing-btn-started" onClick={() => setCurrentPage('signin')}>
            Get Started
          </button>
        </div>
      </header>

      {/* ============================================================================
         MAIN CONTENT AREA
         ============================================================================ */}
      <main className="w-full max-w-[1200px] self-center px-6 py-12 flex-grow flex flex-col gap-12 animate-[fadeIn_0.5s_ease-out]">
        
        {/* Intro/Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-4">
          <div className="flex-1 flex flex-col items-start gap-4">
            {/* Tag */}
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold tracking-wider uppercase">
              <Bookmark size={16} className="fill-emerald-600" />
              ABOUT US
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064E3B] tracking-tight leading-tight">
              About EcoMatch AI
            </h1>
            
            {/* Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[620px]">
              EcoMatch AI is on a mission to build a world where industrial waste becomes opportunity. Our AI-powered platform connects industries to enable circular economy practices that reduce emissions, cut costs, and create shared value.
            </p>
          </div>
          
          {/* 3D Illustration */}
          <div className="flex-shrink-0 relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] flex items-center justify-center rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(6,78,59,0.04)] border border-slate-200/80 bg-white">
            <img 
              src={circularEconomy3dImg} 
              alt="Circular Economy 3D Illustration" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </section>

        {/* Mission & Values Card Container */}
        <section className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Mission Left Section */}
          <div className="flex-grow lg:w-1/3 flex flex-col justify-center pr-2">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5 mb-4">
              <Target className="text-emerald-600 flex-shrink-0" size={24} />
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To accelerate the transition to a circular economy by intelligently matching industrial by-products with verified demand, unlocking value from waste and building a more sustainable tomorrow.
            </p>
          </div>
          
          {/* Vertical Separator */}
          <div className="hidden lg:block w-[1px] bg-slate-200/80 self-stretch my-2"></div>
          
          {/* Values Cards Right Grid */}
          <div className="flex-grow lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Sustainability First */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Leaf size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-slate-950">Sustainability First</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Driving measurable environmental impact by reducing waste and carbon emissions.
                </p>
              </div>
            </div>

            {/* AI-Powered Matching */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Brain size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-slate-950">AI-Powered Matching</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Using advanced algorithms to find the perfect match between waste and demand.
                </p>
              </div>
            </div>

            {/* Trust & Transparency */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-slate-950">Trust & Transparency</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Ensuring verified profiles, traceable transactions, and secure partnerships.
                </p>
              </div>
            </div>

            {/* Collaborative Growth */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Users size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-slate-950">Collaborative Growth</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Building a network where industries grow together through symbiosis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story & Impact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* Our Story Column */}
          <div className="flex flex-col gap-4 py-2">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <BookOpen className="text-emerald-600" size={24} />
              Our Story
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              EcoMatch AI was founded by a team of sustainability experts, data scientists, and industry veterans who saw the massive potential hidden in industrial by-products. What started as a pilot project in Pune has now grown into a platform connecting industries across India.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We believe that the future of industry is circular, collaborative, and intelligent. Through technology and partnerships, we are making industrial symbiosis simple, scalable, and impactful.
            </p>
          </div>

          {/* Our Impact Column */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 sm:p-8 flex flex-col gap-6 w-full">
            <h3 className="text-xl font-extrabold text-emerald-800">
              Our Impact So Far
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Stat 1 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-6 flex flex-col items-center justify-center text-center">
                <Leaf size={24} className="text-emerald-600 mb-2" />
                <span className="text-2xl font-black text-slate-900">500+</span>
                <span className="text-slate-500 text-[11px] font-semibold mt-1 leading-snug">
                  Tons of Waste Diverted
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-6 flex flex-col items-center justify-center text-center">
                <Factory size={24} className="text-emerald-600 mb-2" />
                <span className="text-2xl font-black text-slate-900">120+</span>
                <span className="text-slate-500 text-[11px] font-semibold mt-1 leading-snug">
                  Industries Connected
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-6 flex flex-col items-center justify-center text-center">
                <div className="relative flex items-center justify-center text-emerald-600 mb-2">
                  <Cloud size={24} />
                  <span className="absolute text-[8px] font-black mt-1">CO₂</span>
                </div>
                <span className="text-2xl font-black text-slate-900">1,200+</span>
                <span className="text-slate-500 text-[11px] font-semibold mt-1 leading-snug">
                  Tons of CO₂ Avoided
                </span>
              </div>

              {/* Stat 4 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-6 flex flex-col items-center justify-center text-center">
                <Handshake size={24} className="text-emerald-600 mb-2" />
                <span className="text-2xl font-black text-slate-900">85+</span>
                <span className="text-slate-500 text-[11px] font-semibold mt-1 leading-snug">
                  Successful Matches
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="bg-[#064E3B] rounded-3xl px-8 py-32 md:px-10 md:py-40 text-white flex flex-col lg:flex-row items-center justify-between gap-8 mt-4 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white flex-shrink-0 bg-white/5">
              <Users size={24} />
            </div>
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="text-2xl font-bold">Be Part of the Change</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                Join our growing network of industries, recyclers, and innovators working together for a cleaner, smarter, and more sustainable future.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-end">
            <button 
              className="border border-white/30 hover:bg-white/10 text-white text-sm font-bold rounded-xl px-6 py-3 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentPage('marketplace')}
            >
              Explore Platform
            </button>
            <button 
              className="bg-[#059669] hover:bg-[#047857] text-white text-sm font-bold rounded-xl px-6 py-3 transition-all duration-300 shadow-md cursor-pointer"
              onClick={() => triggerToast('Contact Info: info@ecomatch.ai')}
            >
              Contact Us
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer triggerToast={triggerToast} setCurrentPage={setCurrentPage} />

      {/* Global CSS Inject for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

    </div>
  );
};

export default AboutUs;
