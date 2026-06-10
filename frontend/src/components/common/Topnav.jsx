import React from 'react';
import { Search, Globe, ChevronDown, Bell, User } from 'lucide-react';
import avatarImg from '../../assets/avatar.png';

export const Topnav = ({ triggerToast }) => {
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
export default Topnav;
