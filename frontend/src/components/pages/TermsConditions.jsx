import React from 'react';
import { Globe, ChevronDown, Bell, ClipboardCheck, CheckSquare, Compass, User, ClipboardList, Handshake, AlertTriangle, LogOut, RefreshCw } from 'lucide-react';
import { SignInLogo } from '../common/Icons';

export const TermsConditions = ({ setCurrentPage, triggerToast }) => {
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
            <ClipboardCheck size={40} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Terms & Conditions
            </h1>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Last updated: June 12, 2026
            </span>
            <p className="text-[15px] text-slate-600 leading-relaxed mt-2 max-w-[650px]">
              Welcome to EcoMatch AI. By accessing or using our platform, you agree to be bound by these Terms & Conditions. Please read them carefully.
            </p>
          </div>
        </section>

        {/* TERMS CONTENTS (Standard White Container) */}
        <section className="bg-white rounded-[32px] border border-slate-200 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.02)] p-10 sm:p-14 md:p-16 flex flex-col gap-12 text-left transition-all duration-300 hover:shadow-md">
          
          {/* Section 1 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <CheckSquare size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">1. Acceptance of Terms</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                By using EcoMatch AI, you agree to comply with and be legally bound by these Terms & Conditions.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Compass size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">2. Use of the Platform</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                You agree to use the platform only for lawful purposes and in accordance with these terms. You must not misuse the platform or interfere with its security or functionality.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <User size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">3. User Accounts</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <ClipboardList size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">4. Listings and Content</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                You are solely responsible for the accuracy, legality, and reliability of the materials you list or share on the platform.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <Handshake size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">5. Matching & Agreements</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                EcoMatch AI facilitates connections but does not guarantee outcomes. Any agreements, transactions, or communications are solely between users.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">6. Limitation of Liability</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                EcoMatch AI is not liable for any indirect, incidental, or consequential damages arising from the use of our platform.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <LogOut size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">7. Termination</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these terms or engage in unethical or illegal activities.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-[#DCFCE7] text-[#059669] flex items-center justify-center flex-shrink-0">
              <RefreshCw size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-[#064E3B]">8. Changes to Terms</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We may update these Terms & Conditions at any time. Continued use of the platform constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>

        </section>

        {/* BOTTOM CONTACT INFO */}
        <section className="text-center text-sm text-slate-500 py-4">
          For any questions, contact us at{' '}
          <a href="mailto:support@ecomatch.ai" className="text-[#059669] font-bold hover:underline">
            support@ecomatch.ai
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
export default TermsConditions;
