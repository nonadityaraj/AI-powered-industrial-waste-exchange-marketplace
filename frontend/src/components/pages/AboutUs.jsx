import React from 'react';
import { Globe, ChevronDown, Bell, Leaf, Eye, Workflow, ArrowLeftRight, LineChart, Recycle, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { SignInLogo } from '../common/Icons';
import aboutUsHero from '../../assets/about_us_hero.png';

export const AboutUs = ({ setCurrentPage, triggerToast }) => {
  return (
    <div className="landing-page-wrapper min-h-screen bg-slate-50 text-slate-800">
      
      {/* ============================================================================
         NAVBAR (Aligned with landing navbar design)
         ============================================================================ */}
      <header className="landing-navbar">
        <div 
          className="landing-navbar-brand cursor-pointer" 
          onClick={() => setCurrentPage('listsource')}
        >
          <SignInLogo size={34} color="#15803D" />
          <span className="landing-brand-name">EcoMatch AI</span>
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
      <main className="w-full max-w-[1200px] self-center px-6 py-16 flex-grow flex flex-col gap-20">
        
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-5xl sm:text-6xl font-black text-[#064E3B] tracking-tight leading-tight w-full">
              About Us
            </h1>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#059669] w-full">
              Connecting Industries. Creating Impact.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-[580px]">
              EcoMatch AI is an industrial symbiosis platform that connects businesses to exchange waste materials, by-products, and resources—turning waste into value and promoting a circular economy.
            </p>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center">
            <img 
              src={aboutUsHero} 
              alt="EcoMatch AI Symbiosis Illustration" 
              className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-[32px] shadow-2xl border-4 border-white transform hover:scale-103 transition-transform duration-500"
            />
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-center">
          {/* Mission Card */}
          <div className="bg-white rounded-[28px] p-10 border border-slate-200 shadow-sm flex flex-col gap-6 items-center text-center min-h-[280px] max-w-[460px] w-full mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Leaf size={28} />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-xl font-bold text-[#064E3B]">Our Mission</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                To build a sustainable future by enabling industries to collaborate, share resources, and reduce environmental impact through smart matching and data-driven insights.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-[28px] p-10 border border-slate-200 shadow-sm flex flex-col gap-6 items-center text-center min-h-[280px] max-w-[460px] w-full mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Eye size={28} />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-xl font-bold text-[#064E3B]">Our Vision</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                A world where no resource goes to waste, and every industry plays a part in regenerating our planet.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="flex flex-col gap-10 text-center items-center">
          <h3 className="text-2xl font-bold text-[#064E3B]">What We Do</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-sm flex flex-col gap-6 items-center text-center min-h-[300px] max-w-[230px] w-full mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center flex-shrink-0">
                <Workflow size={26} />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h4 className="text-lg font-extrabold text-[#064E3B]">Smart Matching</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  AI-powered matching of waste materials with potential upcyclers.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-sm flex flex-col gap-6 items-center text-center min-h-[300px] max-w-[230px] w-full mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center flex-shrink-0">
                <ArrowLeftRight size={26} />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h4 className="text-lg font-extrabold text-[#064E3B]">Resource Exchange</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Facilitating secure and efficient material exchanges.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-sm flex flex-col gap-6 items-center text-center min-h-[300px] max-w-[230px] w-full mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center flex-shrink-0">
                <LineChart size={26} />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h4 className="text-lg font-extrabold text-[#064E3B]">Impact Tracking</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Track environmental impact and ESG contributions.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-sm flex flex-col gap-6 items-center text-center min-h-[300px] max-w-[230px] w-full mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center flex-shrink-0">
                <Recycle size={26} />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h4 className="text-lg font-extrabold text-[#064E3B]">Circular Economy</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Promoting collaboration for a cleaner, greener planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ECOMATCH AI & JOIN THE MOVEMENT */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Why EcoMatch List */}
          <div className="md:col-span-3 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h3 className="text-2xl font-bold text-[#064E3B] text-center md:text-left">Why EcoMatch AI?</h3>
            <ul className="flex flex-col gap-4 items-start">
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-[15px]">
                <CheckCircle2 className="text-[#059669] flex-shrink-0" size={20} />
                Reduce waste and disposal costs
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-[15px]">
                <CheckCircle2 className="text-[#059669] flex-shrink-0" size={20} />
                Find reliable partners and new revenue streams
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-[15px]">
                <CheckCircle2 className="text-[#059669] flex-shrink-0" size={20} />
                Track ESG impact and stay compliant
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-[15px]">
                <CheckCircle2 className="text-[#059669] flex-shrink-0" size={20} />
                Build a stronger, greener supply chain
              </li>
            </ul>
          </div>

          {/* Join Movement Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#ECFDF5] to-[#E6F4EA] border border-[#D1FAE5] rounded-3xl p-10 flex flex-col gap-6 text-center items-center justify-between min-h-[380px] max-w-[340px] w-full mx-auto md:ml-auto shadow-[0_12px_30px_-5px_rgba(5,150,105,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-black text-[#064E3B] flex items-center justify-center gap-2.5 w-full">
              <Sparkles className="text-[#059669] animate-pulse" size={24} />
              Join the movement
            </h3>
            
            <div className="flex flex-col gap-4 text-slate-700 text-sm font-medium leading-relaxed w-full">
              <p>
                Be part of the change. Connect, collaborate, and create a sustainable future with EcoMatch AI.
              </p>
              <div className="flex flex-col gap-2.5 items-start text-left bg-white/60 rounded-2xl p-4 border border-[#DCFCE7] w-full">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#064E3B]">
                  <span className="text-[#059669]">✓</span> List materials in seconds
                </div>
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#064E3B]">
                  <span className="text-[#059669]">✓</span> Connect with local partners
                </div>
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#064E3B]">
                  <span className="text-[#059669]">✓</span> Track your carbon offset
                </div>
              </div>
            </div>

            <button 
              className="group bg-[#064E3B] hover:bg-[#047857] text-white font-extrabold py-8 px-8 text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-98 w-full"
              onClick={() => setCurrentPage('signup')}
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-200" size={18} />
            </button>
          </div>
        </section>

      </main>

      {/* ============================================================================
         FOOTER (Standard landing page footer styling)
         ============================================================================ */}
      <footer className="landing-footer">
        <div className="landing-footer-container">
          <div className="landing-footer-grid">
            
            {/* Branding Column */}
            <div className="landing-footer-col brand-col">
              <div className="landing-footer-brand">
                <SignInLogo size={32} color="#15803D" />
                <span className="landing-brand-name font-bold">EcoMatch AI</span>
              </div>
              <p className="landing-brand-desc text-left">
                Connecting companies to build a circular economy through industrial symbiosis.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="landing-footer-col text-left">
              <span className="footer-title-text font-bold">Company</span>
              <ul className="footer-links-list">
                <li>
                  <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); triggerToast('Contact Info: info@ecomatch.ai'); }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links Column */}
            <div className="landing-footer-col text-left">
              <span className="footer-title-text font-bold">Legal</span>
              <ul className="footer-links-list">
                <li>
                  <a href="#privacy" onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); }}>
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="landing-footer-bottom">
            <span className="copyright-text">
              © {new Date().getFullYear()} EcoMatch AI. All rights reserved.
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};
export default AboutUs;
