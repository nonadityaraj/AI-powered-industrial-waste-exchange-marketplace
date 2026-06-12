import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Sidebar from '../common/Sidebar';
import Topnav from '../common/Topnav';

import coffeeImg from '../../assets/coffee_grounds.png';
import fabricImg from '../../assets/fabric_waste.png';
import woodImg from '../../assets/wood_offcuts.png';
import packagingImg from '../../assets/paper_packaging.png';

const LISTINGS_DATA = [
  {
    id: 'coffee',
    title: 'USED COFFEE GROUNDS - High Purity - Daily Supply.',
    shortTitle: 'Used Coffee Grounds',
    qty: '120kg/week',
    source: 'Pune Cafe',
    logistics: 'Local Pickup Recommended',
    img: coffeeImg,
    gallery: [coffeeImg, fabricImg, woodImg, packagingImg, coffeeImg],
    desc: 'Freshly extracted in used coffee grounds - mpt, high protein quality - materials tinied, dried - wood, packaged, consumer father and lonest, coffee.',
    matchScore: '95%',
    matchPartner: 'BioSkins Skincare Co.',
    matchWhy: 'Distance (5km), Purity (92%), Volume Match (Excellent)',
    latLngStart: { x: 60, y: 55 },
    latLngEnd: { x: 140, y: 120 }
  },
  {
    id: 'fabric',
    title: 'RECYCLED TEXTILE FABRIC - Assorted Colors & Materials.',
    shortTitle: 'Recycled Textile Fabric',
    qty: '350kg/month',
    source: 'Textiles Co.',
    logistics: 'Freight Delivery arranged by Supplier',
    img: fabricImg,
    gallery: [fabricImg, coffeeImg, woodImg, packagingImg, fabricImg],
    desc: 'Clean, sorted fabric scraps from clothing manufacturing. Mixed cotton and polyester blends, suitable for insulation, upcycling, or rag production.',
    matchScore: '88%',
    matchPartner: 'EcoInsulate Ltd.',
    matchWhy: 'Purity (85%), Distance (12km), Regular Supply (High)',
    latLngStart: { x: 80, y: 40 },
    latLngEnd: { x: 120, y: 150 }
  },
  {
    id: 'wood',
    title: 'PREMIUM WOOD OFFCUTS - Hardwood & Softwood Mix.',
    shortTitle: 'Premium Wood Offcuts',
    qty: '500kg/month',
    source: 'Pune Carpenter',
    logistics: 'Self-organized transport or carrier pickup',
    img: woodImg,
    gallery: [woodImg, coffeeImg, fabricImg, packagingImg, woodImg],
    desc: 'Assorted pine, oak, and plywood offcuts from furniture production. Untreated, clean wood offcuts, perfect for wood crafts, pellet production, or biomass.',
    matchScore: '92%',
    matchPartner: 'Artisan Toys Inc.',
    matchWhy: 'Material Match (100%), Distance (8km), Consistent Volume',
    latLngStart: { x: 110, y: 70 },
    latLngEnd: { x: 90, y: 130 }
  },
  {
    id: 'grain',
    title: 'SPENT BREWERY GRAIN - High Protein Feed Quality.',
    shortTitle: 'Spent Brewery Grain',
    qty: '800kg/week',
    source: 'Pune Brewpub',
    logistics: 'Immediate pickup required post-brew (Thursdays)',
    img: packagingImg,
    gallery: [packagingImg, coffeeImg, fabricImg, woodImg, packagingImg],
    desc: 'Wet spent barley grains from craft brewing process. High moisture and protein content. Ideal for livestock feed, compost, or food product upcycling.',
    matchScore: '94%',
    matchPartner: 'GreenFeed Farms',
    matchWhy: 'Moisture requirements met, Distance (15km), Volume matched',
    latLngStart: { x: 40, y: 90 },
    latLngEnd: { x: 160, y: 110 }
  }
];

export const ListingsDetailsPage = ({ currentPage, setCurrentPage, triggerToast }) => {
  const [selectedListingId, setSelectedListingId] = useState(null);

  const activeListing = LISTINGS_DATA.find(item => item.id === selectedListingId);

  return (
    <div className="inbox-page-wrapper">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />
      <main className="inbox-main-content">
        <Topnav triggerToast={triggerToast} />

        <div className="inbox-view-container" style={{ overflowY: 'auto' }}>
          
          {!activeListing ? (
            // LISTINGS GRID VIEW (No listing selected)
            <div>
              <div className="details-back-header" onClick={() => setCurrentPage('listsource')}>
                <ArrowLeft size={18} />
                <span>Back to Home</span>
              </div>
              
              <h1 className="inbox-view-title" style={{ marginBottom: '24px' }}>My Active Symbiosis Listings</h1>
              
              <div className="listings-grid">
                {LISTINGS_DATA.map(item => (
                  <div 
                    key={item.id} 
                    className="listing-item-card cursor-pointer" 
                    onClick={() => setSelectedListingId(item.id)}
                  >
                    <div className="card-top-header">
                      <img src={item.img} alt={item.shortTitle} className="card-thumb-img" />
                      <div>
                        <h3 className="card-top-title">{item.shortTitle}</h3>
                        <span style={{ fontSize: '12.5px', color: '#6B7280', fontWeight: '600' }}>{item.source}</span>
                      </div>
                    </div>
                    
                    <div className="card-meta-row">
                      <div className="card-meta-item">
                        <span>Quantity:</span>
                        <span className="card-meta-right-val">{item.qty}</span>
                      </div>
                      <div className="card-meta-item">
                        <span>Logistics:</span>
                        <span className="card-meta-right-val" style={{ fontSize: '11px', textAlign: 'right' }}>
                          {item.logistics}
                        </span>
                      </div>
                    </div>

                    <button 
                      className="btn-card-details" 
                      style={{ marginTop: '8px', width: '100%', pointerEvents: 'none' }}
                    >
                      View Details & AI Match
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // DETAILED VIEW FOR SELECTED ITEM
            <div>
              <div 
                className="details-back-header"
                onClick={() => setSelectedListingId(null)}
              >
                <ArrowLeft size={18} />
                <span>Back to Listings Selection</span>
              </div>

              <div className="details-grid">
                
                {/* Left Card */}
                <div className="details-main-card">
                  <h1 className="details-main-title">{activeListing.title}</h1>
                  
                  <div className="details-image-gallery">
                    {activeListing.gallery.map((imgSrc, i) => (
                      <img 
                        key={i} 
                        src={imgSrc} 
                        alt={`${activeListing.shortTitle} gallery ${i + 1}`} 
                        className="details-gallery-img" 
                      />
                    ))}
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Material Description</span>
                    <p className="details-section-desc">
                      {activeListing.desc}
                    </p>
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Quantity</span>
                    <span className="details-section-val">{activeListing.qty}</span>
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Source</span>
                    <span className="details-section-val">{activeListing.source}</span>
                  </div>

                  <div className="details-section">
                    <span className="details-section-title">Logistics</span>
                    <span className="details-section-val">{activeListing.logistics}</span>
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
                          <path 
                            className="comp-gauge-bar" 
                            strokeDasharray={`${activeListing.matchScore.replace('%', '')}, 100`} 
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                          />
                        </svg>
                        <span className="comp-gauge-text">{activeListing.matchScore}</span>
                      </div>
                      
                      <div className="comp-partner-info">
                        <span className="comp-partner-name">{activeListing.matchPartner}</span>
                        <span className="comp-partner-sub">Hypothetical Compatibility</span>
                      </div>
                    </div>

                    <div className="comp-match-matches">Matches finalized.</div>
                    
                    <div className="comp-why-label">Why it matches:</div>
                    <p className="comp-why-text">
                      {activeListing.matchWhy}
                    </p>

                    <div className="comp-btn-group">
                      <button className="btn-request-source" onClick={() => triggerToast(`Sourcing request sent to ${activeListing.matchPartner}!`)}>
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

                        {/* Dynamic Path */}
                        <path 
                          d={`M ${activeListing.latLngStart.x} ${activeListing.latLngStart.y} C 100 70, 110 110, ${activeListing.latLngEnd.x} ${activeListing.latLngEnd.y}`} 
                          fill="none" 
                          stroke="#059669" 
                          strokeWidth="3" 
                          strokeDasharray="3 3" 
                        />
                        <path 
                          d={`M ${activeListing.latLngStart.x} ${activeListing.latLngStart.y} C 100 70, 110 110, ${activeListing.latLngEnd.x} ${activeListing.latLngEnd.y}`} 
                          fill="none" 
                          stroke="#059669" 
                          strokeWidth="1.5" 
                        />

                        {/* Start Node */}
                        <g transform={`translate(${activeListing.latLngStart.x}, ${activeListing.latLngStart.y})`}>
                          <circle cx="0" cy="0" r="12" fill="#059669" fillOpacity="0.2" />
                          <circle cx="0" cy="0" r="5" fill="#059669" stroke="#FFFFFF" strokeWidth="1.5" />
                        </g>

                        {/* End Node */}
                        <g transform={`translate(${activeListing.latLngEnd.x}, ${activeListing.latLngEnd.y})`}>
                          <circle cx="0" cy="0" r="12" fill="#7C3AED" fillOpacity="0.2" />
                          <circle cx="0" cy="0" r="5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
export default ListingsDetailsPage;
