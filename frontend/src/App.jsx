import React, { useState } from 'react';
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('listsource'); // Default to landing page
  const [notification, setNotification] = useState(null);

  // Common Toast Function
  const triggerToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'listsource':
        return <LandingPage setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      case 'signin':
        return <SignInPage setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      case 'signup':
        return <SignUpPage setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      case 'preferences':
        return <PreferencesPage setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      case 'messages':
        return <MessagesPage currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      case 'activeInventory':
        return <ActiveInventoryPage currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      case 'listingsDetails':
        return <ListingsDetailsPage currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      case 'marketplace':
        return <MarketplacePage currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} triggerToast={triggerToast} />;
    }
  };

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

      {/* Render selected view */}
      {renderCurrentPage()}

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
