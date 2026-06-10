import React, { useState } from 'react';
import { Box, Recycle, MapPin } from 'lucide-react';
import Sidebar from '../common/Sidebar';
import Topnav from '../common/Topnav';

import coffeeImg from '../../assets/coffee_grounds.png';
import fabricImg from '../../assets/fabric_waste.png';
import woodImg from '../../assets/wood_offcuts.png';

export const MarketplacePage = ({ currentPage, setCurrentPage, triggerToast }) => {
  // Marketplace Filter States
  const [filterRadius, setFilterRadius] = useState('25km');
  const [filterOrganic, setFilterOrganic] = useState(false);
  const [filterTextiles, setFilterTextiles] = useState(false);
  const [filterWood, setFilterWood] = useState(false);
  const [filterPlastics, setFilterPlastics] = useState(false);
  const [filterMetals, setFilterMetals] = useState(false);
  const [filterPurity, setFilterPurity] = useState(true);

  return (
    <div className="inbox-page-wrapper">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} triggerToast={triggerToast} />
      <main className="inbox-main-content">
        <Topnav triggerToast={triggerToast} />

        <div className="inbox-view-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="inbox-view-title">Waste Marketplace</h1>

          <div className="marketplace-layout">
            {/* Left filters panel */}
            <aside className="filters-sidebar">
              {/* Category Filter */}
              <div className="filter-group">
                <span className="filter-title">Category</span>
                
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox" 
                    checked={filterOrganic} 
                    onChange={(e) => setFilterOrganic(e.target.checked)} 
                  />
                  Organic
                </label>

                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox" 
                    checked={filterTextiles} 
                    onChange={(e) => setFilterTextiles(e.target.checked)} 
                  />
                  Textiles
                </label>

                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox" 
                    checked={filterWood} 
                    onChange={(e) => setFilterWood(e.target.checked)} 
                  />
                  Wood
                </label>

                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox" 
                    checked={filterPlastics} 
                    onChange={(e) => setFilterPlastics(e.target.checked)} 
                  />
                  Plastics
                </label>

                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox" 
                    checked={filterMetals} 
                    onChange={(e) => setFilterMetals(e.target.checked)} 
                  />
                  Metals
                </label>
              </div>

              {/* Radius Filter */}
              <div className="filter-group">
                <span className="filter-title">Radius</span>
                
                <label className="filter-option">
                  <input 
                    type="radio" 
                    name="radius" 
                    className="filter-radio" 
                    checked={filterRadius === '25km'} 
                    onChange={() => setFilterRadius('25km')} 
                  />
                  25km
                </label>

                <label className="filter-option">
                  <input 
                    type="radio" 
                    name="radius" 
                    className="filter-radio" 
                    checked={filterRadius === '50km'} 
                    onChange={() => setFilterRadius('50km')} 
                  />
                  50km
                </label>

                <label className="filter-option">
                  <input 
                    type="radio" 
                    name="radius" 
                    className="filter-radio" 
                    checked={filterRadius === '100km+'} 
                    onChange={() => setFilterRadius('100km+')} 
                  />
                  100km+
                </label>
              </div>

              {/* Quantity Filter */}
              <div className="filter-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="filter-title">Quantity</span>
                  <span className="filter-sublabel" style={{ fontWeight: 705 }}>kg/week</span>
                </div>
                <div className="qty-slider-container">
                  <div className="slider-rail">
                    <div className="slider-track"></div>
                    <div className="slider-handle"></div>
                  </div>
                  <div className="slider-labels">
                    <span>0</span>
                    <span>12,000</span>
                  </div>
                </div>
              </div>

              {/* Purity Filter */}
              <div className="filter-group">
                <span className="filter-title">Purity</span>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox" 
                    checked={filterPurity} 
                    onChange={(e) => setFilterPurity(e.target.checked)} 
                  />
                  90%+
                </label>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox" 
                    defaultChecked={false} 
                  />
                  90%+
                </label>
              </div>

              {/* Availability Date dropdown */}
              <div className="filter-group">
                <span className="filter-title">Availability Date</span>
                <select className="availability-select" defaultValue="Wed Aug" onChange={() => triggerToast('Availability filter changed')}>
                  <option value="Wed Aug">Wed Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                </select>
              </div>
            </aside>

            {/* Right Listings Grid */}
            <div className="listings-grid-scroll">
              <div className="listings-grid">
                {[
                  {
                    id: 1,
                    title: "120kg Spent Coffee Grounds - Daily Supply",
                    type: "Organic",
                    typeIcon: <Box size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: coffeeImg,
                  },
                  {
                    id: 2,
                    title: "120kg Spent Coffee Grounds - Daily Supply",
                    type: "Textiles",
                    typeIcon: <Recycle size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: coffeeImg,
                  },
                  {
                    id: 3,
                    title: "120kg Spent Coffee Grounds - Daily Supply",
                    type: "Textiles",
                    typeIcon: <Recycle size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: fabricImg,
                  },
                  {
                    id: 4,
                    title: "120kg Spent Coffee Grounds - Daily Supply",
                    type: "Wood",
                    typeIcon: <Box size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: fabricImg,
                  },
                  {
                    id: 5,
                    title: "120kg Spent Coffee Grounds - Daily Supply",
                    type: "Wood",
                    typeIcon: <Box size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: coffeeImg,
                  },
                  {
                    id: 6,
                    title: "120kg Used Spent Coffee - Taotic Supply",
                    type: "Organic",
                    typeIcon: <Box size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 85,
                    img: fabricImg,
                  },
                  {
                    id: 7,
                    title: "120kg Spent Coffee Grounds - Daily Supply",
                    type: "Textiles",
                    typeIcon: <Recycle size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: coffeeImg,
                  },
                  {
                    id: 8,
                    title: "120kg Spent Coffee Grounds - Coffee",
                    type: "Organic",
                    typeIcon: <Box size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: woodImg,
                  },
                  {
                    id: 9,
                    title: "120kg Spent Coffee Grains - Grounds",
                    type: "Organic",
                    typeIcon: <Box size={14} />,
                    loc: "Pune",
                    qty: "120kg/week",
                    score: 94,
                    img: fabricImg,
                  }
                ].map((item) => (
                  <div key={item.id} className="listing-item-card">
                    <div className="card-top-header">
                      <img src={item.img} alt={item.title} className="card-thumb-img" />
                      <span className="card-top-title">{item.title}</span>
                    </div>
                    
                    <div className="card-meta-row">
                      <div className="card-meta-item">
                        <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 800 }}>Material Type</span>
                        <span className="card-meta-right-val" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: '#374151' }}>
                          {item.typeIcon}
                          {item.type}
                        </span>
                      </div>
                      
                      <div className="card-meta-item">
                        <MapPin size={12} />
                        <span>{item.loc}</span>
                        <span className="card-meta-right-val" style={{ fontSize: '11.5px', color: '#374151' }}>{item.qty}</span>
                      </div>
                    </div>

                    <div className="card-score-row">
                      <div className="circular-score-wrapper" style={{ width: '36px', height: '36px' }}>
                        <svg className="circular-score-svg" viewBox="0 0 36 36">
                          <path className="circular-score-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="circular-score-bar" strokeDasharray={`${item.score}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <span className="circular-score-text" style={{ fontSize: '10.5px' }}>{item.score}%</span>
                      </div>
                      <span className="card-score-label">AI Compatibility Score</span>
                    </div>

                    <div className="card-btn-group">
                      <button 
                        className="btn-card-details" 
                        onClick={() => setCurrentPage('listingsDetails')}
                      >
                        View Details
                      </button>
                      <button 
                        className="btn-card-source" 
                        onClick={() => triggerToast(`Sourcing request sent for card #${item.id} (${item.title})!`)}
                      >
                        Request to Source
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
export default MarketplacePage;
