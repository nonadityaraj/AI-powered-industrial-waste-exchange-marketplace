import React, { useState } from 'react';
import {
  BadgeCheck, MapPin, Star, Pencil, Clock, CheckCircle2, CalendarDays,
  Package, MessageSquare, User, Mail, Phone, Briefcase, Building2, Save, X
} from 'lucide-react';
import Sidebar from '../common/Sidebar';
import Topnav from '../common/Topnav';
import Footer from '../common/Footer';
import { CoffeeIcon, TextilesIcon, WoodIcon, GrainIcon } from '../common/Icons';
import avatarImg from '../../assets/avatar.png';

import coffeeImg from '../../assets/coffee_grounds.png';
import fabricImg from '../../assets/fabric_waste.png';
import woodImg from '../../assets/wood_offcuts.png';

const STATS = [
  { label: 'Completed Deals', value: '48', icon: <CheckCircle2 size={18} /> },
  { label: 'Avg. Response', value: '~2 hrs', icon: <Clock size={18} /> },
  { label: 'Member Since', value: 'Mar 2024', icon: <CalendarDays size={18} /> },
  { label: 'Active Listings', value: '6', icon: <Package size={18} /> },
];

const DETAIL_FIELDS = [
  { key: 'fullName', label: 'Full Name', icon: <User size={15} /> },
  { key: 'designation', label: 'Designation', icon: <Briefcase size={15} /> },
  { key: 'email', label: 'Email', icon: <Mail size={15} />, type: 'email' },
  { key: 'phone', label: 'Phone', icon: <Phone size={15} />, type: 'tel' },
  { key: 'location', label: 'Location', icon: <MapPin size={15} /> },
  { key: 'company', label: 'Company', icon: <Building2 size={15} /> },
];

const MATERIALS = [
  { name: 'Coffee', icon: <CoffeeIcon /> },
  { name: 'Textiles', icon: <TextilesIcon /> },
  { name: 'Wood', icon: <WoodIcon /> },
  { name: 'Brewery Grain', icon: <GrainIcon /> },
];

const LISTINGS = [
  { id: 1, title: 'Spent Coffee Grounds', qty: '120 kg/day', img: coffeeImg },
  { id: 2, title: 'Recycled Textile Fabric', qty: '350 kg/month', img: fabricImg },
  { id: 3, title: 'Premium Wood Offcuts', qty: '500 kg/month', img: woodImg },
];

const REVIEWS = [
  { id: 1, name: 'BioSkins Skincare Co.', rating: 5, text: 'Reliable supply and excellent material purity. Pickup was always on time.', initials: 'BS' },
  { id: 2, name: 'EcoInsulate Ltd.', rating: 4, text: 'Great communication and fair pricing. Would source from them again.', initials: 'EI' },
];

export const ProfilePage = ({ currentPage, setCurrentPage, triggerToast }) => {
  const [details, setDetails] = useState({
    fullName: 'Rahul Sharma',
    designation: 'Operations Manager',
    email: 'rahul@greenbrew.co',
    phone: '+91 98765 43210',
    location: 'Pune, India',
    company: 'GreenBrew Co.',
  });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(details);

  const completion = 85;

  const startEdit = () => {
    setDraft(details);
    setEditing(true);
  };
  const cancelEdit = () => setEditing(false);
  const saveEdit = () => {
    if (!draft.fullName.trim()) {
      triggerToast('Full name cannot be empty.', 'error');
      return;
    }
    setDetails(draft);
    setEditing(false);
    triggerToast('Profile details updated successfully!');
  };

  return (
    <div className="inbox-page-wrapper">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />

      <main className="inbox-main-content">
        <Topnav triggerToast={triggerToast} setCurrentPage={setCurrentPage} />

        <div className="inbox-view-container" style={{ overflowY: 'auto' }}>
          {/* ===== Header card ===== */}
          <div className="profile-hero">
            <div className="profile-hero-cover" />
            <div className="profile-hero-body">
              <div className="profile-hero-avatar">
                <img src={avatarImg} alt={details.fullName} />
                <span className="profile-hero-online" />
              </div>

              <div className="profile-hero-info">
                <div className="profile-hero-name-row">
                  <h1 className="profile-hero-name">{details.fullName}</h1>
                  <span className="profile-verified"><BadgeCheck size={15} /> Verified</span>
                </div>
                <div className="profile-hero-meta">
                  <span><Briefcase size={14} /> {details.designation}</span>
                  <span className="profile-hero-dot">·</span>
                  <span><Building2 size={14} /> {details.company}</span>
                  <span className="profile-hero-dot">·</span>
                  <span><MapPin size={14} /> {details.location}</span>
                </div>
                <div className="profile-hero-tags">
                  <span className="profile-role-tag generator">Generator</span>
                  <span className="profile-role-tag upcycler">Upcycler</span>
                  <span className="profile-hero-rating"><Star size={13} fill="currentColor" /> 4.8 · 52 reviews</span>
                </div>
              </div>

              <button className="profile-hero-edit" onClick={startEdit}>
                <Pencil size={15} /> Edit Profile
              </button>
            </div>

            {/* Completion bar */}
            <div className="profile-completion">
              <div className="profile-completion-top">
                <span>Profile completion</span>
                <strong>{completion}%</strong>
              </div>
              <div className="profile-completion-track">
                <div className="profile-completion-fill" style={{ width: `${completion}%` }} />
              </div>
            </div>
          </div>

          {/* ===== Stats ===== */}
          <div className="profile-stats-strip">
            {STATS.map((s) => (
              <div key={s.label} className="profile-stat">
                <div className="profile-stat-icon">{s.icon}</div>
                <div className="profile-stat-text">
                  <span className="profile-stat-value">{s.value}</span>
                  <span className="profile-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Body ===== */}
          <div className="profile-body-grid">
            {/* Left column */}
            <div className="profile-col">
              {/* Personal details */}
              <section className="dash-panel">
                <div className="dash-panel-head">
                  <h2 className="dash-panel-title">Personal Details</h2>
                  {!editing ? (
                    <button className="profile-edit-link" onClick={startEdit}>
                      <Pencil size={14} /> Edit
                    </button>
                  ) : (
                    <div className="profile-edit-actions">
                      <button className="profile-cancel-btn" onClick={cancelEdit}><X size={14} /> Cancel</button>
                      <button className="profile-save-btn" onClick={saveEdit}><Save size={14} /> Save</button>
                    </div>
                  )}
                </div>
                <div className="profile-details-grid">
                  {DETAIL_FIELDS.map((f) => (
                    <div key={f.key} className="profile-detail-item">
                      <span className="profile-detail-label">{f.icon}{f.label}</span>
                      {editing ? (
                        <input
                          className="pref-input"
                          type={f.type || 'text'}
                          value={draft[f.key]}
                          onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
                        />
                      ) : (
                        <span className="profile-detail-value">{details[f.key]}</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* About */}
              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">About</h2></div>
                <p className="profile-about-text">
                  {details.fullName} is the {details.designation} at {details.company}, a craft beverage producer
                  in {details.location} turning brewing and cafe byproducts into valuable secondary materials —
                  supplying spent coffee grounds, brewery grain, and textile offcuts to local upcyclers.
                </p>
              </section>

              {/* Listings */}
              <section className="dash-panel">
                <div className="dash-panel-head">
                  <h2 className="dash-panel-title">Active Listings</h2>
                  <button className="dash-link" onClick={() => setCurrentPage('listingsDetails')}>View all</button>
                </div>
                <div className="dash-list">
                  {LISTINGS.map((l) => (
                    <div key={l.id} className="dash-listing-row" onClick={() => setCurrentPage('listingsDetails')} style={{ cursor: 'pointer' }}>
                      <img src={l.img} alt={l.title} className="dash-listing-thumb" />
                      <div className="dash-listing-info">
                        <span className="dash-listing-title">{l.title}</span>
                        <span className="dash-listing-qty">{l.qty}</span>
                      </div>
                      <span className="listing-status-badge status-active">Active</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="profile-col">
              {/* Quick contact */}
              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">Contact</h2></div>
                <div className="profile-contact-list">
                  <a className="profile-contact-row" href={`mailto:${details.email}`}>
                    <span className="profile-contact-icon"><Mail size={16} /></span>
                    <span className="profile-contact-val">{details.email}</span>
                  </a>
                  <a className="profile-contact-row" href={`tel:${details.phone.replace(/\s/g, '')}`}>
                    <span className="profile-contact-icon"><Phone size={16} /></span>
                    <span className="profile-contact-val">{details.phone}</span>
                  </a>
                  <div className="profile-contact-row">
                    <span className="profile-contact-icon"><MapPin size={16} /></span>
                    <span className="profile-contact-val">{details.location}</span>
                  </div>
                </div>
                <button className="profile-contact-btn" onClick={() => setCurrentPage('messages')}>
                  <MessageSquare size={16} /> Open Inbox
                </button>
              </section>

              {/* Materials */}
              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">Materials We Handle</h2></div>
                <div className="profile-materials">
                  {MATERIALS.map((m) => (
                    <div key={m.name} className="profile-material-chip">
                      <span className="profile-material-icon">{m.icon}</span>
                      {m.name}
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">Reviews</h2></div>
                <div className="profile-reviews">
                  {REVIEWS.map((r) => (
                    <div key={r.id} className="profile-review">
                      <div className="profile-review-avatar">{r.initials}</div>
                      <div className="profile-review-body">
                        <div className="profile-review-top">
                          <span className="profile-review-name">{r.name}</span>
                          <span className="profile-review-stars">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <Star key={n} size={12} fill={n <= r.rating ? 'currentColor' : 'none'} />
                            ))}
                          </span>
                        </div>
                        <p className="profile-review-text">{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Account */}
              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">Account</h2></div>
                <div className="profile-account-actions">
                  <button className="profile-account-btn" onClick={() => setCurrentPage('preferences')}>
                    <Pencil size={15} /> Business Preferences
                  </button>
                  <button className="profile-account-btn" onClick={() => setCurrentPage('notifications')}>
                    <MessageSquare size={15} /> Notifications
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>

        <Footer variant="compact" triggerToast={triggerToast} setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
};
export default ProfilePage;
