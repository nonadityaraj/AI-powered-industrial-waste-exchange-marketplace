import React from 'react';
import { 
  Globe, ChevronDown, Bell, Shield, Search, Sliders, ClipboardCheck, BookOpen,
  User, Mail, Building2, Phone, Box, Activity, Workflow, BarChart3, Lock,
  Handshake, Zap, CheckCircle2, Monitor, Users, Cloud, Edit3, Trash2,
  MessageSquare, Bookmark, FileText
} from 'lucide-react';
import { SignInLogo } from '../common/Icons';
import Footer from '../common/Footer';
import privacySecurity3dImg from '../../assets/privacy_security_3d.png';

export const PrivacyPolicy = ({ setCurrentPage, triggerToast }) => {
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
              <Lock size={16} className="fill-emerald-600/10 text-emerald-600" />
              PRIVACY POLICY
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064E3B] tracking-tight leading-tight">
              Privacy Policy
            </h1>
            
            {/* Subtitle */}
            <p className="text-slate-500 text-lg sm:text-xl font-semibold leading-relaxed">
              Your data, protected with transparency and trust.
            </p>
            
            {/* Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[620px]">
              EcoMatch AI values your privacy. This policy explains how we collect, use, store, and protect your information while enabling secure industrial symbiosis and AI-powered waste matching.
            </p>
          </div>
          
          {/* 3D Security Illustration */}
          <div className="flex-shrink-0 relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] flex items-center justify-center rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(6,78,59,0.04)] border border-slate-200/80 bg-white">
            <img 
              src={privacySecurity3dImg} 
              alt="Data Security 3D Illustration" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </section>

        {/* Pillars Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Data Protection */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
              <Shield size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-slate-950">Data Protection</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                We use industry-standard security measures to protect user information.
              </p>
            </div>
          </div>

          {/* Transparency */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
              <Search size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-slate-950">Transparency</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Users are informed about what data is collected and how it is used.
              </p>
            </div>
          </div>

          {/* User Control */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
              <Sliders size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-slate-950">User Control</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Manage, update, or delete your account information at any time.
              </p>
            </div>
          </div>

          {/* Compliance */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
              <ClipboardCheck size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-slate-950">Compliance</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Aligned with applicable privacy regulations and ethical AI practices.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect Block */}
        <section className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8 md:p-10 flex flex-col gap-6 w-full">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <BookOpen className="text-emerald-600" size={24} />
            Information We Collect
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-2">
            {/* Personal Information */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-emerald-800 border-b border-slate-100 pb-2">
                Personal Information
              </h4>
              <ul className="flex flex-col gap-3.5">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <User className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Name</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Mail className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Email</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Building2 className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Company Details</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Phone className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Contact Information</span>
                </li>
              </ul>
            </div>

            {/* Platform Information */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-emerald-800 border-b border-slate-100 pb-2">
                Platform Information
              </h4>
              <ul className="flex flex-col gap-3.5">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Box className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Waste Listings</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Activity className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Marketplace Activity</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Workflow className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Match History</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <BarChart3 className="text-emerald-600 flex-shrink-0" size={18} />
                  <span>Usage Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Data Grid */}
        <section className="flex flex-col gap-6">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Sliders className="text-emerald-600" size={24} />
            How We Use Your Data
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Improve AI Matching */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <BarChart3 size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-slate-950">Improve AI Matching</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We analyze data to deliver better, more accurate waste matching recommendations.
                </p>
              </div>
            </div>

            {/* Secure Transactions */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Lock size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-slate-950">Secure Transactions</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We ensure safe and trusted interactions across our platform.
                </p>
              </div>
            </div>

            {/* Facilitate Business Connections */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Handshake size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-slate-950">Facilitate Business Connections</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We connect industries for sustainable partnerships and growth.
                </p>
              </div>
            </div>

            {/* Enhance Platform Performance */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Zap size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-slate-950">Enhance Platform Performance</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We use insights to improve features, usability, and overall experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Security & Trust */}
        <section className="flex flex-col gap-6">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Shield className="text-emerald-600" size={24} />
            Our Commitment to Security & Trust
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 items-center bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            {/* Checklist */}
            <div className="flex flex-col gap-4 pr-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0">
              <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
                <span>Secure Cloud Storage</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
                <span>Verified Business Profiles</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
                <span>Continuous Security Monitoring</span>
              </div>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {/* Card 1 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-4 flex flex-col items-center justify-center text-center">
                <Shield size={24} className="text-emerald-600 mb-2" />
                <span className="text-xl font-black text-slate-900">100%</span>
                <span className="text-slate-500 text-[10px] font-semibold mt-1 leading-snug">
                  Encrypted Data
                </span>
              </div>

              {/* Card 2 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-4 flex flex-col items-center justify-center text-center">
                <Monitor size={24} className="text-emerald-600 mb-2" />
                <span className="text-xl font-black text-slate-900">24/7</span>
                <span className="text-slate-500 text-[10px] font-semibold mt-1 leading-snug">
                  Monitoring
                </span>
              </div>

              {/* Card 3 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-4 flex flex-col items-center justify-center text-center">
                <Users size={24} className="text-emerald-600 mb-2" />
                <span className="text-xl font-black text-slate-900">500+</span>
                <span className="text-slate-500 text-[10px] font-semibold mt-1 leading-snug">
                  Verified Businesses
                </span>
              </div>

              {/* Card 4 */}
              <div className="bg-emerald-50/10 rounded-2xl border border-emerald-500/5 p-4 flex flex-col items-center justify-center text-center">
                <Cloud size={24} className="text-emerald-600 mb-2" />
                <span className="text-xl font-black text-slate-900">99.9%</span>
                <span className="text-slate-500 text-[10px] font-semibold mt-1 leading-snug">
                  Platform Uptime
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Your Privacy, Your Rights */}
        <section className="flex flex-col gap-6">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <User className="text-emerald-600" size={24} />
            Your Privacy, Your Rights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Access Your Data */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Lock size={20} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-base font-bold text-slate-950">Access Your Data</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Request a copy of the personal data we have stored about you.
                </p>
              </div>
            </div>

            {/* Update Information */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Edit3 size={20} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-base font-bold text-slate-950">Update Information</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Modify or correct your personal information anytime.
                </p>
              </div>
            </div>

            {/* Delete Account */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <Trash2 size={20} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-base font-bold text-slate-950">Delete Account</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Request deletion of your account and associated data.
                </p>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-600 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-base font-bold text-slate-950">Contact Support</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Reach out to us for any privacy-related questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="bg-[#064E3B] rounded-3xl p-8 md:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 mt-4 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white flex-shrink-0 bg-white/5">
              <MessageSquare size={24} />
            </div>
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="text-2xl font-bold">Questions About Privacy?</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                Contact our support team for any privacy or data protection concerns. We're here to help.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-end">
            <button 
              className="border border-white/30 hover:bg-white/10 text-white text-sm font-bold rounded-xl px-6 py-3 transition-all duration-300 cursor-pointer flex items-center gap-2"
              onClick={() => triggerToast('Contact Support: support@ecomatch.ai')}
            >
              <Mail size={16} />
              Contact Support
            </button>
            <button 
              className="bg-[#059669] hover:bg-[#047857] text-white text-sm font-bold rounded-xl px-6 py-3 transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
              onClick={() => setCurrentPage('terms')}
            >
              <FileText size={16} />
              Read Terms & Conditions
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

export default PrivacyPolicy;
