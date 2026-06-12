import React from 'react';
import { Globe, ChevronDown, Bell, ShieldCheck, FileText, Workflow, Share2, Lock, UserCheck, Cookie, RefreshCw } from 'lucide-react';
import { SignInLogo } from '../common/Icons';

export const PrivacyPolicy = ({ setCurrentPage, triggerToast }) => {
  return (
    <div className="landing-page-wrapper min-h-screen bg-slate-50 text-slate-800">
      
      {/* ============================================================================
         NAVBAR
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
      <main className="w-full max-w-[820px] self-center px-6 py-12 flex-grow flex flex-col gap-10">
        
        {/* HEADER SECTION */}
        <section className="flex flex-col items-center justify-center gap-6 text-center border-b border-slate-200 pb-8">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center">
            <ShieldCheck size={40} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Privacy Policy
            </h1>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Last updated: June 12, 2026
            </span>
            <p className="text-[15px] text-slate-600 leading-relaxed mt-2 max-w-[650px]">
              EcoMatch AI ("we", "our", or "us") values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
          </div>
        </section>

        {/* POLICY CONTENTS (Standard White Container) */}
        <section className="bg-white rounded-[32px] border border-slate-200 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.02)] p-10 sm:p-14 md:p-16 flex flex-col gap-12 text-left transition-all duration-300 hover:shadow-md">
          
          {/* Section 1 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <FileText size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">1. Information We Collect</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-[15px] text-slate-600 pl-4 flex flex-col gap-2 mt-1">
                <li>Personal Information (name, email, phone number, company details)</li>
                <li>Business Information (industry type, material listings, etc.)</li>
                <li>Usage Data (interactions, preferences, device information)</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Workflow size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">2. How We Use Your Information</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We use the information to:
              </p>
              <ul className="list-disc list-inside text-[15px] text-slate-600 pl-4 flex flex-col gap-2 mt-1">
                <li>Provide and improve our services</li>
                <li>Match materials and connect businesses</li>
                <li>Communicate updates and important notifications</li>
                <li>Analyze platform performance and usage</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Share2 size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">3. Information Sharing</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We do not sell or rent your personal information. We may share data with:
              </p>
              <ul className="list-disc list-inside text-[15px] text-slate-600 pl-4 flex flex-col gap-2 mt-1">
                <li>Trusted service providers who help us operate the platform</li>
                <li>Legal authorities, if required by law</li>
                <li>Business partners, only with your consent</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Lock size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">4. Data Security</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <UserCheck size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">5. Your Rights</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[15px] text-slate-600 pl-4 flex flex-col gap-2 mt-1">
                <li>Access, update, or delete your data</li>
                <li>Opt-out of communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Cookie size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">6. Cookies</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We use cookies and similar technologies to enhance your experience. You can manage cookie preferences in your browser settings.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <RefreshCw size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">7. Changes to This Policy</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We may update this policy from time to time. We will notify you of any significant changes via email or platform notification.
              </p>
            </div>
          </div>

        </section>

        {/* BOTTOM CONTACT INFO */}
        <section className="text-center text-sm text-slate-500 py-4">
          If you have any questions, contact us at{' '}
          <a href="mailto:privacy@ecomatch.ai" className="text-[#059669] font-bold hover:underline">
            privacy@ecomatch.ai
          </a>
        </section>

      </main>

      {/* ============================================================================
         FOOTER
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
export default PrivacyPolicy;
