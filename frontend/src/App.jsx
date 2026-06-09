import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Leaf, Recycle, Bell, Globe, ChevronDown, User, Check, ArrowRight } from 'lucide-react';
import avatarImg from './assets/avatar.png';

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
    {/* Steam */}
    <path d="M13 13 C13 10 15 10 15 7 M17 15 C17 12 19 12 19 9" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Generator body */}
    <rect x="10" y="19" width="28" height="20" rx="4" fill="#22C55E" stroke="#092C25" strokeWidth="1.5" />
    {/* Cooling vents */}
    <line x1="14" y1="24" x2="22" y2="24" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="29" x2="22" y2="29" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="34" x2="22" y2="34" stroke="#092C25" strokeWidth="1.5" strokeLinecap="round" />
    {/* Display screen */}
    <rect x="26" y="23" width="8" height="12" rx="2" fill="#EAB308" stroke="#092C25" strokeWidth="1.2" />
    {/* Lightning symbol */}
    <path d="M30 25 L28 29 H31 L29 33 L33 28 H30 L31 25 Z" fill="#FFFFFF" />
    {/* Generator cap */}
    <rect x="15" y="16" width="6" height="3" fill="#EAB308" stroke="#092C25" strokeWidth="1.2" />
  </svg>
);

const UpcyclerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#DCFCE7" />
    {/* Circular recycling loop using green paths */}
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('signin');
  const [notification, setNotification] = useState(null);

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
      // Smooth redirect transition to preferences page
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
        // Toggle selection levels: primary <-> secondary
        const nextSelection = m.selection === 'primary' ? 'secondary' : 'primary';
        return { ...m, selection: nextSelection };
      }
      return m;
    }));
  };

  const handleMaterialToggleClick = (e, id) => {
    e.stopPropagation(); // Avoid triggering card click
    setMaterials(prev => prev.map(m => {
      if (m.id === id) {
        // Switch between enabled (secondary) and disabled (none)
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
  };

  return (
    <>
      {/* Floating toast notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          zIndex: 1000,
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

      {/* Global CSS Inject for slideIn keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}} />

      {/* VIEWPORT CONTROLLER: SIGN IN PAGE */}
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

      {/* VIEWPORT CONTROLLER: MATERIAL PREFERENCES PAGE */}
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

      {/* Floating bottom-left route toggle menu for developers/reviewers */}
      <div className="page-switch-menu">
        <button 
          className={`btn-switch-page ${currentPage === 'signin' ? 'active' : ''}`}
          onClick={() => setCurrentPage('signin')}
        >
          Sign In Page
        </button>
        <button 
          className={`btn-switch-page ${currentPage === 'preferences' ? 'active' : ''}`}
          onClick={() => setCurrentPage('preferences')}
        >
          Material Preferences
        </button>
      </div>
    </>
  );
}
