import React from 'react';
import { Check, Plus } from 'lucide-react';
import Sidebar from '../common/Sidebar';
import Topnav from '../common/Topnav';

import coffeeImg from '../../assets/coffee_grounds.png';
import fabricImg from '../../assets/fabric_waste.png';
import feedImg from '../../assets/animal_feed.png';

export const ActiveInventoryPage = ({ currentPage, setCurrentPage, triggerToast }) => {
  return (
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
                        <span className="inventory-material-sub">High protein brewery byproduct</span>
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
                        <span className="inventory-material-sub">Post-consumer coffee waste</span>
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
  );
};
export default ActiveInventoryPage;
