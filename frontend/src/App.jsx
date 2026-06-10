import React, { useState } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, Leaf, Recycle, Bell, Globe, ChevronDown, User, Check, ArrowRight, ArrowLeft,
  Search, Send, Smile, Calendar, Truck, MoreVertical, ArrowLeftRight, LayoutDashboard, MapPin,
  ShoppingBag, Settings, FileText, BarChart2, Network, MessageSquare, Cloud, Box, Plus, Sparkles
} from 'lucide-react';
import avatarImg from './assets/avatar.png';
import './App.css';

// Generated Asset Imports for matching diagram
import coffeeImg from './assets/coffee_grounds.png';
import fabricImg from './assets/fabric_waste.png';
import woodImg from './assets/wood_offcuts.png';
import packagingImg from './assets/paper_packaging.png';
import skincareImg from './assets/skincare_product.png';
import furnitureImg from './assets/chair_furniture.png';
import feedImg from './assets/animal_feed.png';

// ============================================================================
// SIGN IN PAGE SPECIFIC SVGs & COMPONENTS
// ============================================================================

const SignInLogo = ({ size = 44, color = "#4ADE80" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-logo-container">
    <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="5.5" strokeDasharray="3 3" opacity="0.3" />
    <path d="M50 12 C62 12 73 17 79 26" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
    <path d="M88 50 C88 62 83 73 74 79" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
    <path d="M50 88 C38 88 27 83 21 74" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
    <path d="M12 50 C12 38 17 27 26 21" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
    <path d="M50 12 C36 14 32 26 32 26 C32 26 44 26 50 12Z" fill={color} />
    <path d="M50 88 C64 86 68 74 68 74 C68 74 56 74 50 88Z" fill={color} />
    <path d="M88 50 C86 36 74 32 74 32 C74 32 74 44 88 50Z" fill={color} />
    <path d="M12 50 C14 64 26 68 26 68 C26 68 26 56 12 50Z" fill={color} />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="social-icon">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.39-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="social-icon">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0077B5"/>
  </svg>
);

const BackgroundWaves = () => (
  <div className="bg-decorations">
    <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-100,180 C250,90 550,350 950,220 C1150,150 1350,280 1550,180" stroke="rgba(74, 222, 128, 0.08)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M-100,230 C250,140 550,400 950,270 C1150,200 1350,330 1550,230" stroke="rgba(74, 222, 128, 0.05)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M-50,620 C380,770 680,520 1080,720 C1280,800 1430,670 1580,720" stroke="rgba(74, 222, 128, 0.07)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M-50,670 C380,820 680,570 1080,770 C1280,850 1430,720 1580,770" stroke="rgba(74, 222, 128, 0.04)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="1370" cy="80" r="10" fill="#8B5CF6" opacity="0.45" />
    </svg>
  </div>
);

const FactoryIllustration = () => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
    <path d="M10 200 C80 192 140 208 220 200 C260 195 290 203 310 200" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M45 200 V75 H65 V200" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" />
    <line x1="42" y1="80" x2="68" y2="80" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" />
    <line x1="42" y1="88" x2="68" y2="88" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" />
    <path d="M55 75 C55 48 72 32 90 38 C80 58 70 63 55 75 Z" stroke="#4ADE80" strokeWidth="1.8" fill="none" />
    <path d="M55 75 C60 54 75 48 90 38" stroke="#4ADE80" strokeWidth="1.2" />
    <path d="M68 58 C73 53 80 50 83 47" stroke="#4ADE80" strokeWidth="1.2" />
    <path d="M65 200 V140 L95 115 V140 L125 115 V140 L155 115 V200 H65 Z" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="78" y="155" width="12" height="12" rx="1" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" />
    <rect x="103" y="155" width="12" height="12" rx="1" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" />
    <rect x="128" y="155" width="12" height="12" rx="1" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" />
    <rect x="175" y="145" width="55" height="40" rx="4" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" />
    <circle cx="202" cy="165" r="9" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M202 159 C198 165 202 171 202 171 C202 171 206 165 202 159 Z" stroke="#4ADE80" strokeWidth="1.2" fill="none" />
    <path d="M202 162 C200 165 202 168 202 170" stroke="#4ADE80" strokeWidth="1" />
    <path d="M230 185 H255 V165 L245 152 H230 V185 Z" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="234" y="157" width="12" height="11" rx="1" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.2" />
    <circle cx="192" cy="192" r="8" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" fill="#012b21" />
    <circle cx="192" cy="192" r="3" fill="rgba(74, 222, 128, 0.35)" />
    <circle cx="242" cy="192" r="8" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" fill="#012b21" />
    <circle cx="242" cy="192" r="3" fill="rgba(74, 222, 128, 0.35)" />
  </svg>
);

const WindTurbineIllustration = () => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
    <path d="M10 200 C80 203 140 187 220 200 C260 206 290 197 310 200" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M250 200 C250 172 265 152 280 157 C270 177 265 187 250 200 Z" stroke="#4ADE80" strokeWidth="1.5" fill="none" />
    <path d="M250 200 C256 182 266 172 280 157" stroke="#4ADE80" strokeWidth="1" />
    <path d="M280 200 C280 177 292 162 305 165 C295 182 292 192 280 200 Z" stroke="#4ADE80" strokeWidth="1.5" fill="none" />
    <path d="M280 200 C286 185 294 176 305 165" stroke="#4ADE80" strokeWidth="1" />
    <path d="M145 200 L147 120 H148 L150 200" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <g className="turbine-blades">
      <circle cx="147.5" cy="119.5" r="4.5" fill="rgba(74, 222, 128, 0.6)" />
      <path d="M147.5 119.5 C149 100 155 80 155 80 C155 80 145 95 147.5 119.5Z" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" fill="none" />
      <g transform="rotate(120 147.5 119.5)">
        <path d="M147.5 119.5 C149 100 155 80 155 80 C155 80 145 95 147.5 119.5Z" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" fill="none" />
      </g>
      <g transform="rotate(240 147.5 119.5)">
        <path d="M147.5 119.5 C149 100 155 80 155 80 C155 80 145 95 147.5 119.5Z" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.5" fill="none" />
      </g>
    </g>
  </svg>
);

const DotGrid = ({ color = "#8B5CF6", style = {} }) => {
  return (
    <div className="dot-grid" style={style}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="dot" style={{ backgroundColor: color, opacity: 0.35 }} />
      ))}
    </div>
  );
};

// ============================================================================
// MATERIAL PREFERENCES SPECIFIC SVGs & COMPONENTS
// ============================================================================

const GeneratorIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#DCFCE7" />
    <path d="M13 13 C13 10 15 10 15 7 M17 15 C17 12 19 12 19 9" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="10" y="19" width="28" height="20" rx="4" fill="#22C55E" stroke="#092C25" strokeWidth="1.5" />
    <line x1="14" y1="24" x2="22" y2="24" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="29" x2="22" y2="29" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="34" x2="22" y2="34" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="26" y="23" width="8" height="12" rx="2" fill="#EAB308" stroke="#092C25" strokeWidth="1.2" />
    <path d="M30 25 L28 29 H31 L29 33 L33 28 H30 L31 25 Z" fill="#FFFFFF" />
    <rect x="15" y="16" width="6" height="3" fill="#EAB308" stroke="#092C25" strokeWidth="1.2" />
  </svg>
);

const UpcyclerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#DCFCE7" />
    <g transform="translate(10, 10)">
      <path d="M14 2 L18 5 H12 L14 2 Z" fill="#22C55E" stroke="#092C25" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M14 5 V8 C9.58 8 6 11.58 6 16 C6 16.5 6.05 17 6.13 17.5" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
      
      <g transform="rotate(120 14 15)">
        <path d="M14 2 L18 5 H12 L14 2 Z" fill="#22C55E" stroke="#092C25" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M14 5 V8 C9.58 8 6 11.58 6 16 C6 16.5 6.05 17 6.13 17.5" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      
      <g transform="rotate(240 14 15)">
        <path d="M14 2 L18 5 H12 L14 2 Z" fill="#22C55E" stroke="#092C25" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M14 5 V8 C9.58 8 6 11.58 6 16 C6 16.5 6.05 17 6.13 17.5" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

// Material SVG Icons
const CoffeeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5V2 M11 5V1 M15 5V2" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 8 H16 V16 C16 19 13 21 9.5 21 C6 21 4 19 4 16 Z" fill="#B45309" stroke="#092C25" strokeWidth="1.5" />
    <path d="M16 10 H19 C20.5 10 21 11.5 20 13 C19 14.5 17.5 14 16 14" stroke="#092C25" strokeWidth="1.5" fill="none" />
  </svg>
);

const TextilesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4 L12 6 L15 4 L21 6 L19 10 L17 9.5 V20 H7 V9.5 L5 10 L3 6 Z" fill="#93C5FD" stroke="#092C25" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const WoodIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="13" width="14" height="7" rx="2" fill="#B45309" stroke="#092C25" strokeWidth="1.5" />
    <circle cx="16" cy="16.5" r="3.5" fill="#D97706" stroke="#092C25" strokeWidth="1.5" />
    <rect x="7" y="4" width="14" height="7" rx="2" fill="#B45309" stroke="#092C25" strokeWidth="1.5" />
    <circle cx="21" cy="7.5" r="3.5" fill="#D97706" stroke="#092C25" strokeWidth="1.5" />
  </svg>
);

const PlasticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3 H14 V5 H16 V7 H8 V5 H10 Z" fill="#E2E8F0" stroke="#092C25" strokeWidth="1.5" />
    <path d="M7 8 H17 L16 21 H8 Z" fill="#93C5FD" stroke="#092C25" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8 13 Q12 14.5 16 13 V20 H8 Z" fill="#60A5FA" opacity="0.6" />
  </svg>
);

const MetalsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 17 L6 11 H14 L10 17 Z" fill="#94A3B8" stroke="#092C25" strokeWidth="1.5" />
    <path d="M10 17 L14 11 H22 L18 17 Z" fill="#94A3B8" stroke="#092C25" strokeWidth="1.5" />
    <path d="M6 11 L10 5 H18 L14 11 Z" fill="#CBD5E1" stroke="#092C25" strokeWidth="1.5" />
  </svg>
);

const GrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22 V2" stroke="#B45309" strokeWidth="1.5" />
    <path d="M12 5 C10 4 8 6 12 8 C14 6 16 4 12 5 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
    <path d="M12 9 C10 8 8 10 12 12 C14 10 16 8 12 9 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
    <path d="M12 13 C10 12 8 14 12 15 C14 14 16 12 12 13 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
    <path d="M12 17 C10 16 8 18 12 19 C14 18 16 16 12 17 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
  </svg>
);

// ============================================================================
// LANDING PAGE SPECIFIC COMPONENTS & ICONS
// ============================================================================

const BrainAIIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8V40" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 14C20 12 16 14 16 18C16 20 18 21 20 22C17 23 15 26 15 29C15 33 19 35 24 34" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 22C21.5 22 23 23 24 24" stroke="#15803D" strokeWidth="2.0" />
    <path d="M24 14C28 12 32 14 32 18C32 20 30 21 28 22C31 23 33 26 33 29C33 33 29 35 24 34" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 22C26.5 22 25 23 24 24" stroke="#15803D" strokeWidth="2.0" />
  </svg>
);

const PackagingIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const SkincareIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2h4" />
    <path d="M12 2v3" />
    <path d="M8 8h8v11a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V8z" />
    <path d="M12 8v6" />
  </svg>
);

const FurnitureIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
    <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
    <path d="M6 18v2" />
    <path d="M18 18v2" />
  </svg>
);

const FeedIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    <path d="M12 6c-1.5 2-3 3-5 3v1c2 0 3.5-1 5-3 1.5 2 3 3 5 3v-1c-2 0-3.5-1-5-3z" />
    <path d="M12 18V9" />
  </svg>
);

const Sidebar = ({ currentPage, setCurrentPage, triggerToast }) => {
  return (
    <aside className="inbox-sidebar-left">
      <div className="inbox-brand-area">
        <div className="inbox-brand-logo">
          <SignInLogo size={32} color="#4ADE80" />
        </div>
        <div className="inbox-brand-text">
          <span className="inbox-brand-name">EcoMatch AI</span>
          <span className="inbox-brand-tagline">Industrial Symbiosis</span>
        </div>
      </div>

      <nav className="inbox-sidebar-nav">
        <a href="#dashboard" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening Dashboard...'); }}>
          <div className="inbox-nav-item-left">
            <LayoutDashboard className="inbox-nav-icon" />
            Dashboard
          </div>
        </a>

        <div>
          <a 
            href="#marketplace" 
            className={`inbox-nav-item ${currentPage === 'marketplace' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setCurrentPage('marketplace'); }}
          >
            <div className="inbox-nav-item-left">
              <ShoppingBag className="inbox-nav-icon" />
              Waste Marketplace
            </div>
            <ChevronDown size={14} style={{ transform: currentPage === 'marketplace' ? 'rotate(180deg)' : 'none', color: '#FFFFFF' }} />
          </a>
          {currentPage === 'marketplace' && (
            <div style={{ paddingLeft: '38px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#browse" style={{ textDecoration: 'none', fontSize: '13px', fontWeight: '750', color: '#4ADE80', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); triggerToast('Browsing materials...'); }}>Browse Materials</a>
              <a href="#saved" style={{ textDecoration: 'none', fontSize: '13px', fontWeight: '600', color: '#86B3A9', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); triggerToast('Saved searches...'); }}>Saved Searches</a>
            </div>
          )}
        </div>

        <a 
          href="#listings" 
          className={`inbox-nav-item ${currentPage === 'activeInventory' || currentPage === 'listingsDetails' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setCurrentPage('activeInventory'); }}
        >
          <div className="inbox-nav-item-left">
            <FileText className="inbox-nav-icon" />
            My Listings
          </div>
          <ChevronDown size={14} style={{ transform: (currentPage === 'activeInventory' || currentPage === 'listingsDetails') ? 'rotate(180deg)' : 'none', color: '#FFFFFF' }} />
        </a>

        <a href="#matches" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening Matches...'); }}>
          <div className="inbox-nav-item-left">
            <Recycle className="inbox-nav-icon" />
            Matches
          </div>
        </a>

        <a href="#recommendations" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening AI Recommendations...'); }}>
          <div className="inbox-nav-item-left">
            <Sparkles className="inbox-nav-icon" />
            AI Recommendations
          </div>
        </a>

        <a href="#network" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening Network...'); }}>
          <div className="inbox-nav-item-left">
            <Network className="inbox-nav-icon" />
            Network
          </div>
        </a>

        <a href="#analytics" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening Analytics...'); }}>
          <div className="inbox-nav-item-left">
            <BarChart2 className="inbox-nav-icon" />
            Analytics
          </div>
        </a>

        <a href="#contracts" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening Contracts...'); }}>
          <div className="inbox-nav-item-left">
            <FileText className="inbox-nav-icon" />
            Contracts
          </div>
        </a>

        <a 
          href="#messages" 
          className={`inbox-nav-item ${currentPage === 'messages' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setCurrentPage('messages'); }}
        >
          <div className="inbox-nav-item-left">
            <MessageSquare className="inbox-nav-icon" />
            Messages
          </div>
          <ChevronDown size={14} style={{ transform: currentPage === 'messages' ? 'rotate(180deg)' : 'none', color: '#FFFFFF' }} />
        </a>

        <a href="#notifications" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening Notifications...'); }}>
          <div className="inbox-nav-item-left">
            <Bell className="inbox-nav-icon" />
            Notifications
          </div>
        </a>

        <a href="#settings" className="inbox-nav-item" onClick={(e) => { e.preventDefault(); triggerToast('Opening Settings...'); }}>
          <div className="inbox-nav-item-left">
            <Settings className="inbox-nav-icon" />
            Settings
          </div>
        </a>
      </nav>

      <div className="inbox-sidebar-profile">
        <div className="inbox-profile-left">
          <div className="inbox-profile-pic-container">
            <img src={avatarImg} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="inbox-profile-info">
            <span className="inbox-profile-name">GreenBrew Co.</span>
            <span className="inbox-profile-role">Business Account</span>
          </div>
        </div>
        <ChevronDown size={14} style={{ color: '#86B3A9', cursor: 'pointer' }} onClick={() => triggerToast('Business Profile Options')} />
      </div>
    </aside>
  );
};

const Topnav = ({ triggerToast }) => {
  return (
    <header className="inbox-topnav">
      <div className="inbox-search-container">
        <Search size={18} className="inbox-search-icon" />
        <input 
          type="text" 
          className="inbox-search-input" 
          placeholder="Search materials, industries, or locations..." 
          onClick={() => triggerToast('Search active')}
        />
      </div>

      <div className="inbox-topnav-actions">
        <button className="inbox-loc-picker" onClick={() => triggerToast('Current Location: Pune, India')}>
          <Globe size={16} />
          Pune, India
          <ChevronDown size={12} />
        </button>

        <button className="inbox-topnav-btn" aria-label="Notifications" onClick={() => triggerToast('Notifications open')}>
          <Bell size={18} />
        </button>

        <button className="inbox-topnav-btn" aria-label="Profile Outline" onClick={() => triggerToast('User profile settings')}>
          <User size={18} />
        </button>

        <div className="inbox-user-profile" onClick={() => triggerToast('Switch account menu')}>
          <img src={avatarImg} alt="User headshot" className="inbox-user-avatar" />
          <ChevronDown size={12} style={{ color: '#4B5563' }} />
        </div>
      </div>
    </header>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('listsource'); // Default to landing page
  const [notification, setNotification] = useState(null);

  // Marketplace Filter States
  const [filterRadius, setFilterRadius] = useState('25km');
  const [filterOrganic, setFilterOrganic] = useState(false);
  const [filterTextiles, setFilterTextiles] = useState(false);
  const [filterWood, setFilterWood] = useState(false);
  const [filterPlastics, setFilterPlastics] = useState(false);
  const [filterMetals, setFilterMetals] = useState(false);
  const [filterPurity, setFilterPurity] = useState(true);

  // Common Toast Function
  const triggerToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // ==========================================================================
  // SIGN IN PAGE STATES & HANDLER
  // ==========================================================================
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      triggerToast('Please enter your email address.', 'error');
      return;
    }
    if (!password) {
      triggerToast('Please enter your password.', 'error');
      return;
    }
    
    setSignInLoading(true);
    setTimeout(() => {
      setSignInLoading(false);
      triggerToast(`Welcome back! Successfully logged in. Redirecting to Business Profile...`);
      setTimeout(() => {
        setCurrentPage('preferences');
      }, 1500);
    }, 1500);
  };

  // ==========================================================================
  // MATERIAL PREFERENCES STATES & HANDLERS
  // ==========================================================================
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState({
    generator: true,
    upcycler: true
  });

  const [materials, setMaterials] = useState([
    { id: 'coffee', name: 'Coffee', icon: <CoffeeIcon />, selection: 'primary' },
    { id: 'textiles', name: 'Textiles', icon: <TextilesIcon />, selection: 'primary' },
    { id: 'wood', name: 'Wood', icon: <WoodIcon />, selection: 'secondary' },
    { id: 'plastics', name: 'Plastics', icon: <PlasticsIcon />, selection: 'secondary' },
    { id: 'metals', name: 'Metals', icon: <MetalsIcon />, selection: 'secondary' },
    { id: 'grain', name: 'Brewery Grain', icon: <GrainIcon />, selection: 'secondary' },
  ]);

  const [transportCapabilities, setTransportCapabilities] = useState({
    local: false,
    freight: false,
    courier: false
  });

  const toggleBusinessType = (type) => {
    setSelectedBusinessTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleMaterialCardClick = (id) => {
    setMaterials(prev => prev.map(m => {
      if (m.id === id) {
        const nextSelection = m.selection === 'primary' ? 'secondary' : 'primary';
        return { ...m, selection: nextSelection };
      }
      return m;
    }));
  };

  const handleMaterialToggleClick = (e, id) => {
    e.stopPropagation();
    setMaterials(prev => prev.map(m => {
      if (m.id === id) {
        const nextSelection = m.selection === 'none' ? 'secondary' : 'none';
        return { ...m, selection: nextSelection };
      }
      return m;
    }));
  };

  const toggleTransportCapability = (key) => {
    setTransportCapabilities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSavePreferences = () => {
    const activeMaterials = materials.filter(m => m.selection !== 'none');
    triggerToast(`Profile settings saved successfully! ${activeMaterials.length} material interests selected.`);
    setTimeout(() => {
      setCurrentPage('messages');
    }, 1500);
  };

  // ==========================================================================
  // INBOX / MESSAGES STATE & HANDLERS (message.jpg)
  // ==========================================================================
  const [typedMessage, setTypedMessage] = useState('');
  const [activeConvId, setActiveConvId] = useState('biopack_1');
  const [chatHistories, setChatHistories] = useState({
    biopack_1: [
      { id: 1, sender: 'me', text: 'Hi BioPack, confirmed pickup for 120kg coffee grounds tomorrow?', time: '9:38 PM', status: 'Sent' },
      { id: 2, sender: 'them', text: 'Yes, 10am at the side entrance.', time: '1:31 PM', status: 'Received' }
    ],
    greenbrew_1: [
      { id: 1, sender: 'them', text: 'Hi snmrement oui online.', time: '10:26 AM', status: 'Received' }
    ],
    greenbrew_2: [
      { id: 1, sender: 'them', text: 'Hi 1lkg coffee grounds tomorrow?', time: '7:30 PM', status: 'Received' }
    ],
    biopack_2: [
      { id: 1, sender: 'them', text: 'Yes, 10am at the side entrance.', time: '1:31 PM', status: 'Received' }
    ],
    greenbrew_3: [
      { id: 1, sender: 'them', text: 'Hi, M0arm at the side entrance...', time: '1:57 PM', status: 'Received' }
    ],
    greenbrew_4: [
      { id: 1, sender: 'them', text: 'Hey BioPack, confirmed to no...', time: 'Message', status: 'Received' }
    ],
    greenbrew_5: [
      { id: 1, sender: 'them', text: 'Yes, 10am at the side entrance.', time: 'Mesconn', status: 'Received' }
    ]
  });

  const conversationItems = [
    { id: 'greenbrew_1', name: 'GreenBrew Co.', type: 'exchange', time: '10:26 AM', snippet: 'Hi snmrement oui online.', avatarType: 'user' },
    { id: 'biopack_1', name: 'BioPack Solutions', type: 'text', time: '9:38 PM', snippet: 'Hi BioPack, confirmed pickup...', avatarType: 'purple-box' },
    { id: 'greenbrew_2', name: 'GreenBrew Co.', type: 'left-arrow', time: '7:30 PM', snippet: 'Hi 1lkg coffee grounds tomor...', avatarType: 'user' },
    { id: 'biopack_2', name: 'BioPack Solutions', type: 'text', time: '1:31 PM', snippet: 'Yes, 10am at the side entrance.', avatarType: 'green-leaf' },
    { id: 'greenbrew_3', name: 'GreenBrew Co.', type: 'left-arrow', time: '1:57 PM', snippet: 'Hi, M0arm at the side entranc...', avatarType: 'user' },
    { id: 'greenbrew_4', name: 'GreenBrew Co.', type: 'left-arrow', time: 'Message', snippet: 'Hey BioPack, confirmed to no...', avatarType: 'user' },
    { id: 'greenbrew_5', name: 'GreenBrew Co.', type: 'left-arrow', time: 'Mesconn', snippet: 'Yes, 10am at the side entran...', avatarType: 'user' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const newMsg = {
      id: chatHistories[activeConvId].length + 1,
      sender: 'me',
      text: typedMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Sent'
    };

    setChatHistories(prev => ({
      ...prev,
      [activeConvId]: [...prev[activeConvId], newMsg]
    }));
    
    const sentMsgText = typedMessage;
    setTypedMessage('');
    triggerToast('Message sent successfully!');

    // Simulated Response
    setTimeout(() => {
      const responseMsg = {
        id: chatHistories[activeConvId].length + 2,
        sender: 'them',
        text: `Thanks for the update: "${sentMsgText.length > 25 ? sentMsgText.substring(0, 25) + '...' : sentMsgText}". We will coordinate accordingly.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Received'
      };
      setChatHistories(prev => ({
        ...prev,
        [activeConvId]: [...prev[activeConvId], responseMsg]
      }));
      triggerToast('New message received from ' + (activeConvId.startsWith('biopack') ? 'BioPack Solutions' : 'GreenBrew Co.'));
    }, 2000);
  };

  const getActiveDetails = () => {
    if (activeConvId.startsWith('biopack')) {
      return {
        title: 'USED COFFEE GROUNDS',
        qty: '120kg/wk',
        img: coffeeImg,
        pickup: '10:00am - 10am',
        transport: 'Courier pickup coordinated via EcoMatch Fleet.'
      };
    } else {
      return {
        title: 'RECYCLED TEXTILE FABRIC',
        qty: '350kg/month',
        img: fabricImg,
        pickup: '02:00pm - 4:00pm',
        transport: 'Freight Delivery arranged by Supplier.'
      };
    }
  };

  const activeDetails = getActiveDetails();

  return (
    <>
      {/* Floating toast notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          zIndex: 10000,
          backgroundColor: notification.type === 'error' ? '#EF4444' : '#10B981',
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          fontWeight: 700,
          fontSize: '15px',
          animation: 'slideIn 0.3s ease-out forwards',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {notification.type === 'error' ? '⚠️' : '✓'}
          {notification.message}
        </div>
      )}

      {/* Global CSS Inject for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}} />

      {/* ============================================================================
         1. LANDING PAGE VIEW (listsource) - matching list_source.jpg
         ============================================================================ */}
      {currentPage === 'listsource' && (
        <div className="landing-page-wrapper">
          <header className="landing-navbar">
            <a href="#home" className="landing-navbar-brand" onClick={(e) => { e.preventDefault(); triggerToast('Welcome to EcoMatch AI!'); }}>
              <SignInLogo size={34} color="#15803D" />
              <span className="landing-brand-name">EcoMatch AI</span>
            </a>

            <nav>
              <ul className="landing-navbar-nav">
                <li><a href="#industries" className="landing-nav-link" onClick={(e) => e.preventDefault()}>Industries</a></li>
                <li><a href="#how" className="landing-nav-link" onClick={(e) => e.preventDefault()}>How it Works</a></li>
                <li><a href="#marketplace" className="landing-nav-link" onClick={(e) => e.preventDefault()}>Marketplace</a></li>
                <li><a href="#pricing" className="landing-nav-link" onClick={(e) => e.preventDefault()}>Pricing</a></li>
              </ul>
            </nav>

            <div className="landing-navbar-actions">
              <button className="landing-loc-btn" onClick={() => triggerToast('Current region: Pune, India')}>
                <Globe size={18} />
                Pune, India
                <ChevronDown size={14} />
              </button>

              <button className="landing-icon-btn" aria-label="Notifications" onClick={() => triggerToast('No new notifications')}>
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

                {/* Left converging curves (pointing to AI Matching center at x=500, y=240) */}
                {/* Coffee (y=60) -> Center */}
                <path d="M 280 60 C 360 60, 380 200, 422 210" stroke="#15803D" strokeWidth="2" strokeDasharray="1 0" markerEnd="url(#arrow)" />
                {/* Fabric (y=240) -> Center */}
                <path d="M 280 240 L 415 240" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
                {/* Wood Offcuts (y=420) -> Center */}
                <path d="M 280 420 C 360 420, 380 280, 422 270" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Right diverging curves (pointing to right items at x=710) */}
                {/* Center -> Packaging (y=50) */}
                <path d="M 578 220 C 620 200, 640 50, 702 50" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
                {/* Center -> Skincare (y=170) */}
                <path d="M 580 240 C 630 240, 650 170, 702 170" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
                {/* Center -> Furniture (y=290) */}
                <path d="M 580 240 C 630 240, 650 290, 702 290" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
                {/* Center -> Feed (y=410) */}
                <path d="M 578 260 C 620 280, 640 410, 702 410" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
              </svg>

              {/* Left Column: Byproducts */}
              <div className="left-cards-col">
                <div className="left-card-item" onClick={() => triggerToast('Selected byproduct: Coffee')}>
                  <img src={coffeeImg} alt="Used coffee grounds" className="left-card-img" />
                  <div className="left-card-badge coffee">Coffee</div>
                </div>
                
                <div className="left-card-item" onClick={() => triggerToast('Selected byproduct: Fabric')}>
                  <img src={fabricImg} alt="Fabric waste" className="left-card-img" />
                  <div className="left-card-badge fabric">Fabric</div>
                </div>
                
                <div className="left-card-item" onClick={() => triggerToast('Selected byproduct: Wood Offcuts')}>
                  <img src={woodImg} alt="Wood offcuts" className="left-card-img" />
                  <div className="left-card-badge wood">Wood Offcuts</div>
                </div>
              </div>

              {/* Center Circle: AI MATCHING */}
              <div className="center-circle-wrapper">
                <div className="outer-radar-ring"></div>
                <div className="inner-radar-ring"></div>
                <div className="center-ai-circle" onClick={() => triggerToast('EcoMatch AI matching algorithm active.')}>
                  <BrainAIIcon />
                  <span className="center-ai-text">AI MATCHING</span>
                </div>
              </div>

              {/* Right Column: Upcycled Products */}
              <div className="right-cards-col">
                <div className="right-card-item" onClick={() => triggerToast('Upcycled value stream: Packaging')}>
                  <div className="right-card-badge">
                    <PackagingIcon />
                    Packaging
                  </div>
                  <img src={packagingImg} alt="Paper packaging" className="right-card-img" />
                </div>

                <div className="right-card-item" onClick={() => triggerToast('Upcycled value stream: Skincare')}>
                  <div className="right-card-badge">
                    <SkincareIcon />
                    Skincare
                  </div>
                  <img src={skincareImg} alt="Skincare packaging" className="right-card-img" />
                </div>

                <div className="right-card-item" onClick={() => triggerToast('Upcycled value stream: Furniture')}>
                  <div className="right-card-badge">
                    <FurnitureIcon />
                    Furniture
                  </div>
                  <img src={furnitureImg} alt="Furniture chair" className="right-card-img" />
                </div>

                <div className="right-card-item" onClick={() => triggerToast('Upcycled value stream: Feed')}>
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
              <button className="landing-btn-list" onClick={() => triggerToast('Opening materials listing form...')}>
                List Materials
              </button>
              <button className="landing-btn-source" onClick={() => triggerToast('Opening marketplace sourcing directory...')}>
                Source Materials
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
        </div>
      )}

      {/* ============================================================================
         2. MESSAGES INBOX VIEW (messages) - matching message.jpg
         ============================================================================ */}
      {currentPage === 'messages' && (
        <div className="inbox-page-wrapper">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />
          <main className="inbox-main-content">
            <Topnav triggerToast={triggerToast} />
            {/* View Container */}
            <div className="inbox-view-container">
              <h1 className="inbox-view-title">Inbox</h1>

              {/* Grid Layout (Conversations, Chat, Deal Info) */}
              <div className="inbox-panel-grid">
                
                {/* Column 1: Conversations List */}
                <div className="conversations-col">
                  <div className="conversations-header">CONVERSATIONS</div>
                  <ul className="conversations-list">
                    {conversationItems.map((item) => (
                      <li key={item.id}>
                        <button 
                          className={`conversation-item-btn ${activeConvId === item.id ? 'active' : ''}`}
                          onClick={() => setActiveConvId(item.id)}
                        >
                          {item.avatarType === 'user' && (
                            <div className="conv-avatar-wrapper">
                              <img src={avatarImg} alt="User Avatar" className="conv-avatar-img" />
                            </div>
                          )}
                          {item.avatarType === 'purple-box' && (
                            <div className="conv-avatar-wrapper" style={{ backgroundColor: '#ECE9F9', color: '#7C3AED' }}>
                              <PackagingIcon size={20} />
                            </div>
                          )}
                          {item.avatarType === 'green-leaf' && (
                            <div className="conv-avatar-leaf">
                              <Leaf size={18} fill="currentColor" />
                            </div>
                          )}

                          <div className="conv-details">
                            <div className="conv-top-row">
                              <span className="conv-name">{item.name}</span>
                              <span className="conv-meta">
                                {item.type === 'exchange' && <ArrowLeftRight size={10} />}
                                {item.type === 'left-arrow' && <span style={{ fontSize: '10px' }}>←</span>}
                                {item.time}
                              </span>
                            </div>
                            <p className="conv-snippet">{item.snippet}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Chat Display */}
                <div className="chat-col">
                  <div className="chat-header">
                    <div className="chat-partner-info">
                      <div className="chat-partner-avatar">
                        {activeConvId.startsWith('biopack') ? <PackagingIcon size={18} /> : <Leaf size={16} fill="currentColor" />}
                      </div>
                      <span className="chat-partner-name">
                        {activeConvId.startsWith('biopack') ? 'BioPack Solutions' : 'GreenBrew Co.'}
                      </span>
                      <ArrowLeftRight size={14} style={{ color: '#9CA3AF', cursor: 'pointer' }} />
                      <div className="chat-action-badge-circle">
                        <Leaf size={12} fill="currentColor" />
                      </div>
                    </div>

                    <button className="inbox-topnav-btn" aria-label="More options" onClick={() => triggerToast('Conversation actions')}>
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  {/* Deal Status Bar */}
                  <div className="chat-status-bar">
                    Deal Status: Matching finalized (95%)
                  </div>

                  {/* Scrollable Messages Panel */}
                  <div className="chat-messages-container">
                    {chatHistories[activeConvId]?.map((msg) => (
                      <div key={msg.id} className={`chat-message-row ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                        <div className="chat-msg-avatar-group">
                          {msg.sender === 'them' && (
                            <div className="chat-msg-avatar-icon">
                              {activeConvId.startsWith('biopack') ? <PackagingIcon size={15} /> : <Leaf size={14} fill="currentColor" />}
                            </div>
                          )}
                          <div className="chat-msg-bubble">
                            {msg.text}
                          </div>
                        </div>
                        <span className="chat-msg-meta">
                          {msg.sender === 'me' ? 'Sent' : 'Received'} {msg.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Message Input Box */}
                  <form className="chat-input-bar" onSubmit={handleSendMessage}>
                    <div className="chat-input-wrapper">
                      <input 
                        type="text" 
                        className="chat-input-field" 
                        placeholder="Type a message..." 
                        value={typedMessage}
                        onChange={(e) => setTypedMessage(e.target.value)}
                      />
                      <div className="chat-input-actions">
                        <button type="button" className="chat-input-action-btn" aria-label="Add Emoji" onClick={() => triggerToast('Emoji selection menu open')}>
                          <Smile size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <button type="submit" className="landing-btn-started" style={{ padding: '10px 14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Send message">
                      <Send size={16} />
                    </button>
                  </form>
                </div>

                {/* Column 3: Deal Confirmation Information */}
                <div className="deal-col">
                  <div>
                    <div className="deal-header">DEAL CONFIRMATION</div>
                    <div className="deal-content">
                      
                      {/* Product Detail Card */}
                      <div className="deal-product-card">
                        <img src={activeDetails.img} alt="Product Thumbnail" className="deal-product-img" />
                        <div className="deal-product-info">
                          <span className="deal-product-title">{activeDetails.title}</span>
                          <span className="deal-product-qty">{activeDetails.qty}</span>
                        </div>
                      </div>

                      {/* Scheduled Pickup */}
                      <div className="deal-detail-row">
                        <div className="deal-detail-icon-circle green">
                          <Calendar size={16} />
                        </div>
                        <div className="deal-detail-info">
                          <span className="deal-detail-title">Scheduled pickup</span>
                          <span className="deal-detail-subtitle">{activeDetails.pickup}</span>
                        </div>
                      </div>

                      {/* Transport */}
                      <div className="deal-detail-row">
                        <div className="deal-detail-icon-circle">
                          <Truck size={16} />
                        </div>
                        <div className="deal-detail-info">
                          <span className="deal-detail-title">Transport</span>
                          <span className="deal-detail-subtitle">{activeDetails.transport}</span>
                        </div>
                      </div>

                      <button className="deal-btn-action" onClick={() => triggerToast('Logistics process initialized. Creating contracts...')}>
                        Finalize Logistics & Create Contract
                      </button>

                    </div>
                  </div>

                  {/* Sticky bottom sparking action button */}
                  <div className="deal-sticky-footer">
                    <button className="deal-btn-spark" onClick={() => triggerToast('Executing full smart symbiosis contract setup...')}>
                      <Sparkles size={14} className="sparkle-icon" />
                      Finalize Logistics & Create Contract
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </main>
        </div>
      )}

      {/* ============================================================================
         3. SIGN IN VIEW (signin) - matching sign in page.jpeg
         ============================================================================ */}
      {currentPage === 'signin' && (
        <div className="page-container">
          <BackgroundWaves />

          {/* LEFT COLUMN */}
          <aside className="sidebar-left">
            <header className="brand-header">
              <SignInLogo size={42} />
              <div className="brand-text-container">
                <span className="brand-name">EcoMatch AI</span>
                <span className="brand-tagline">Industrial Symbiosis</span>
              </div>
            </header>

            <div className="quote-container">
              <span className="quote-mark open">“</span>
              <p className="quote-text">
                One company’s waste is another company’s resource.
              </p>
              <span className="quote-mark close" style={{ bottom: '-45px', right: '10px' }}>”</span>
              <div className="quote-line"></div>
            </div>

            <div className="illustration-container">
              <DotGrid color="#8B5CF6" style={{ top: '15%', right: '18%', width: '36px', height: '48px' }} />
              <FactoryIllustration />
            </div>
          </aside>

          {/* CENTER COLUMN (SIGN IN CARD) */}
          <main className="center-content">
            <div className="signin-card">
              <div className="card-header">
                <div className="brand-header">
                  <SignInLogo size={46} color="#15803D" />
                  <div className="brand-text-container" style={{ textAlign: 'left' }}>
                    <span className="brand-name">EcoMatch AI</span>
                    <span className="brand-tagline">Industrial Symbiosis</span>
                  </div>
                </div>
                <div className="card-header-titles">
                  <h1 className="card-title">Welcome Back</h1>
                  <p className="card-subtitle">
                    Sign in to continue managing your waste marketplace.
                  </p>
                </div>
              </div>

              <form className="signin-form" onSubmit={handleSignInSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="email-input">Email Address</label>
                  <div className="input-wrapper">
                    <span className="input-icon-left">
                      <Mail size={18} />
                    </span>
                    <input
                      id="email-input"
                      type="email"
                      className="form-input"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password-input">Password</label>
                  <div className="input-wrapper">
                    <span className="input-icon-left">
                      <Lock size={18} />
                    </span>
                    <input
                      id="password-input"
                      type={showPassword ? 'text' : 'password'}
                      className="form-input"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="input-icon-right"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      className="checkbox-custom"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember Me
                  </label>
                  <a href="#forgot" className="forgot-password" onClick={(e) => { e.preventDefault(); triggerToast('Password reset link sent to your email.'); }}>
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn-primary" disabled={signInLoading}>
                  {signInLoading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <div className="divider">
                <div className="divider-line"></div>
                <span className="divider-text">OR</span>
                <div className="divider-line"></div>
              </div>

              <div className="social-buttons">
                <button type="button" className="btn-social" onClick={() => triggerToast('Connecting with Google...')}>
                  <GoogleIcon />
                  Continue with Google
                </button>
                <button type="button" className="btn-social" onClick={() => triggerToast('Connecting with LinkedIn...')}>
                  <LinkedInIcon />
                  Continue with LinkedIn
                </button>
              </div>

              <div className="card-footer">
                Don't have an account? 
                <a href="#create" className="link-signup" onClick={(e) => { e.preventDefault(); triggerToast('Redirecting to registration page...'); }}>
                  Create Account
                </a>
              </div>
            </div>
          </main>

          {/* RIGHT COLUMN */}
          <aside className="sidebar-right">
            <div className="stat-widget">
              <div className="widget-icon-container">
                <Leaf size={22} fill="currentColor" />
              </div>
              <div className="widget-content">
                <span className="widget-title">CO₂ Impact Saved</span>
                <div className="widget-value-container">
                  <span className="widget-value">34.7</span>
                  <span className="widget-unit">Tons</span>
                </div>
                <span className="widget-change">+21% this month</span>
              </div>
            </div>

            <div className="quote-container" style={{ margin: 'auto 0 0 0', position: 'relative' }}>
              <span className="quote-mark open" style={{ top: '-45px', left: '-20px' }}>“</span>
              <p className="quote-text">
                Building a sustainable tomorrow through smart connections today.
              </p>
              <span className="quote-mark close" style={{ bottom: '-45px', right: '10px' }}>”</span>
              <div className="quote-line"></div>
            </div>

            <div className="illustration-container" style={{ alignSelf: 'flex-end', width: '100%' }}>
              <div style={{ position: 'absolute', bottom: '65%', left: '15%', zIndex: 3 }}>
                <div className="badge-recycle">
                  <Recycle size={28} />
                </div>
              </div>
              <DotGrid color="#4ADE80" style={{ bottom: '70%', right: '5%', width: '36px', height: '48px' }} />
              <WindTurbineIllustration />
            </div>
          </aside>
        </div>
      )}

      {/* ============================================================================
         4. MATERIAL PREFERENCES VIEW (preferences) - matching material preferences.jpeg
         ============================================================================ */}
      {currentPage === 'preferences' && (
        <div className="pref-page-wrapper">
          {/* Header Navigation Bar */}
          <header className="navbar">
            <div className="navbar-brand">
              <SignInLogo size={34} color="#15803D" />
              <span className="navbar-brand-name">EcoMatch AI</span>
            </div>

            <nav>
              <ul className="navbar-nav">
                <li><a href="#industries" className="navbar-nav-link" onClick={(e) => e.preventDefault()}>Industries</a></li>
                <li><a href="#how" className="navbar-nav-link" onClick={(e) => e.preventDefault()}>How it Works</a></li>
                <li><a href="#marketplace" className="navbar-nav-link" onClick={(e) => e.preventDefault()}>Marketplace</a></li>
                <li><a href="#pricing" className="navbar-nav-link" onClick={(e) => e.preventDefault()}>Pricing</a></li>
              </ul>
            </nav>

            <div className="navbar-actions">
              <button className="navbar-action-item" onClick={() => triggerToast('Location: Pune, India')}>
                <Globe size={18} />
                Pune, India
                <ChevronDown size={14} />
              </button>

              <button className="navbar-icon-btn" aria-label="Notifications" onClick={() => triggerToast('No new notifications')}>
                <Bell size={20} />
              </button>

              <button className="navbar-icon-btn" aria-label="Profile outline" onClick={() => triggerToast('Opening profile setup...')}>
                <User size={20} />
              </button>

              <div className="navbar-profile" onClick={() => triggerToast('Opening user profile menu...')}>
                <img src={avatarImg} alt="User headshot" className="profile-avatar" />
                <ChevronDown size={14} style={{ color: '#475569' }} />
              </div>
            </div>
          </header>

          {/* Main content body */}
          <main className="pref-content">
            <h1 className="pref-title">Complete Your Business Profile.</h1>

            <div className="pref-card">
              {/* Steps Progress Tracker */}
              <div className="steps-container">
                <ul className="steps-list">
                  <li className="step-item completed">
                    <span className="step-icon-check">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    Business Info
                  </li>
                  
                  <li className="step-arrow">→</li>
                  
                  <li className="step-item active">
                    2. Material Preferences
                  </li>
                  
                  <li className="step-arrow">→</li>
                  
                  <li className="step-item">
                    3. Logistics
                  </li>
                </ul>

                {/* Progress bar line */}
                <div className="progress-bar-segmented">
                  <div className="progress-segment green"></div>
                  <div className="progress-segment purple"></div>
                  <div className="progress-segment gray"></div>
                </div>
              </div>

              {/* Question 1: What best describes your business? */}
              <section className="pref-section">
                <h2 className="pref-section-title">What best describes your business?</h2>
                <div className="business-type-grid">
                  
                  {/* Generator Card */}
                  <div 
                    className={`business-card ${selectedBusinessTypes.generator ? 'selected' : ''}`}
                    onClick={() => toggleBusinessType('generator')}
                  >
                    <div className="business-card-left">
                      <GeneratorIcon />
                    </div>
                    <div className="business-card-right">
                      <span className="business-card-title">Generator</span>
                      <span className="business-card-subtitle">(Supplier)</span>
                    </div>
                    {selectedBusinessTypes.generator && (
                      <div className="card-select-badge">
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  {/* Upcycler Card */}
                  <div 
                    className={`business-card ${selectedBusinessTypes.upcycler ? 'selected' : ''}`}
                    onClick={() => toggleBusinessType('upcycler')}
                  >
                    <div className="business-card-left">
                      <UpcyclerIcon />
                    </div>
                    <div className="business-card-right">
                      <span className="business-card-title">Upcycler</span>
                      <span className="business-card-subtitle">(Manufacturer)</span>
                    </div>
                    {selectedBusinessTypes.upcycler && (
                      <div className="card-select-badge">
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}
                  </div>

                </div>
              </section>

              {/* Question 2: Select Primary Material Interests */}
              <section className="pref-section">
                <h2 className="pref-section-title">Select Primary Material Interests</h2>
                <div className="materials-grid">
                  {materials.map((m) => (
                    <div 
                      key={m.id}
                      className={`material-card ${m.selection === 'primary' ? 'primary' : ''}`}
                      onClick={() => handleMaterialCardClick(m.id)}
                      title="Click card to toggle between Primary selection"
                    >
                      <div className="material-card-content">
                        <div className="material-icon-wrapper">
                          {m.icon}
                        </div>
                        <span className="material-name">{m.name}</span>
                      </div>

                      {/* Custom Toggle Switch */}
                      <div 
                        className={`toggle-switch ${m.selection !== 'none' ? 'on' : 'off'}`}
                        onClick={(e) => handleMaterialToggleClick(e, m.id)}
                        title="Toggle to enable/disable material"
                      >
                        <div className="toggle-thumb"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Question 3: Key transport capabilities? */}
              <section className="pref-section">
                <h2 className="pref-section-title">Key transport capabilities?</h2>
                <div className="transport-grid">
                  
                  {/* Local Pickup */}
                  <div 
                    className={`transport-card ${transportCapabilities.local ? 'selected' : ''}`}
                    onClick={() => toggleTransportCapability('local')}
                  >
                    <div className="checkbox-icon">
                      {transportCapabilities.local && <Check size={12} strokeWidth={3} />}
                    </div>
                    Local Pickup
                  </div>

                  {/* Freight Delivery */}
                  <div 
                    className={`transport-card ${transportCapabilities.freight ? 'selected' : ''}`}
                    onClick={() => toggleTransportCapability('freight')}
                  >
                    <div className="checkbox-icon">
                      {transportCapabilities.freight && <Check size={12} strokeWidth={3} />}
                    </div>
                    Freight Delivery
                  </div>

                  {/* Courier Services */}
                  <div 
                    className={`transport-card ${transportCapabilities.courier ? 'selected' : ''}`}
                    onClick={() => toggleTransportCapability('courier')}
                  >
                    <div className="checkbox-icon">
                      {transportCapabilities.courier && <Check size={12} strokeWidth={3} />}
                    </div>
                    Courier Services
                  </div>

                </div>
              </section>

              {/* Action Button */}
              <div className="action-container">
                <button className="btn-save" onClick={handleSavePreferences}>
                  Save & Continue
                </button>
              </div>

            </div>
          </main>
        </div>
      )}

      {/* ============================================================================
         5. ACTIVE WASTE INVENTORY VIEW (activeInventory) - active waste inventory.jpeg
         ============================================================================ */}
      {currentPage === 'activeInventory' && (
        <div className="inbox-page-wrapper">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />
          <main className="inbox-main-content">
            <Topnav triggerToast={triggerToast} />
            
            <div className="inbox-view-container" style={{ overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 className="inbox-view-title" style={{ margin: 0 }}>My Listings</h1>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#111827' }}>Generator Dashboard</span>
                  <br />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>(Listing View)</span>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="inventory-stats-grid">
                
                {/* Card 1 */}
                <div className="inventory-stat-card">
                  <div className="inventory-stat-header">
                    <span className="inventory-stat-label">Total Waste Listed<br />(this month)</span>
                    <div className="inventory-stat-check">
                      <Check size={12} strokeWidth={3.5} />
                    </div>
                  </div>
                  <span className="inventory-stat-val">12.4 Tons</span>
                  <div className="inventory-stat-trend green">
                    <span>▲ +1.2%</span>
                  </div>
                  <div className="inventory-stat-sparkline">
                    <svg viewBox="0 0 100 30" style={{ width: '100%', height: '40px', display: 'block' }}>
                      <defs>
                        <linearGradient id="grad-green-stat" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5 L 100 30 L 0 30 Z" fill="url(#grad-green-stat)" />
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="inventory-stat-card">
                  <div className="inventory-stat-header">
                    <span className="inventory-stat-label">Active Listings</span>
                    <div className="inventory-stat-check">
                      <Check size={12} strokeWidth={3.5} />
                    </div>
                  </div>
                  <span className="inventory-stat-val">28</span>
                  <div className="inventory-stat-trend purple">
                    <span>▲ Growth</span>
                  </div>
                  <div className="inventory-stat-sparkline">
                    <svg viewBox="0 0 100 30" style={{ width: '100%', height: '40px', display: 'block' }}>
                      <defs>
                        <linearGradient id="grad-purple-stat" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5 L 100 30 L 0 30 Z" fill="url(#grad-purple-stat)" />
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="inventory-stat-card">
                  <div className="inventory-stat-header">
                    <span className="inventory-stat-label">AI Matches Found</span>
                    <div className="inventory-stat-check">
                      <Check size={12} strokeWidth={3.5} />
                    </div>
                  </div>
                  <span className="inventory-stat-val">22</span>
                  <div className="inventory-stat-trend purple">
                    <span>▲ Growth</span>
                  </div>
                  <div className="inventory-stat-sparkline">
                    <svg viewBox="0 0 100 30" style={{ width: '100%', height: '40px', display: 'block' }}>
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5 L 100 30 L 0 30 Z" fill="url(#grad-purple-stat)" />
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="inventory-stat-card">
                  <div className="inventory-stat-header">
                    <span className="inventory-stat-label">Impact Diverted</span>
                    <div className="inventory-stat-check">
                      <Check size={12} strokeWidth={3.5} />
                    </div>
                  </div>
                  <span className="inventory-stat-val">14.2 Tons</span>
                  <div className="inventory-stat-trend purple">
                    <span>▲ +1.2%</span>
                  </div>
                  <div className="inventory-stat-sparkline">
                    <svg viewBox="0 0 100 30" style={{ width: '100%', height: '40px', display: 'block' }}>
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5 L 100 30 L 0 30 Z" fill="url(#grad-purple-stat)" />
                      <path d="M 0 25 C 20 28, 40 18, 60 22 C 80 26, 90 5, 100 5" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Table section */}
              <div className="inventory-table-section">
                <div className="inventory-table-header">
                  <span className="inventory-table-title">MY ACTIVE WASTE INVENTORY</span>
                  <button className="btn-add-listing" onClick={() => triggerToast('Opening Create Listing form...')}>
                    <Plus size={16} strokeWidth={3} /> Add New Listing
                  </button>
                </div>

                <table className="inventory-table">
                  <thead>
                    <tr>
                      <th>Material</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Location</th>
                      <th>Availability</th>
                      <th>Match Score</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1: Spent Brewery Grains */}
                    <tr>
                      <td>
                        <div className="inventory-material-cell">
                          <img src={feedImg} alt="Spent Brewery Grains" className="inventory-material-img" />
                          <div className="inventory-material-info">
                            <span className="inventory-material-name">Spent Brewery Grains</span>
                            <span className="inventory-material-sub">High protein bowery byproduct</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge-organic-waste">Organic Waste</span>
                      </td>
                      <td>
                        <span className="inventory-qty-text">500kg/wk</span>
                      </td>
                      <td>
                        <span className="inventory-loc-text">Pune</span>
                      </td>
                      <td>
                        <span className="badge-status-available">Available</span>
                      </td>
                      <td>
                        <div className="circular-score-wrapper">
                          <svg className="circular-score-svg" viewBox="0 0 36 36">
                            <path className="circular-score-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="circular-score-bar" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <span className="circular-score-text">92%</span>
                        </div>
                      </td>
                      <td>
                        <button className="btn-view-match" onClick={() => triggerToast('Viewing match details for Brewery Grains...')}>
                          View Match
                        </button>
                      </td>
                    </tr>

                    {/* Row 2: Used Coffee Grounds */}
                    <tr>
                      <td>
                        <div className="inventory-material-cell">
                          <img src={coffeeImg} alt="Used Coffee Grounds" className="inventory-material-img" />
                          <div className="inventory-material-info">
                            <span className="inventory-material-name">Used Coffee Grounds</span>
                            <span className="inventory-material-sub">Post-consumner coffee waste</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge-organic-waste">Organic Waste</span>
                      </td>
                      <td>
                        <span className="inventory-qty-text">120kg/wk</span>
                      </td>
                      <td>
                        <span className="inventory-loc-text">Pune</span>
                      </td>
                      <td>
                        <span className="badge-status-available">Available</span>
                      </td>
                      <td>
                        <div className="circular-score-wrapper">
                          <svg className="circular-score-svg" viewBox="0 0 36 36">
                            <path className="circular-score-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="circular-score-bar" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <span className="circular-score-text">85%</span>
                        </div>
                      </td>
                      <td>
                        <button className="btn-view-match" onClick={() => setCurrentPage('listingsDetails')}>
                          View Match
                        </button>
                      </td>
                    </tr>

                    {/* Row 3: Fabric Scraps */}
                    <tr>
                      <td>
                        <div className="inventory-material-cell">
                          <img src={fabricImg} alt="Fabric Scraps" className="inventory-material-img" />
                          <div className="inventory-material-info">
                            <span className="inventory-material-name">Fabric Scraps</span>
                            <span className="inventory-material-sub">Cotton blend scraps</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge-textile-waste">Textile Waste</span>
                      </td>
                      <td>
                        <span className="inventory-qty-text">75kg/wk</span>
                      </td>
                      <td>
                        <span className="inventory-loc-text">Mumbai</span>
                      </td>
                      <td>
                        <span className="badge-status-pending">Pending</span>
                      </td>
                      <td>
                        <div className="circular-score-wrapper">
                          <svg className="circular-score-svg" viewBox="0 0 36 36">
                            <path className="circular-score-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="circular-score-bar" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <span className="circular-score-text">92%</span>
                        </div>
                      </td>
                      <td>
                        <button className="btn-view-match" onClick={() => triggerToast('Viewing match details for Fabric Scraps...')}>
                          View Match
                        </button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>
          </main>
        </div>
      )}

      {/* ============================================================================
         6. LISTING DETAILS VIEW (listingsDetails) - my listings.jpeg
         ============================================================================ */}
      {currentPage === 'listingsDetails' && (
        <div className="inbox-page-wrapper">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />
          <main className="inbox-main-content">
            <Topnav triggerToast={triggerToast} />

            <div className="inbox-view-container" style={{ overflowY: 'auto' }}>
              <div 
                className="details-back-header"
                onClick={() => setCurrentPage('activeInventory')}
              >
                <ArrowLeft size={18} />
                <span>Listing Details: Used Coffee Grounds</span>
              </div>

              <div className="details-grid">
                
                {/* Left Card */}
                <div className="details-main-card">
                  <h1 className="details-main-title">USED COFFEE GROUNDS - High Purity - Daily Supply.</h1>
                  
                  <div className="details-image-gallery">
                    <img src={coffeeImg} alt="Coffee Grounds 1" className="details-gallery-img" />
                    <img src={fabricImg} alt="Fabric waste" className="details-gallery-img" />
                    <img src={woodImg} alt="Wood offcuts" className="details-gallery-img" />
                    <img src={packagingImg} alt="Packaging" className="details-gallery-img" />
                    <img src={coffeeImg} alt="Coffee grounds 2" className="details-gallery-img" />
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Material Description</span>
                    <p className="details-section-desc">
                      Freshly extracted in used coffee grounds - mpt, high protein quality - materials tinied, dried - wood, packaged, consumer father and lonest, coffee.
                    </p>
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Quantity</span>
                    <span className="details-section-val">120kg/week</span>
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Source</span>
                    <span className="details-section-val">Pune Cafe</span>
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Logistics</span>
                    <span className="details-section-val">Local Pickup Recommended</span>
                  </div>
                </div>

                {/* Right Card / Sidebar */}
                <div className="details-sidebar-col">
                  
                  {/* Compatibility Card */}
                  <div className="compatibility-card">
                    <h2 className="compatibility-title">AI Match and Compatibility</h2>
                    
                    <div className="comp-header-row">
                      <div className="comp-gauge">
                        <svg className="comp-gauge-svg" viewBox="0 0 36 36">
                          <path className="comp-gauge-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="comp-gauge-bar" strokeDasharray="95, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <span className="comp-gauge-text">95%</span>
                      </div>
                      
                      <div className="comp-partner-info">
                        <span className="comp-partner-name">BioSkins Skincare Co.</span>
                        <span className="comp-partner-sub">Hypothetical Compatibility</span>
                      </div>
                    </div>

                    <div className="comp-match-matches">Matche matches.</div>
                    
                    <div className="comp-why-label">Why it matches:</div>
                    <p className="comp-why-text">
                      Distance (5km), Purity (92%), Volume Match (Excellent)
                    </p>

                    <div className="comp-btn-group">
                      <button className="btn-request-source" onClick={() => triggerToast('Sourcing request sent to BioSkins Skincare Co.!')}>
                        Request to Source
                      </button>
                      <button className="btn-message-seller" onClick={() => setCurrentPage('messages')}>
                        Message Seller
                      </button>
                    </div>
                  </div>

                  {/* Map Card */}
                  <div className="map-card">
                    <div className="map-container">
                      <svg className="map-svg-grid" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="#E8ECEF" />
                        <line x1="10" y1="0" x2="10" y2="200" stroke="#FFFFFF" strokeWidth="6" />
                        <line x1="50" y1="0" x2="50" y2="200" stroke="#FFFFFF" strokeWidth="8" />
                        <line x1="90" y1="0" x2="90" y2="200" stroke="#FFFFFF" strokeWidth="6" />
                        <line x1="140" y1="0" x2="140" y2="200" stroke="#FFFFFF" strokeWidth="8" />
                        <line x1="180" y1="0" x2="180" y2="200" stroke="#FFFFFF" strokeWidth="4" />
                        
                        <line x1="0" y1="30" x2="200" y2="30" stroke="#FFFFFF" strokeWidth="6" />
                        <line x1="0" y1="80" x2="200" y2="80" stroke="#FFFFFF" strokeWidth="8" />
                        <line x1="0" y1="120" x2="200" y2="120" stroke="#FFFFFF" strokeWidth="6" />
                        <line x1="0" y1="160" x2="200" y2="160" stroke="#FFFFFF" strokeWidth="8" />
                        
                        <path d="M 0 100 C 60 100, 100 120, 200 60" fill="none" stroke="#FFFFFF" strokeWidth="8" />

                        <path d="M 60 55 C 100 70, 110 110, 140 120" fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="3 3" />
                        <path d="M 60 55 C 100 70, 110 110, 140 120" fill="none" stroke="#059669" strokeWidth="1.5" />

                        <g transform="translate(60, 55)">
                          <circle cx="0" cy="0" r="12" fill="#059669" fillOpacity="0.2" />
                          <circle cx="0" cy="0" r="5" fill="#059669" stroke="#FFFFFF" strokeWidth="1.5" />
                        </g>

                        <g transform="translate(140, 120)">
                          <circle cx="0" cy="0" r="12" fill="#7C3AED" fillOpacity="0.2" />
                          <circle cx="0" cy="0" r="5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </main>
        </div>
      )}

      {/* ============================================================================
         7. WASTE MARKETPLACE VIEW (marketplace) - waste marketplace.jpeg
         ============================================================================ */}
      {currentPage === 'marketplace' && (
        <div className="inbox-page-wrapper">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />
          <main className="inbox-main-content">
            <Topnav triggerToast={triggerToast} />

            <div className="inbox-view-container" style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 className="inbox-view-title">Waste Marketplace</h1>

              <div className="marketplace-layout">
                {/* Left filters panel */}
                <aside className="filters-sidebar">
                  {/* Category Filter */}
                  <div className="filter-group">
                    <span className="filter-title">Category</span>
                    
                    <label className="filter-option">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox" 
                        checked={filterOrganic} 
                        onChange={(e) => setFilterOrganic(e.target.checked)} 
                      />
                      Organic
                    </label>

                    <label className="filter-option">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox" 
                        checked={filterTextiles} 
                        onChange={(e) => setFilterTextiles(e.target.checked)} 
                      />
                      Textiles
                    </label>

                    <label className="filter-option">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox" 
                        checked={filterWood} 
                        onChange={(e) => setFilterWood(e.target.checked)} 
                      />
                      Wood
                    </label>

                    <label className="filter-option">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox" 
                        checked={filterPlastics} 
                        onChange={(e) => setFilterPlastics(e.target.checked)} 
                      />
                      Plastics
                    </label>

                    <label className="filter-option">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox" 
                        checked={filterMetals} 
                        onChange={(e) => setFilterMetals(e.target.checked)} 
                      />
                      Metals
                    </label>
                  </div>

                  {/* Radius Filter */}
                  <div className="filter-group">
                    <span className="filter-title">Radius</span>
                    
                    <label className="filter-option">
                      <input 
                        type="radio" 
                        name="radius" 
                        className="filter-radio" 
                        checked={filterRadius === '25km'} 
                        onChange={() => setFilterRadius('25km')} 
                      />
                      25km
                    </label>

                    <label className="filter-option">
                      <input 
                        type="radio" 
                        name="radius" 
                        className="filter-radio" 
                        checked={filterRadius === '50km'} 
                        onChange={() => setFilterRadius('50km')} 
                      />
                      50km
                    </label>

                    <label className="filter-option">
                      <input 
                        type="radio" 
                        name="radius" 
                        className="filter-radio" 
                        checked={filterRadius === '100km+'} 
                        onChange={() => setFilterRadius('100km+')} 
                      />
                      100km+
                    </label>
                  </div>

                  {/* Quantity Filter */}
                  <div className="filter-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span className="filter-title">Quantity</span>
                      <span className="filter-sublabel" style={{ fontWeight: 705 }}>kg/week</span>
                    </div>
                    <div className="qty-slider-container">
                      <div className="slider-rail">
                        <div className="slider-track"></div>
                        <div className="slider-handle"></div>
                      </div>
                      <div className="slider-labels">
                        <span>0</span>
                        <span>12,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Purity Filter */}
                  <div className="filter-group">
                    <span className="filter-title">Purity</span>
                    <label className="filter-option">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox" 
                        checked={filterPurity} 
                        onChange={(e) => setFilterPurity(e.target.checked)} 
                      />
                      90%+
                    </label>
                    <label className="filter-option">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox" 
                        defaultChecked={false} 
                      />
                      90%+
                    </label>
                  </div>

                  {/* Availability Date dropdown */}
                  <div className="filter-group">
                    <span className="filter-title">Availability Date</span>
                    <select className="availability-select" defaultValue="Wed Aug" onChange={() => triggerToast('Availability filter changed')}>
                      <option value="Wed Aug">Wed Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                    </select>
                  </div>
                </aside>

                {/* Right Listings Grid */}
                <div className="listings-grid-scroll">
                  <div className="listings-grid">
                    {[
                      {
                        id: 1,
                        title: "120kg Spent Coffee Grounds - Daily Supply",
                        type: "Organic",
                        typeIcon: <Box size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: coffeeImg,
                      },
                      {
                        id: 2,
                        title: "120kg Spent Coffee Grounds - Daily Supply",
                        type: "Textiles",
                        typeIcon: <Recycle size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: coffeeImg,
                      },
                      {
                        id: 3,
                        title: "120kg Spent Coffee Grounds - Daily Supply",
                        type: "Textiles",
                        typeIcon: <Recycle size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: fabricImg,
                      },
                      {
                        id: 4,
                        title: "120kg Spent Coffee Grounds - Daily Supply",
                        type: "Wood",
                        typeIcon: <Box size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: fabricImg,
                      },
                      {
                        id: 5,
                        title: "120kg Spent Coffee Grounds - Daily Supply",
                        type: "Wood",
                        typeIcon: <Box size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: coffeeImg,
                      },
                      {
                        id: 6,
                        title: "120kg Used Spent Coffee - Taotic Supply",
                        type: "Organic",
                        typeIcon: <Box size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 85,
                        img: fabricImg,
                      },
                      {
                        id: 7,
                        title: "120kg Spent Coffee Grounds - Daily Supply",
                        type: "Textiles",
                        typeIcon: <Recycle size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: coffeeImg,
                      },
                      {
                        id: 8,
                        title: "120kg Spent Coffee Grounds - Coffee",
                        type: "Organic",
                        typeIcon: <Box size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: woodImg,
                      },
                      {
                        id: 9,
                        title: "120kg Spent Coffee Grains - Grounds",
                        type: "Organic",
                        typeIcon: <Box size={14} />,
                        loc: "Pune",
                        qty: "120kg/week",
                        score: 94,
                        img: fabricImg,
                      }
                    ].map((item) => (
                      <div key={item.id} className="listing-item-card">
                        <div className="card-top-header">
                          <img src={item.img} alt={item.title} className="card-thumb-img" />
                          <span className="card-top-title">{item.title}</span>
                        </div>
                        
                        <div className="card-meta-row">
                          <div className="card-meta-item">
                            <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 800 }}>Material Type</span>
                            <span className="card-meta-right-val" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: '#374151' }}>
                              {item.typeIcon}
                              {item.type}
                            </span>
                          </div>
                          
                          <div className="card-meta-item">
                            <MapPin size={12} />
                            <span>{item.loc}</span>
                            <span className="card-meta-right-val" style={{ fontSize: '11.5px', color: '#374151' }}>{item.qty}</span>
                          </div>
                        </div>

                        <div className="card-score-row">
                          <div className="circular-score-wrapper" style={{ width: '36px', height: '36px' }}>
                            <svg className="circular-score-svg" viewBox="0 0 36 36">
                              <path className="circular-score-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="circular-score-bar" strokeDasharray={`${item.score}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <span className="circular-score-text" style={{ fontSize: '10.5px' }}>{item.score}%</span>
                          </div>
                          <span className="card-score-label">AI Compatibility Score</span>
                        </div>

                        <div className="card-btn-group">
                          <button 
                            className="btn-card-details" 
                            onClick={() => setCurrentPage('listingsDetails')}
                          >
                            View Details
                          </button>
                          <button 
                            className="btn-card-source" 
                            onClick={() => triggerToast(`Sourcing request sent for card #${item.id} (${item.title})!`)}
                          >
                            Request to Source
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      )}

      {/* ============================================================================
         GLOBAL DEVELOPER ROUTE SWITCHER (Fixed bottom-left)
         ============================================================================ */}
      <div className="page-switch-menu" style={{ flexWrap: 'wrap', maxWidth: '450px' }}>
        <button 
          className={`btn-switch-page ${currentPage === 'listsource' ? 'active' : ''}`}
          onClick={() => setCurrentPage('listsource')}
        >
          Landing (List/Source)
        </button>
        <button 
          className={`btn-switch-page ${currentPage === 'messages' ? 'active' : ''}`}
          onClick={() => setCurrentPage('messages')}
        >
          Inbox (Messages)
        </button>
        <button 
          className={`btn-switch-page ${currentPage === 'signin' ? 'active' : ''}`}
          onClick={() => setCurrentPage('signin')}
        >
          Sign In
        </button>
        <button 
          className={`btn-switch-page ${currentPage === 'preferences' ? 'active' : ''}`}
          onClick={() => setCurrentPage('preferences')}
        >
          Preferences
        </button>
        <button 
          className={`btn-switch-page ${currentPage === 'activeInventory' ? 'active' : ''}`}
          onClick={() => setCurrentPage('activeInventory')}
        >
          Active Waste Inventory
        </button>
        <button 
          className={`btn-switch-page ${currentPage === 'listingsDetails' ? 'active' : ''}`}
          onClick={() => setCurrentPage('listingsDetails')}
        >
          My Listings Details
        </button>
        <button 
          className={`btn-switch-page ${currentPage === 'marketplace' ? 'active' : ''}`}
          onClick={() => setCurrentPage('marketplace')}
        >
          Waste Marketplace
        </button>
      </div>
    </>
  );
}
