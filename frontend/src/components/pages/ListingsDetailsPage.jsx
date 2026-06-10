import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Sidebar from '../common/Sidebar';
import Topnav from '../common/Topnav';

import coffeeImg from '../../assets/coffee_grounds.png';
import fabricImg from '../../assets/fabric_waste.png';
import woodImg from '../../assets/wood_offcuts.png';
import packagingImg from '../../assets/paper_packaging.png';

export const ListingsDetailsPage = ({ currentPage, setCurrentPage, triggerToast }) => {
  return (
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
  );
};
export default ListingsDetailsPage;
