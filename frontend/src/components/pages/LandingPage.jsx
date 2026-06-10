import React from 'react';
import { Globe, ChevronDown, Bell, Cloud, Box, Search, Menu } from 'lucide-react';
import { 
  SignInLogo, BrainAIIcon, PackagingIcon, SkincareIcon, FurnitureIcon, FeedIcon,
  DotGrid, FactoryIllustration, WindTurbineIllustration 
} from '../common/Icons';

// Import newly refactored sections
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';

import coffeeImg from '../../assets/coffee_grounds.png';
import fabricImg from '../../assets/fabric_waste.png';
import woodImg from '../../assets/wood_offcuts.png';
import packagingImg from '../../assets/paper_packaging.png';
import skincareImg from '../../assets/skincare_product.png';
import furnitureImg from '../../assets/chair_furniture.png';
import feedImg from '../../assets/animal_feed.png';

// Cute cow outline SVG icon for mobile Feed byproduct
const CowIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide-cow-icon">
    <path d="M5 13c0-2.5 1.5-3.5 3.5-3.5h7c2 0 3.5 1 3.5 3.5v3H5v-3z" />
    <path d="M7 16v4" />
    <path d="M10 16v4" />
    <path d="M14 16v4" />
    <path d="M17 16v4" />
    <path d="M18 9.5l2-2" />
    <path d="M20 7.5v2" />
    <path d="M8.5 9.5V6a2 2 0 0 0-2-2h-3v2" />
  </svg>
);

export const LandingPage = ({ setCurrentPage, triggerToast }) => {
  return (
    <div className="landing-page-wrapper">
      
      {/* ============================================================================
         DESKTOP ONLY LAYOUT
         ============================================================================ */}
      <div className="desktop-only-layout">
        <header className="landing-navbar">
          <div className="landing-navbar-brand">
            <SignInLogo size={34} color="#15803D" />
            <span className="landing-brand-name">EcoMatch AI</span>
          </div>

          <div className="landing-navbar-actions">
            <button className="landing-loc-btn" onClick={(e) => e.preventDefault()}>
              <Globe size={18} />
              Pune, India
              <ChevronDown size={14} />
            </button>

            <button className="landing-icon-btn" aria-label="Notifications" onClick={(e) => e.preventDefault()}>
              <Bell size={20} />
            </button>

            <button className="landing-btn-started" onClick={() => setCurrentPage('signin')}>
              Get Started
            </button>
          </div>
        </header>

        <main className="landing-main">
          <h1 className="landing-hero-title">
            TURN YOUR INDUSTRIAL BYPRODUCTS<br />INTO LOCAL REVENUE
          </h1>

          {/* Connecting Match Diagram */}
          <div className="diagram-container-outer">
            
            {/* SVG Connector Lines */}
            <svg className="diagram-svg-overlay" viewBox="0 0 1000 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#15803D" />
                </marker>
              </defs>

              {/* Left converging curves */}
              <path d="M 280 60 C 360 60, 380 200, 422 210" stroke="#15803D" strokeWidth="2" strokeDasharray="1 0" markerEnd="url(#arrow)" />
              <path d="M 280 240 L 415 240" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M 280 420 C 360 420, 380 280, 422 270" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Right diverging curves */}
              <path d="M 578 220 C 620 200, 640 50, 702 50" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M 580 240 C 630 240, 650 170, 702 170" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M 580 240 C 630 240, 650 290, 702 290" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M 578 260 C 620 280, 640 410, 702 410" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
            </svg>

            {/* Left Column: Byproducts */}
            <div className="left-cards-col">
              <div className="left-card-item" onClick={(e) => e.preventDefault()}>
                <img src={coffeeImg} alt="Used coffee grounds" className="left-card-img" />
                <div className="left-card-badge coffee">Coffee</div>
              </div>
              
              <div className="left-card-item" onClick={(e) => e.preventDefault()}>
                <img src={fabricImg} alt="Fabric waste" className="left-card-img" />
                <div className="left-card-badge fabric">Fabric</div>
              </div>
              
              <div className="left-card-item" onClick={(e) => e.preventDefault()}>
                <img src={woodImg} alt="Wood offcuts" className="left-card-img" />
                <div className="left-card-badge wood">Wood Offcuts</div>
              </div>
            </div>

            {/* Center Circle: AI MATCHING */}
            <div className="center-circle-wrapper">
              <div className="outer-radar-ring"></div>
              <div className="inner-radar-ring"></div>
              <div className="center-ai-circle" onClick={(e) => e.preventDefault()}>
                <BrainAIIcon />
                <span className="center-ai-text">AI MATCHING</span>
              </div>
            </div>

            {/* Right Column: Upcycled Products */}
            <div className="right-cards-col">
              <div className="right-card-item" onClick={(e) => e.preventDefault()}>
                <div className="right-card-badge">
                  <PackagingIcon />
                  Packaging
                </div>
                <img src={packagingImg} alt="Paper packaging" className="right-card-img" />
              </div>

              <div className="right-card-item" onClick={(e) => e.preventDefault()}>
                <div className="right-card-badge">
                  <SkincareIcon />
                  Skincare
                </div>
                <img src={skincareImg} alt="Skincare packaging" className="right-card-img" />
              </div>

              <div className="right-card-item" onClick={(e) => e.preventDefault()}>
                <div className="right-card-badge">
                  <FurnitureIcon />
                  Furniture
                </div>
                <img src={furnitureImg} alt="Furniture chair" className="right-card-img" />
              </div>

              <div className="right-card-item" onClick={(e) => e.preventDefault()}>
                <div className="right-card-badge">
                  <FeedIcon />
                  Feed
                </div>
                <img src={feedImg} alt="Animal feed" className="right-card-img" />
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="landing-action-row">
            <button className="landing-btn-list" onClick={() => setCurrentPage('signin')}>
              I have material
            </button>
            <button className="landing-btn-source" onClick={() => setCurrentPage('signin')}>
              I want material
            </button>
          </div>

          {/* Footer Stats Row */}
          <div className="landing-stats-footer">
            <div className="landing-stat-item">
              <div className="landing-stat-icon-circle">
                <Box size={24} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">12.4 Tons</span>
                <span className="landing-stat-lbl">Waste Diverted</span>
              </div>
            </div>

            <div className="landing-stat-divider"></div>

            <div className="landing-stat-item">
              <div className="landing-stat-icon-circle">
                <Cloud size={24} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">34.7 Tons</span>
                <span className="landing-stat-lbl">CO₂ Saved</span>
              </div>
            </div>

            <div className="landing-stat-divider"></div>

            <div className="landing-stat-item">
              <div className="landing-stat-icon-circle">
                <span style={{ fontSize: '20px', fontWeight: 800 }}>₹</span>
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">2.45 L</span>
                <span className="landing-stat-lbl">Cost Savings</span>
              </div>
            </div>
          </div>
        </main>

        {/* Operational Flow and Testimonials */}
        <HowItWorks />
        <Testimonials />

        <footer className="landing-footer">
          <div className="landing-footer-container">
            <div className="landing-footer-grid">
              
              {/* Branding Column */}
              <div className="landing-footer-col brand-col">
                <div className="landing-footer-brand">
                  <SignInLogo size={32} color="#15803D" />
                  <span className="landing-brand-name">EcoMatch AI</span>
                </div>
                <p className="landing-brand-desc">
                  Connecting companies to build a circular economy through industrial symbiosis.
                </p>
              </div>

              {/* Quick Links Column */}
              <div className="landing-footer-col">
                <span className="footer-title-text">Company</span>
                <ul className="footer-links-list">
                  <li><a href="#about" onClick={(e) => e.preventDefault()}>About Us</a></li>
                  <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
                </ul>
              </div>

              {/* Legal Links Column */}
              <div className="landing-footer-col">
                <span className="footer-title-text">Legal</span>
                <ul className="footer-links-list">
                  <li><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                  <li><a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Social Media Column */}
              <div className="landing-footer-col">
                <span className="footer-title-text">Connect</span>
                <div className="landing-footer-socials">
                  <a href="#linkedin" className="social-link-icon" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#twitter" className="social-link-icon" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#facebook" className="social-link-icon" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </a>
                </div>
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

      {/* ============================================================================
         MOBILE ONLY LAYOUT (landing page phone.png mockup layout)
         ============================================================================ */}
      <div className="mobile-only-layout">
        <header className="mobile-navbar">
          <div className="mobile-navbar-top">
            <div className="mobile-brand">
              <SignInLogo size={36} color="#15803D" />
              <span className="mobile-brand-name">EcoMatch AI</span>
            </div>
            <div className="mobile-navbar-top-right">
              <Search size={22} className="mobile-nav-icon-btn" onClick={() => setCurrentPage('signin')} />
              <Bell size={22} className="mobile-nav-icon-btn" onClick={() => setCurrentPage('signin')} />
              <Menu size={22} className="mobile-nav-icon-btn" onClick={() => setCurrentPage('signin')} />
            </div>
          </div>
          <div className="mobile-navbar-bottom">
            <div className="mobile-loc">
              <Globe size={18} />
              <span>Pune, India</span>
            </div>
            <button className="mobile-nav-started-btn" onClick={() => setCurrentPage('signin')}>
              Get Started
            </button>
          </div>
        </header>

        <main className="mobile-main">
          <h1 className="mobile-hero-title">
            TURN YOUR INDUSTRIAL BYPRODUCTS INTO LOCAL REVENUE
          </h1>

          {/* Input: Your Byproducts Card */}
          <div className="mobile-card">
            <h2 className="mobile-card-title">Input: Your Byproducts</h2>
            <div className="mobile-byproducts-grid">
              <div className="mobile-byproduct-item">
                <span className="mobile-item-num">1.</span>
                <div className="mobile-byproduct-badge coffee">
                  <img src={coffeeImg} alt="Coffee" className="mobile-badge-thumb" />
                  <span>Coffee</span>
                </div>
              </div>
              <div className="mobile-byproduct-item">
                <span className="mobile-item-num"></span>
                <div className="mobile-byproduct-badge crean">
                  <img src={packagingImg} alt="Crean" className="mobile-badge-thumb" />
                  <span>Crean</span>
                </div>
              </div>
              <div className="mobile-byproduct-item">
                <span className="mobile-item-num">2.</span>
                <div className="mobile-byproduct-badge fabric">
                  <img src={fabricImg} alt="Fabric" className="mobile-badge-thumb" />
                  <span>Fabric</span>
                </div>
              </div>
              <div className="mobile-byproduct-item">
                <span className="mobile-item-num"></span>
                <div className="mobile-byproduct-badge wood">
                  <img src={woodImg} alt="Wood Offcuts" className="mobile-badge-thumb" />
                  <span>Wood Offcuts</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Matching Connection (converging circuit graphics) */}
          <div className="mobile-ai-connector">
            <div className="mobile-ai-circle">
              <BrainAIIcon />
              <span className="mobile-ai-circle-text">AI MATCHING</span>
            </div>
          </div>

          {/* Output: New Local Products Card */}
          <div className="mobile-card">
            <h2 className="mobile-card-title">Output: New Local Products</h2>
            <div className="mobile-products-grid">
              
              <div className="mobile-product-badge">
                <div className="mobile-product-badge-left">
                  <Box size={16} />
                  <span>Packaging</span>
                </div>
                <img src={packagingImg} alt="Packaging" className="mobile-product-thumb" />
              </div>

              <div className="mobile-product-badge">
                <div className="mobile-product-badge-left">
                  <FurnitureIcon size={16} />
                  <span>Furniture</span>
                </div>
                <img src={furnitureImg} alt="Furniture" className="mobile-product-thumb" />
              </div>

              <div className="mobile-product-badge">
                <div className="mobile-product-badge-left">
                  <SkincareIcon size={16} />
                  <span>Skincare</span>
                </div>
                <img src={skincareImg} alt="Skincare" className="mobile-product-thumb" />
              </div>

              <div className="mobile-product-badge">
                <div className="mobile-product-badge-left">
                  <CowIcon size={16} />
                  <span>Feed</span>
                </div>
                <img src={feedImg} alt="Feed" className="mobile-product-thumb" />
              </div>

            </div>
          </div>

          {/* Action Buttons */}
          <div className="mobile-action-buttons">
            <button className="mobile-btn-have" onClick={() => setCurrentPage('signin')}>
              I have material
            </button>
            <button className="mobile-btn-want" onClick={() => setCurrentPage('signin')}>
              I want material
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mobile-stats-row">
            <div className="mobile-stat-item">
              <div className="mobile-stat-icon">
                <Box size={18} />
              </div>
              <div className="mobile-stat-info">
                <span className="mobile-stat-val">12.4 Tons</span>
                <span className="mobile-stat-lbl">Waste Diverted</span>
              </div>
            </div>
            <div className="mobile-stat-item">
              <div className="mobile-stat-icon">
                <Cloud size={18} />
              </div>
              <div className="mobile-stat-info">
                <span className="mobile-stat-val">34.7 Tons</span>
                <span className="mobile-stat-lbl">CO₂ Saved</span>
              </div>
            </div>
            <div className="mobile-stat-item">
              <div className="mobile-stat-icon">
                <span className="mobile-stat-symbol">₹</span>
              </div>
              <div className="mobile-stat-info">
                <span className="mobile-stat-val">2.45 L</span>
                <span className="mobile-stat-lbl">Cost Savings</span>
              </div>
            </div>
          </div>

        </main>

        {/* Operational Flow and Testimonials */}
        <HowItWorks />
        <Testimonials />

        <footer className="landing-footer">
          <div className="landing-footer-container">
            <div className="landing-footer-grid">
              
              {/* Branding Column */}
              <div className="landing-footer-col brand-col">
                <div className="landing-footer-brand">
                  <SignInLogo size={32} color="#15803D" />
                  <span className="landing-brand-name">EcoMatch AI</span>
                </div>
                <p className="landing-brand-desc">
                  Connecting companies to build a circular economy through industrial symbiosis.
                </p>
              </div>

              {/* Quick Links Column */}
              <div className="landing-footer-col">
                <span className="footer-title-text">Company</span>
                <ul className="footer-links-list">
                  <li><a href="#about" onClick={(e) => e.preventDefault()}>About Us</a></li>
                  <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
                </ul>
              </div>

              {/* Legal Links Column */}
              <div className="landing-footer-col">
                <span className="footer-title-text">Legal</span>
                <ul className="footer-links-list">
                  <li><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                  <li><a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Social Media Column */}
              <div className="landing-footer-col">
                <span className="footer-title-text">Connect</span>
                <div className="landing-footer-socials">
                  <a href="#linkedin" className="social-link-icon" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#twitter" className="social-link-icon" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#facebook" className="social-link-icon" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            <div className="landing-footer-bottom">
              <span className="copyright-text">
                © {new Date().getFullYear()} EcoMatch AI. All rights reserved.
              </span>
            </div>
          </div>
        </footer>

        {/* Sticky bottom button */}
        <div className="mobile-sticky-footer">
          <button className="mobile-sticky-btn" onClick={() => setCurrentPage('signin')}>
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
};
export default LandingPage;
