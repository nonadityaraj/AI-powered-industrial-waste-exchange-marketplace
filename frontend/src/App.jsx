import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// Import Page Components
import LandingPage from './components/pages/LandingPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import PreferencesPage from './components/pages/PreferencesPage';
import MessagesPage from './components/pages/MessagesPage';
import ListingsDetailsPage from './components/pages/ListingsDetailsPage';
import MarketplacePage from './components/pages/MarketplacePage';
import AboutUs from './components/pages/AboutUs';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsConditions from './components/pages/TermsConditions';

/* ============================================================================
   ROUTING
   ============================================================================ */
const PAGE_TO_PATH = {
  listsource: '/',
  signin: '/signin',
  signup: '/signup',
  preferences: '/preferences',
  marketplace: '/marketplace',
  listingsDetails: '/listing-details',
  messages: '/messages',
  about: '/about',
  privacy: '/privacy-policy',
  terms: '/terms-conditions',
};

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page])
);

export default function App() {
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Common Toast Function
  const triggerToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Adapter: existing components call setCurrentPage('key') -> navigate to its path
  const setCurrentPage = (page) => navigate(PAGE_TO_PATH[page] ?? '/');
  const currentPage = PATH_TO_PAGE[location.pathname] ?? 'listsource';

  const nav = { currentPage, setCurrentPage, triggerToast };

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

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<LandingPage {...nav} />} />
        <Route path="/signin" element={<SignInPage {...nav} />} />
        <Route path="/signup" element={<SignUpPage {...nav} />} />
        <Route path="/preferences" element={<PreferencesPage {...nav} />} />
        <Route path="/marketplace" element={<MarketplacePage {...nav} />} />
        <Route path="/listing-details" element={<ListingsDetailsPage {...nav} />} />
        <Route path="/messages" element={<MessagesPage {...nav} />} />
        <Route path="/about" element={<AboutUs {...nav} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy {...nav} />} />
        <Route path="/terms-conditions" element={<TermsConditions {...nav} />} />
        {/* Unknown paths fall back to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

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
          className={`btn-switch-page ${currentPage === 'signup' ? 'active' : ''}`}
          onClick={() => setCurrentPage('signup')}
        >
          Sign Up
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'preferences' ? 'active' : ''}`}
          onClick={() => setCurrentPage('preferences')}
        >
          Preferences
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
        <button
          className={`btn-switch-page ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          About Us
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'privacy' ? 'active' : ''}`}
          onClick={() => setCurrentPage('privacy')}
        >
          Privacy Policy
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'terms' ? 'active' : ''}`}
          onClick={() => setCurrentPage('terms')}
        >
          Terms & Conditions
        </button>
      </div>
    </>
  );
}
