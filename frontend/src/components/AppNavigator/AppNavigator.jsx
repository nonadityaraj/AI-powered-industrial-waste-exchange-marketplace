import { useEffect, useState } from 'react';
import './AppNavigator.css';

const STORAGE_KEY = 'navigatorCollapsed';

export default function AppNavigator({ currentPage, setCurrentPage, setListingDraft }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const savedState = window.localStorage.getItem(STORAGE_KEY);
    if (savedState !== null) {
      setCollapsed(savedState === 'true');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(collapsed));
  }, [collapsed]);

  return (
    <div className={`page-switch-menu ${collapsed ? 'collapsed' : ''}`}>
      <button
        className="navigator-handle"
        type="button"
        onClick={() => setCollapsed((value) => !value)}
        aria-label={collapsed ? 'Expand App Navigator' : 'Collapse App Navigator'}
        aria-expanded={!collapsed}
      >
        <span className="navigator-handle-menu">☰</span>
        <span className="navigator-handle-title">App Navigator</span>
        <span className="navigator-handle-arrow">{collapsed ? '>' : '<'}</span>
      </button>

      <div className="navigator-header">
        <div className="navigator-title">
          <span className="navigator-grip" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>App Navigator</span>
        </div>
        <button
          className="navigator-collapse-btn"
          type="button"
          onClick={() => setCollapsed(true)}
          title="Minimize panel"
          aria-label="Collapse App Navigator"
        >
          -
        </button>
      </div>

      <div className="navigator-content">
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
          className={`btn-switch-page ${currentPage === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentPage('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'createListing' ? 'active' : ''}`}
          onClick={() => { setListingDraft(null); setCurrentPage('createListing'); }}
        >
          Create Listing
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'profile' ? 'active' : ''}`}
          onClick={() => setCurrentPage('profile')}
        >
          Profile
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'notifications' ? 'active' : ''}`}
          onClick={() => setCurrentPage('notifications')}
        >
          Notifications
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'forgotPassword' ? 'active' : ''}`}
          onClick={() => setCurrentPage('forgotPassword')}
        >
          Forgot Password
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          About Us
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => setCurrentPage('contact')}
        >
          Contact Us
        </button>
        <button
          className={`btn-switch-page ${currentPage === 'feedback' ? 'active' : ''}`}
          onClick={() => setCurrentPage('feedback')}
        >
          Feedback
        </button>
      </div>
    </div>
  );
}
