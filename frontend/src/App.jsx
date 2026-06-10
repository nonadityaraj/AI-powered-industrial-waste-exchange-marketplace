import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// Import Page Components
import LandingPage from './components/pages/LandingPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import PreferencesPage from './components/pages/PreferencesPage';
import MessagesPage from './components/pages/MessagesPage';
import ActiveInventoryPage from './components/pages/ActiveInventoryPage';
import ListingsDetailsPage from './components/pages/ListingsDetailsPage';
import MarketplacePage from './components/pages/MarketplacePage';

/* ============================================================================
   ROUTING
   The pages were originally built to navigate via a `setCurrentPage('key')`
   prop. To switch to real URL routes without rewriting every page, we map each
   logical page key to a URL path and expose a `setCurrentPage` adapter that
   simply navigates. `currentPage` is derived from the current URL so the
   sidebar active states keep working.
   ============================================================================ */
const PAGE_TO_PATH = {
  listsource: '/',
  signin: '/signin',
  signup: '/signup',
  preferences: '/preferences',
  marketplace: '/marketplace',
  activeInventory: '/inventory',
  listingsDetails: '/listing-details',
  messages: '/messages',
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
        <Route path="/inventory" element={<ActiveInventoryPage {...nav} />} />
        <Route path="/listing-details" element={<ListingsDetailsPage {...nav} />} />
        <Route path="/messages" element={<MessagesPage {...nav} />} />
        {/* Unknown paths fall back to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* ============================================================================
         GLOBAL DEVELOPER ROUTE SWITCHER (Fixed bottom-left)
         Updates the URL via the same router as the rest of the app.
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
