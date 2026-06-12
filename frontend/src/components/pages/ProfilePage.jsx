import React from 'react';
import {
  BadgeCheck, MapPin, Star, Pencil, Clock, CheckCircle2, CalendarDays,
  Package, MessageSquare, Recycle, Box
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
  return (
    <div className="inbox-page-wrapper">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />

      <main className="inbox-main-content">
        <Topnav triggerToast={triggerToast} setCurrentPage={setCurrentPage} />

        <div className="inbox-view-container" style={{ overflowY: 'auto' }}>
          {/* Profile header card */}
          <div className="profile-cover-card">
            <div className="profile-cover" />
            <div className="profile-header-row">
              <div className="profile-avatar-lg">
                <img src={avatarImg} alt="GreenBrew Co." />
              </div>
              <div className="profile-identity">
                <div className="profile-name-row">
                  <h1 className="profile-company-name">GreenBrew Co.</h1>
                  <span className="profile-verified"><BadgeCheck size={16} /> Verified</span>
                </div>
                <div className="profile-meta-row">
                  <span className="profile-role-tag generator">Generator</span>
                  <span className="profile-role-tag upcycler">Upcycler</span>
                  <span className="profile-meta-item"><MapPin size={14} /> Pune, India</span>
                  <span className="profile-meta-item profile-rating"><Star size={14} fill="currentColor" /> 4.8 (52 reviews)</span>
                </div>
              </div>
              <button className="profile-edit-btn" onClick={() => { triggerToast('Opening profile editor...'); setCurrentPage('preferences'); }}>
                <Pencil size={15} /> Edit Profile
              </button>
            </div>
          </div>

          {/* Stats strip */}
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

          {/* Body grid */}
          <div className="profile-body-grid">
            {/* Left column */}
            <div className="profile-col">
              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">About</h2></div>
                <p className="profile-about-text">
                  GreenBrew Co. is a craft beverage producer in Pune turning brewing and cafe byproducts into
                  valuable secondary materials. We supply spent coffee grounds, brewery grain, and textile offcuts
                  to local upcyclers, and source recycled feedstock for our own packaging line.
                </p>
              </section>

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
            </div>

            {/* Right column */}
            <div className="profile-col">
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

              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">Impact Summary</h2></div>
                <div className="dash-impact-list">
                  <div className="dash-impact-row">
                    <div className="dash-impact-icon"><Box size={18} /></div>
                    <span className="dash-impact-label">Waste Diverted</span>
                    <span className="dash-impact-value">12.4 T</span>
                  </div>
                  <div className="dash-impact-row">
                    <div className="dash-impact-icon"><Recycle size={18} /></div>
                    <span className="dash-impact-label">CO₂ Saved</span>
                    <span className="dash-impact-value">34.7 T</span>
                  </div>
                </div>
              </section>

              <section className="dash-panel">
                <div className="dash-panel-head"><h2 className="dash-panel-title">Get in Touch</h2></div>
                <button className="profile-contact-btn" onClick={() => setCurrentPage('messages')}>
                  <MessageSquare size={16} /> Message GreenBrew Co.
                </button>
              </section>
            </div>
          </div>
        </div>

        <Footer variant="compact" triggerToast={triggerToast} />
      </main>
    </div>
  );
};
export default ProfilePage;
