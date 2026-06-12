import React, { useState } from 'react';
import { Globe, ChevronDown, Bell, Check } from 'lucide-react';
import { 
  SignInLogo, GeneratorIcon, UpcyclerIcon, CoffeeIcon, TextilesIcon, 
  WoodIcon, PlasticsIcon, MetalsIcon, GrainIcon 
} from '../common/Icons';
import avatarImg from '../../assets/avatar.png';

export const PreferencesPage = ({ setCurrentPage, triggerToast }) => {
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState({
    generator: true,
    upcycler: true
  });

  const [materials, setMaterials] = useState([
    { id: 'coffee', name: 'Coffee', icon: <CoffeeIcon />, selection: 'primary' },
    { id: 'textiles', name: 'Textiles', icon: <TextilesIcon />, selection: 'primary' },
    { id: 'wood', name: 'Wood', icon: <WoodIcon />, selection: 'secondary' },
    { id: 'plastics', name: 'Plastics', icon: <PlasticsIcon />, selection: 'secondary' },
    { id: 'metals', name: 'Metals', icon: <MetalsIcon />, selection: 'secondary' },
    { id: 'grain', name: 'Brewery Grain', icon: <GrainIcon />, selection: 'secondary' },
  ]);

  const [transportCapabilities, setTransportCapabilities] = useState({
    local: false,
    freight: false,
    courier: false
  });

  const toggleBusinessType = (type) => {
    setSelectedBusinessTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleMaterialCardClick = (id) => {
    setMaterials(prev => prev.map(m => {
      if (m.id === id) {
        const nextSelection = m.selection === 'primary' ? 'secondary' : 'primary';
        return { ...m, selection: nextSelection };
      }
      return m;
    }));
  };

  const handleMaterialToggleClick = (e, id) => {
    e.stopPropagation();
    setMaterials(prev => prev.map(m => {
      if (m.id === id) {
        const nextSelection = m.selection === 'none' ? 'secondary' : 'none';
        return { ...m, selection: nextSelection };
      }
      return m;
    }));
  };

  const toggleTransportCapability = (key) => {
    setTransportCapabilities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSavePreferences = () => {
    const activeMaterials = materials.filter(m => m.selection !== 'none');
    triggerToast(`Profile settings saved successfully! ${activeMaterials.length} material interests selected.`);
    setTimeout(() => {
      setCurrentPage('listingsDetails');
    }, 1500);
  };

  return (
    <div className="pref-page-wrapper">
      {/* Header Navigation Bar */}
      <header className="navbar">
        <div className="navbar-brand">
          <SignInLogo size={34} color="#15803D" />
          <span className="navbar-brand-name">EcoMatch AI</span>
        </div>

        <div className="navbar-actions">
          <button className="navbar-action-item" onClick={() => triggerToast('Location: Pune, India')}>
            <Globe size={18} />
            Pune, India
            <ChevronDown size={14} />
          </button>

          <button className="navbar-icon-btn" aria-label="Notifications" onClick={() => triggerToast('No new notifications')}>
            <Bell size={20} />
          </button>

          <div className="navbar-profile" onClick={() => triggerToast('Opening user profile menu...')}>
            <img src={avatarImg} alt="User headshot" className="profile-avatar" />
            <ChevronDown size={14} style={{ color: '#475569' }} />
          </div>
        </div>
      </header>

      {/* Main content body */}
      <main className="pref-content">
        <h1 className="pref-title">Complete Your Business Profile.</h1>

        <div className="pref-card">
          {/* Steps Progress Tracker */}
          <div className="steps-container">
            <ul className="steps-list">
              <li className="step-item completed">
                <span className="step-icon-check">
                  <Check size={14} strokeWidth={3} />
                </span>
                Business Info
              </li>
              
              <li className="step-arrow">→</li>
              
              <li className="step-item active">
                2. Material Preferences
              </li>
              
              <li className="step-arrow">→</li>
              
              <li className="step-item">
                3. Logistics
              </li>
            </ul>

            {/* Progress bar line */}
            <div className="progress-bar-segmented">
              <div className="progress-segment green"></div>
              <div className="progress-segment purple"></div>
              <div className="progress-segment gray"></div>
            </div>
          </div>

          {/* Question 1: What best describes your business? */}
          <section className="pref-section">
            <h2 className="pref-section-title">What best describes your business?</h2>
            <div className="business-type-grid">
              
              {/* Generator Card */}
              <div 
                className={`business-card ${selectedBusinessTypes.generator ? 'selected' : ''}`}
                onClick={() => toggleBusinessType('generator')}
              >
                <div className="business-card-left">
                  <GeneratorIcon />
                </div>
                <div className="business-card-right">
                  <span className="business-card-title">Generator</span>
                  <span className="business-card-subtitle">(Supplier)</span>
                </div>
                {selectedBusinessTypes.generator && (
                  <div className="card-select-badge">
                    <Check size={14} strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* Upcycler Card */}
              <div 
                className={`business-card ${selectedBusinessTypes.upcycler ? 'selected' : ''}`}
                onClick={() => toggleBusinessType('upcycler')}
              >
                <div className="business-card-left">
                  <UpcyclerIcon />
                </div>
                <div className="business-card-right">
                  <span className="business-card-title">Upcycler</span>
                  <span className="business-card-subtitle">(Manufacturer)</span>
                </div>
                {selectedBusinessTypes.upcycler && (
                  <div className="card-select-badge">
                    <Check size={14} strokeWidth={3} />
                  </div>
                )}
              </div>

            </div>
          </section>

          {/* Question 2: Select Primary Material Interests */}
          <section className="pref-section">
            <h2 className="pref-section-title">Select Primary Material Interests</h2>
            <div className="materials-grid">
              {materials.map((m) => (
                <div 
                  key={m.id}
                  className={`material-card ${m.selection === 'primary' ? 'primary' : ''}`}
                  onClick={() => handleMaterialCardClick(m.id)}
                  title="Click card to toggle between Primary selection"
                >
                  <div className="material-card-content">
                    <div className="material-icon-wrapper">
                      {m.icon}
                    </div>
                    <span className="material-name">{m.name}</span>
                  </div>

                  {/* Custom Toggle Switch */}
                  <div 
                    className={`toggle-switch ${m.selection !== 'none' ? 'on' : 'off'}`}
                    onClick={(e) => handleMaterialToggleClick(e, m.id)}
                    title="Toggle to enable/disable material"
                  >
                    <div className="toggle-thumb"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Question 3: Key transport capabilities? */}
          <section className="pref-section">
            <h2 className="pref-section-title">Key transport capabilities?</h2>
            <div className="transport-grid">
              
              {/* Local Pickup */}
              <div 
                className={`transport-card ${transportCapabilities.local ? 'selected' : ''}`}
                onClick={() => toggleTransportCapability('local')}
              >
                <div className="checkbox-icon">
                  {transportCapabilities.local && <Check size={12} strokeWidth={3} />}
                </div>
                Local Pickup
              </div>

              {/* Freight Delivery */}
              <div 
                className={`transport-card ${transportCapabilities.freight ? 'selected' : ''}`}
                onClick={() => toggleTransportCapability('freight')}
              >
                <div className="checkbox-icon">
                  {transportCapabilities.freight && <Check size={12} strokeWidth={3} />}
                </div>
                Freight Delivery
              </div>

              {/* Courier Services */}
              <div 
                className={`transport-card ${transportCapabilities.courier ? 'selected' : ''}`}
                onClick={() => toggleTransportCapability('courier')}
              >
                <div className="checkbox-icon">
                  {transportCapabilities.courier && <Check size={12} strokeWidth={3} />}
                </div>
                Courier Services
              </div>

            </div>
          </section>

          {/* Action Button */}
          <div className="action-container">
            <button className="btn-save" onClick={handleSavePreferences}>
              Save & Continue
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};
export default PreferencesPage;
