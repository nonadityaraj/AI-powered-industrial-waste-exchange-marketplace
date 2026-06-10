import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Import assets
import coffeeWaste from './assets/coffee_waste.png';
import fabricWaste from './assets/fabric_waste.png';
import woodWaste from './assets/wood_waste.png';
import packagingProduct from './assets/packaging_product.png';
import skincareProduct from './assets/skincare_product.png';
import furnitureProduct from './assets/furniture_product.png';
import feedProduct from './assets/feed_product.png';

// Import newly generated logo assets
import userAvatar from './assets/user_avatar.png';
import greenbrewLogo from './assets/greenbrew_logo.png';
import biopackLogo from './assets/biopack_logo.png';

function App() {
  const [currentTab, setCurrentTab] = useState('messages'); // 'messages' or 'matches'
  const [location, setLocation] = useState('Pune, India');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  
  // Chat Inbox states
  const [inputText, setInputText] = useState('');
  const [activeConvId, setActiveConvId] = useState('biopack-938');
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);

  // Conversations Data matching the exact list in the message_EcoAI.jpg mockup
  const [conversations, setConversations] = useState([
    {
      id: 'greenbrew-1026',
      name: 'GreenBrew Co.',
      avatar: userAvatar,
      time: '10:26 AM',
      statusText: '⇋ 10:26 AM',
      preview: 'Hi smm erment oui online.',
      dealStatus: 'Discussion in progress (60%)',
      theme: 'green',
      material: {
        name: 'BREWERS SPENT GRAIN',
        amount: '500kg/wk',
        image: feedProduct,
      },
      pickup: '10:00am - 12:00pm',
      transport: 'Arranged by GreenBrew',
      messages: [
        { id: 1, sender: 'them', text: 'Hi, is the spent grain shipment ready?', time: '10:15 AM', status: 'Received' },
        { id: 2, sender: 'me', text: 'Hi smm erment oui online.', time: '10:26 AM', status: 'Sent' }
      ]
    },
    {
      id: 'biopack-938',
      name: 'BioPack Solutions',
      avatar: biopackLogo,
      time: '9:38 PM',
      statusText: '9:38 PM',
      preview: 'Hi BioPack, confirmed pickup...',
      dealStatus: 'Matching finalized (95%)',
      theme: 'purple',
      material: {
        name: 'USED COFFEE GROUNDS',
        amount: '120kg/wk',
        image: coffeeWaste,
      },
      pickup: '10:00am - 10am',
      transport: 'Transport',
      messages: [
        { id: 1, sender: 'me', text: 'Hi BioPack, confirmed pickup for 120kg coffee grounds tomorrow?', time: '9:38 PM', status: 'Sent' },
        { id: 2, sender: 'them', text: 'Yes, 10am at the side entrance.', time: '1:31 PM', status: 'Received' }
      ]
    },
    {
      id: 'greenbrew-730',
      name: 'GreenBrew Co.',
      avatar: userAvatar,
      time: '7:30 PM',
      statusText: '← 7:30 PM',
      preview: 'Hi 1lkg coffee grounds tomor...',
      dealStatus: 'Deal under review (80%)',
      theme: 'green',
      material: {
        name: 'ORGANIC MALT OFF-CUTS',
        amount: '200kg/wk',
        image: woodWaste,
      },
      pickup: 'Thursday, 3:00pm',
      transport: 'Self-pickup',
      messages: [
        { id: 1, sender: 'them', text: 'Hi, can we adjust the delivery location?', time: '7:12 PM', status: 'Received' },
        { id: 2, sender: 'me', text: 'Hi 1lkg coffee grounds tomor...', time: '7:30 PM', status: 'Sent' }
      ]
    },
    {
      id: 'biopack-131',
      name: 'BioPack Solutions',
      avatar: null, // Green leaf avatar
      avatarColor: 'green',
      time: '1:31 PM',
      statusText: '1:31 PM',
      preview: 'Yes, 10am at the side entrance.',
      dealStatus: 'Contract drafting (90%)',
      theme: 'purple',
      material: {
        name: 'REPURPOSED COFFEE FILTERS',
        amount: '40kg/wk',
        image: packagingProduct,
      },
      pickup: 'Monday, 10:00am',
      transport: 'Standard shipping',
      messages: [
        { id: 1, sender: 'me', text: 'Confirmed our dispatch slot for next week?', time: '1:10 PM', status: 'Sent' },
        { id: 2, sender: 'them', text: 'Yes, 10am at the side entrance.', time: '1:31 PM', status: 'Received' }
      ]
    },
    {
      id: 'greenbrew-157',
      name: 'GreenBrew Co.',
      avatar: userAvatar,
      time: '1:57 PM',
      statusText: '← 1:57 PM',
      preview: 'Hi, M0arm at the side entranc...',
      dealStatus: 'Proposal sent (45%)',
      theme: 'green',
      material: {
        name: 'SPENT YEAST SCRAPS',
        amount: '150kg/wk',
        image: skincareProduct,
      },
      pickup: 'TBD',
      transport: 'EcoMatch Logistics',
      messages: [
        { id: 1, sender: 'them', text: 'What is the container size?', time: '1:45 PM', status: 'Received' },
        { id: 2, sender: 'me', text: 'Hi, M0arm at the side entranc...', time: '1:57 PM', status: 'Sent' }
      ]
    },
    {
      id: 'greenbrew-message',
      name: 'GreenBrew Co.',
      avatar: userAvatar,
      time: 'Message',
      statusText: '← Message',
      preview: 'Hey BioPack, confirmed to no...',
      dealStatus: 'Initial negotiation (30%)',
      theme: 'green',
      material: {
        name: 'CARDBOARD CARTONS',
        amount: '300kg/wk',
        image: furnitureProduct,
      },
      pickup: 'Weekly pickup',
      transport: 'Self-pickup',
      messages: [
        { id: 1, sender: 'them', text: 'Hello, interest in cardboard recycle?', time: 'Yesterday', status: 'Received' },
        { id: 2, sender: 'me', text: 'Hey BioPack, confirmed to no...', time: 'Yesterday', status: 'Sent' }
      ]
    },
    {
      id: 'greenbrew-mesconn',
      name: 'GreenBrew Co.',
      avatar: userAvatar,
      time: 'Mesconn',
      statusText: '← Mesconn',
      preview: 'Yes, 10am at the side entran...',
      dealStatus: 'Archived matching (100%)',
      theme: 'green',
      material: {
        name: 'USED BOTTLES GLASS',
        amount: '400kg/wk',
        image: skincareProduct,
      },
      pickup: 'Completed',
      transport: 'Completed',
      messages: [
        { id: 1, sender: 'them', text: 'Did the delivery arrive ok?', time: '2 days ago', status: 'Received' },
        { id: 2, sender: 'me', text: 'Yes, 10am at the side entran...', time: '2 days ago', status: 'Sent' }
      ]
    }
  ]);

  // Current active conversation object
  const activeConv = conversations.find(c => c.id === activeConvId) || conversations[1];

  // Landing Page (Matches) Diagram refs and states
  const [hoveredNode, setHoveredNode] = useState(null);
  const [paths, setPaths] = useState({
    'coffee-ai': '',
    'fabric-ai': '',
    'wood-ai': '',
    'ai-packaging': '',
    'ai-skincare': '',
    'ai-furniture': '',
    'ai-feed': '',
  });

  const containerRef = useRef(null);
  const dropdownRef = useRef(null);
  const chatEndRef = useRef(null);

  const nodeRefs = {
    coffee: useRef(null),
    fabric: useRef(null),
    wood: useRef(null),
    ai: useRef(null),
    packaging: useRef(null),
    skincare: useRef(null),
    furniture: useRef(null),
    feed: useRef(null),
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll chat messages to bottom on update
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeConvId, conversations, currentTab]);

  // Update SVG connection lines dynamically for Matches page
  const updatePaths = () => {
    if (currentTab !== 'matches' || !containerRef.current || !nodeRefs.ai.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    
    const getCoordinates = (elementRef, side) => {
      if (!elementRef.current) return { x: 0, y: 0 };
      const rect = elementRef.current.getBoundingClientRect();
      const x = (side === 'left' ? rect.left : rect.right) - containerRect.left;
      const y = rect.top + rect.height / 2 - containerRect.top;
      return { x, y };
    };

    const aiLeft = getCoordinates(nodeRefs.ai, 'left');
    const aiRight = getCoordinates(nodeRefs.ai, 'right');

    const coffeePt = getCoordinates(nodeRefs.coffee, 'right');
    const fabricPt = getCoordinates(nodeRefs.fabric, 'right');
    const woodPt = getCoordinates(nodeRefs.wood, 'right');

    const packagingPt = getCoordinates(nodeRefs.packaging, 'left');
    const skincarePt = getCoordinates(nodeRefs.skincare, 'left');
    const furniturePt = getCoordinates(nodeRefs.furniture, 'left');
    const feedPt = getCoordinates(nodeRefs.feed, 'left');

    const drawCurve = (p1, p2) => {
      const midX = (p1.x + p2.x) / 2;
      return `M ${p1.x} ${p1.y} C ${midX} ${p1.y}, ${midX} ${p2.y}, ${p2.x} ${p2.y}`;
    };

    setPaths({
      'coffee-ai': drawCurve(coffeePt, aiLeft),
      'fabric-ai': drawCurve(fabricPt, aiLeft),
      'wood-ai': drawCurve(woodPt, aiLeft),
      'ai-packaging': drawCurve(aiRight, packagingPt),
      'ai-skincare': drawCurve(aiRight, skincarePt),
      'ai-furniture': drawCurve(aiRight, furniturePt),
      'ai-feed': drawCurve(aiRight, feedPt),
    });
  };

  useEffect(() => {
    if (currentTab === 'matches') {
      updatePaths();
      window.addEventListener('resize', updatePaths);
      
      let resizeObserver;
      if (containerRef.current) {
        resizeObserver = new ResizeObserver(() => {
          updatePaths();
        });
        resizeObserver.observe(containerRef.current);
      }

      const timer = setTimeout(updatePaths, 150);
      return () => {
        window.removeEventListener('resize', updatePaths);
        if (resizeObserver) resizeObserver.disconnect();
        clearTimeout(timer);
      };
    }
  }, [currentTab]);

  // Send Chat message handler
  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    setConversations(prevConvs =>
      prevConvs.map(conv => {
        if (conv.id === activeConvId) {
          const newMsg = {
            id: conv.messages.length + 1,
            sender: 'me',
            text: inputText.trim(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'Sent'
          };
          return {
            ...conv,
            preview: inputText.trim(),
            messages: [...conv.messages, newMsg]
          };
        }
        return conv;
      })
    );
    setInputText('');
  };

  // Matches path highlight checks
  const isPathActive = (pathId) => {
    if (hoveredNode === 'ai') return true;
    if (!hoveredNode) return true;

    if (hoveredNode === 'coffee') {
      return ['coffee-ai', 'ai-packaging', 'ai-skincare', 'ai-feed'].includes(pathId);
    }
    if (hoveredNode === 'fabric') {
      return ['fabric-ai', 'ai-furniture', 'ai-packaging'].includes(pathId);
    }
    if (hoveredNode === 'wood') {
      return ['wood-ai', 'ai-furniture', 'ai-packaging', 'ai-feed'].includes(pathId);
    }

    if (hoveredNode === 'packaging') {
      return ['coffee-ai', 'fabric-ai', 'wood-ai', 'ai-packaging'].includes(pathId);
    }
    if (hoveredNode === 'skincare') {
      return ['coffee-ai', 'ai-skincare'].includes(pathId);
    }
    if (hoveredNode === 'furniture') {
      return ['fabric-ai', 'wood-ai', 'ai-furniture'].includes(pathId);
    }
    if (hoveredNode === 'feed') {
      return ['coffee-ai', 'wood-ai', 'ai-feed'].includes(pathId);
    }

    return false;
  };

  const isPathDimmed = (pathId) => {
    if (!hoveredNode) return false;
    return !isPathActive(pathId);
  };

  const getNodeState = (nodeId) => {
    if (!hoveredNode) return 'normal';
    if (hoveredNode === 'ai') return 'highlighted';
    if (hoveredNode === nodeId) return 'highlighted';

    if (hoveredNode === 'coffee') {
      return ['ai', 'packaging', 'skincare', 'feed'].includes(nodeId) ? 'highlighted' : 'dimmed';
    }
    if (hoveredNode === 'fabric') {
      return ['ai', 'furniture', 'packaging'].includes(nodeId) ? 'highlighted' : 'dimmed';
    }
    if (hoveredNode === 'wood') {
      return ['ai', 'furniture', 'packaging', 'feed'].includes(nodeId) ? 'highlighted' : 'dimmed';
    }

    if (hoveredNode === 'packaging') {
      return ['ai', 'coffee', 'fabric', 'wood'].includes(nodeId) ? 'highlighted' : 'dimmed';
    }
    if (hoveredNode === 'skincare') {
      return ['ai', 'coffee'].includes(nodeId) ? 'highlighted' : 'dimmed';
    }
    if (hoveredNode === 'furniture') {
      return ['ai', 'fabric', 'wood'].includes(nodeId) ? 'highlighted' : 'dimmed';
    }
    if (hoveredNode === 'feed') {
      return ['ai', 'coffee', 'wood'].includes(nodeId) ? 'highlighted' : 'dimmed';
    }

    return 'dimmed';
  };

  const locations = [
    'Pune, India',
    'Mumbai, India',
    'Bengaluru, India',
    'Delhi, India',
    'Chennai, India'
  ];

  // ==========================================================================
  // VIEW RENDERERS
  // ==========================================================================

  // Render 1: Matches Landing Page View
  const renderMatchesView = () => (
    <div className="app-container">
      {/* Decorative background sparkles */}
      <svg className="sparkle sparkle-top-right" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" style={{ color: '#a7f3d0' }}>
        <path d="M12 2l2.4 7.2 7.6.8-5.6 5.4 1.6 7.6-6-4-6 4 1.6-7.6-5.6-5.4 7.6-.8z" />
      </svg>
      <svg className="sparkle sparkle-bottom-left" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" style={{ color: '#ddd6fe' }}>
        <path d="M12 2l2.4 7.2 7.6.8-5.6 5.4 1.6 7.6-6-4-6 4 1.6-7.6-5.6-5.4 7.6-.8z" />
      </svg>

      {/* Navbar / Header */}
      <header className="navbar animate-fade-in-up">
        <div className="logo-container" onClick={() => setCurrentTab('messages')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="logo-icon">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
            <path d="M9 22v-4" />
            <path d="M14 22v-2" />
          </svg>
          <span className="logo-text">EcoMatch AI</span>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#industries" className="nav-link">Industries</a></li>
            <li><a href="#how-it-works" className="nav-link">How it Works</a></li>
            <li><a href="#marketplace" className="nav-link">Marketplace</a></li>
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Location Dropdown */}
          <div className="position-relative" ref={dropdownRef}>
            <button 
              className="location-selector" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Select location"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="location-icon">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span>{location}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="location-dropdown" role="listbox">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    className={`location-option ${location === loc ? 'active' : ''}`}
                    onClick={() => {
                      setLocation(loc);
                      setIsDropdownOpen(false);
                    }}
                    role="option"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <button 
            className="notification-button" 
            onClick={() => setNotificationCount(0)}
            aria-label="View notifications"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="notification-icon">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            {notificationCount > 0 && <span className="notification-badge" />}
          </button>

          <button className="btn-get-started" onClick={() => setCurrentTab('messages')}>Inbox Messages</button>
        </div>
      </header>

      {/* Main Title Section */}
      <main className="hero-section">
        <h1 className="hero-title animate-fade-in-up">
          Turn Your Industrial Byproducts Into Local Revenue
        </h1>
      </main>

      {/* Interactive Connections Map */}
      <section className="diagram-wrapper animate-scale-in" ref={containerRef}>
        <div className="diagram-container">
          
          <svg className="connections-svg">
            <defs>
              <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {Object.keys(paths).map((pathId) => (
              <path
                key={pathId}
                d={paths[pathId]}
                className={`connection-path ${isPathActive(pathId) ? 'active' : ''} ${isPathDimmed(pathId) ? 'dimmed' : ''}`}
                filter={isPathActive(pathId) && hoveredNode ? 'url(#glow-emerald)' : undefined}
              />
            ))}
          </svg>

          {/* Left Column (Inputs) */}
          <div className="diagram-column column-left">
            <div 
              className={`node-card ${getNodeState('coffee') === 'dimmed' ? 'dimmed' : ''} ${getNodeState('coffee') === 'highlighted' ? 'highlighted' : ''}`}
              onMouseEnter={() => setHoveredNode('coffee')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="node-image-container">
                <img src={coffeeWaste} alt="Coffee Waste" className="node-image" />
              </div>
              <span ref={nodeRefs.coffee} className="tag-pill tag-coffee">Coffee</span>
            </div>

            <div 
              className={`node-card ${getNodeState('fabric') === 'dimmed' ? 'dimmed' : ''} ${getNodeState('fabric') === 'highlighted' ? 'highlighted' : ''}`}
              onMouseEnter={() => setHoveredNode('fabric')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="node-image-container">
                <img src={fabricWaste} alt="Fabric scraps" className="node-image" />
              </div>
              <span ref={nodeRefs.fabric} className="tag-pill tag-fabric">Fabric</span>
            </div>

            <div 
              className={`node-card ${getNodeState('wood') === 'dimmed' ? 'dimmed' : ''} ${getNodeState('wood') === 'highlighted' ? 'highlighted' : ''}`}
              onMouseEnter={() => setHoveredNode('wood')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="node-image-container">
                <img src={woodWaste} alt="Wood offcuts" className="node-image" />
              </div>
              <span ref={nodeRefs.wood} className="tag-pill tag-wood">Wood Offcuts</span>
            </div>
          </div>

          {/* Center Column (AI matching circle) */}
          <div className="diagram-column column-center">
            <div 
              className={`ai-node-outer-container ${hoveredNode ? 'active' : ''}`}
              onMouseEnter={() => setHoveredNode('ai')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="ai-pulse-ring" />
              <div className="ai-node-circle" ref={nodeRefs.ai}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ai-matching-icon">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
                  <path d="M12 5h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1" />
                  <path d="M12 9h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1" />
                  <path d="M12 13h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1" />
                  <path d="M12 5h-1a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1" />
                  <path d="M12 9h-1a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1" />
                  <path d="M12 13h-1a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1" />
                </svg>
                <span className="ai-matching-text">AI Matching</span>
              </div>
            </div>
          </div>

          {/* Right Column (Outputs) */}
          <div className="diagram-column column-right">
            <div 
              className={`node-card ${getNodeState('packaging') === 'dimmed' ? 'dimmed' : ''} ${getNodeState('packaging') === 'highlighted' ? 'highlighted' : ''}`}
              onMouseEnter={() => setHoveredNode('packaging')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div ref={nodeRefs.packaging} className="tag-pill tag-output">
                <span className="tag-output-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="tag-output-icon">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="M3.3 7 12 12l8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                </span>
                <span>Packaging</span>
              </div>
              <div className="node-image-container">
                <img src={packagingProduct} alt="Packaging" className="node-image" />
              </div>
            </div>

            <div 
              className={`node-card ${getNodeState('skincare') === 'dimmed' ? 'dimmed' : ''} ${getNodeState('skincare') === 'highlighted' ? 'highlighted' : ''}`}
              onMouseEnter={() => setHoveredNode('skincare')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div ref={nodeRefs.skincare} className="tag-pill tag-output">
                <span className="tag-output-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="tag-output-icon">
                    <path d="M9 3h6" />
                    <path d="M10 3v3h4V3" />
                    <path d="M8 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" />
                    <path d="M12 8v8" />
                    <path d="M10 13h4" />
                  </svg>
                </span>
                <span>Skincare</span>
              </div>
              <div className="node-image-container">
                <img src={skincareProduct} alt="Skincare" className="node-image" />
              </div>
            </div>

            <div 
              className={`node-card ${getNodeState('furniture') === 'dimmed' ? 'dimmed' : ''} ${getNodeState('furniture') === 'highlighted' ? 'highlighted' : ''}`}
              onMouseEnter={() => setHoveredNode('furniture')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div ref={nodeRefs.furniture} className="tag-pill tag-output">
                <span className="tag-output-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="tag-output-icon">
                    <path d="M18 20V10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10" />
                    <path d="M6 13h12" />
                    <path d="M4 20h16" />
                  </svg>
                </span>
                <span>Furniture</span>
              </div>
              <div className="node-image-container">
                <img src={furnitureProduct} alt="Furniture" className="node-image" />
              </div>
            </div>

            <div 
              className={`node-card ${getNodeState('feed') === 'dimmed' ? 'dimmed' : ''} ${getNodeState('feed') === 'highlighted' ? 'highlighted' : ''}`}
              onMouseEnter={() => setHoveredNode('feed')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div ref={nodeRefs.feed} className="tag-pill tag-output">
                <span className="tag-output-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="tag-output-icon">
                    <path d="M16 8h-5l-3 3v3h10v-3l-2-3Z" />
                    <path d="M8 11v3H4c-.6 0-1-.4-1-1v-1l2-1h3Z" />
                    <path d="M7 17v2" />
                    <path d="M17 17v2" />
                    <circle cx="12" cy="11" r="1" />
                  </svg>
                </span>
                <span>Feed</span>
              </div>
              <div className="node-image-container">
                <img src={feedProduct} alt="Animal feed" className="node-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <div className="cta-row animate-fade-in-up">
        <button className="btn-cta btn-cta-list" onClick={() => setCurrentTab('messages')}>List Materials</button>
        <button className="btn-cta btn-cta-source" onClick={() => setCurrentTab('messages')}>Source Materials</button>
      </div>

      {/* Bottom Metrics Bar */}
      <footer className="metrics-section animate-fade-in-up">
        <div className="metrics-container">
          <div className="metric-item">
            <div className="metric-icon-wrapper bg-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="metric-icon">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-value">12.4 Tons</span>
              <span className="metric-label">Waste Diverted</span>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric-item">
            <div className="metric-icon-wrapper bg-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="metric-icon">
                <path d="M5 10a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1Z" />
                <path d="M15 14a3 3 0 0 0 3-3V9a3 3 0 0 0-6 0v2a3 3 0 0 0 3 3Z" />
                <path d="M2 12a10 10 0 0 1 5-8.66" />
                <path d="M22 12a10 10 0 0 1-5 8.66" />
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-value">34.7 Tons</span>
              <span className="metric-label">CO₂ Saved</span>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric-item">
            <div className="metric-icon-wrapper bg-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="metric-icon">
                <path d="M6 4h12" />
                <path d="M6 9h12" />
                <path d="M6 9a6 6 0 0 1 6 6H6" />
                <path d="m14.5 15 5.5 5.5" />
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-value">2.45 L</span>
              <span className="metric-label">Cost Savings</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  // Render 2: Messages Dashboard View (exactly matching message_EcoAI.jpg)
  const renderMessagesView = () => (
    <div className="dashboard-layout animate-scale-in">
      
      {/* Sidebar (Left Column) */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sidebar-logo-icon">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
              <path d="M9 22v-4" />
              <path d="M14 22v-2" />
            </svg>
            <span className="sidebar-logo-text">EcoMatch AI</span>
          </div>
          <span className="sidebar-logo-sub">Industrial Symbiosis</span>
        </div>

        <ul className="sidebar-menu">
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <rect x="3" y="3" width="7" height="9" />
                <rect x="14" y="3" width="7" height="5" />
                <rect x="14" y="12" width="7" height="9" />
                <rect x="3" y="16" width="7" height="5" />
              </svg>
              <span>Dashboard</span>
            </div>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Waste Marketplace</span>
            </div>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              <span>My Listings</span>
            </div>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('matches')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Matches</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-chevron">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>AI Recommendations</span>
            </div>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Network</span>
            </div>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <span>Analytics</span>
            </div>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>Contracts</span>
            </div>
          </li>
          <li className="sidebar-item active" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Messages</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-chevron">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span>Notifications</span>
            </div>
          </li>
          <li className="sidebar-item" onClick={() => setCurrentTab('messages')}>
            <div className="sidebar-item-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-item-icon">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span>Settings</span>
            </div>
          </li>
        </ul>

        {/* Sidebar Business Profile */}
        <div className="sidebar-profile">
          <div className="sidebar-profile-left">
            <img src={greenbrewLogo} alt="GreenBrew Co." className="sidebar-profile-avatar" />
            <div className="sidebar-profile-info">
              <span className="sidebar-profile-name">GreenBrew Co.</span>
              <span className="sidebar-profile-role">Business Account</span>
            </div>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sidebar-profile-chevron">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </aside>

      {/* Main Container */}
      <div className="dashboard-main">
        {/* Header (Top Nav) */}
        <header className="dashboard-header">
          {/* Search bar */}
          <div className="search-container">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input 
              type="text" 
              placeholder="Search materials, industries, or locations..." 
              className="search-input" 
            />
          </div>

          {/* Location / Notify / Profile */}
          <div className="header-right">
            {/* Header Location Selector */}
            <div className="position-relative" ref={dropdownRef}>
              <button 
                className="location-selector" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label="Select location"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="location-icon">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>{location}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="location-dropdown" role="listbox">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      className={`location-option ${location === loc ? 'active' : ''}`}
                      onClick={() => {
                        setLocation(loc);
                        setIsDropdownOpen(false);
                      }}
                      role="option"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <button 
              className="notification-button" 
              onClick={() => setNotificationCount(0)}
              aria-label="View notifications"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="notification-icon">
                <path d="M6 8a6 6 0 0 0 12 0c0 7-3 9-3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              {notificationCount > 0 && <span className="notification-badge" />}
            </button>

            {/* User Profile avatar */}
            <div className="header-user-profile">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="header-user-icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <img src={userAvatar} alt="Profile" className="header-user-avatar" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="dashboard-content">
          <h1 className="inbox-title">Inbox</h1>

          <div className="inbox-grid">
            
            {/* Column 1: Conversations List */}
            <div className="inbox-panel">
              <div className="conversations-header">Conversations</div>
              <div className="conversations-list">
                {conversations.map((conv) => (
                  <div 
                    key={conv.id} 
                    className={`conversation-item ${activeConvId === conv.id ? 'active' : ''}`}
                    onClick={() => setActiveConvId(conv.id)}
                  >
                    <div className="conv-avatar-wrapper">
                      {conv.avatar ? (
                        <img src={conv.avatar} alt={conv.name} className="conv-avatar" />
                      ) : (
                        <div className={`conv-avatar-placeholder bg-${conv.avatarColor || 'purple'}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="conv-avatar-placeholder-icon">
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="conv-details">
                      <div className="conv-row-top">
                        <span className="conv-name">{conv.name}</span>
                        <span className="conv-time">{conv.time}</span>
                      </div>
                      <p className="conv-preview">
                        {conv.statusText.includes('←') ? '← ' : ''}
                        {conv.preview}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Active Chat Area */}
            <div className="inbox-panel">
              {/* Chat panel header */}
              <div className="chat-header">
                <div className="chat-header-info">
                  {activeConv.avatar ? (
                    <img src={activeConv.avatar} alt={activeConv.name} className="conv-avatar" />
                  ) : (
                    <div className="chat-header-avatar-placeholder bg-green">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chat-leaf-icon" style={{ color: '#10b981' }}>
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
                      </svg>
                    </div>
                  )}
                  <h2 className="chat-header-title">
                    {activeConv.name}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="exchange-arrow-icon">
                      <polyline points="17 1 21 5 17 9" />
                      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                      <polyline points="7 23 3 19 7 15" />
                      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="chat-leaf-icon">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
                    </svg>
                  </h2>
                </div>
                
                <button className="chat-more-button" aria-label="More options">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="chat-more-icon">
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>

              {/* Deal Status Banner */}
              <div className="deal-status-banner">
                <span className="deal-status-dot" />
                <span>Deal Status: {activeConv.dealStatus}</span>
              </div>

              {/* Messages list */}
              <div className="chat-messages">
                {activeConv.messages.map((msg) => (
                  <div key={msg.id} className={`message-group ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                    {msg.sender === 'them' && (
                      <div className="message-bubble-avatar">
                        {activeConv.avatar ? (
                          <img src={activeConv.avatar} alt={activeConv.name} className="message-bubble-avatar-img" />
                        ) : (
                          <div className="conv-avatar-placeholder bg-green" style={{ width: '28px', height: '28px' }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chat-leaf-icon" style={{ width: '14px', height: '14px', color: '#10b981' }}>
                              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className={`message-bubble-container ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                      <div className={`message-bubble ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                        {msg.text}
                      </div>
                      <span className="message-status">{msg.status}</span>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Container */}
              <form className="chat-input-container" onSubmit={handleSendMessage}>
                <div className="chat-input-wrapper">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="chat-input"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <button type="button" className="chat-emoji-button" aria-label="Insert Emoji">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chat-emoji-icon">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </button>
                </div>
                <button type="submit" className="chat-send-button" aria-label="Send message">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chat-send-icon">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Column 3: Deal Confirmation Detail Panel */}
            <div className="inbox-panel">
              <div className="deal-header">Deal Confirmation</div>
              
              <div className="deal-content">
                
                {/* Material information card */}
                <div className="deal-material-card">
                  <div className="deal-material-img-wrapper">
                    <img 
                      src={activeConv.material.image} 
                      alt={activeConv.material.name} 
                      className="deal-material-img" 
                    />
                  </div>
                  <div className="deal-material-info">
                    <span className="deal-material-label">MATERIAL INVOLVED</span>
                    <h3 className="deal-material-name">{activeConv.material.name}</h3>
                    <span className="deal-material-amount">{activeConv.material.amount}</span>
                  </div>
                </div>

                {/* Deal schedule and transport boxes */}
                <div className="deal-info-card">
                  <div className="deal-info-row">
                    <div className="deal-info-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="deal-info-icon">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div className="deal-info-details">
                      <span className="deal-info-title">Scheduled pickup</span>
                      <span className="deal-info-value">{activeConv.pickup}</span>
                    </div>
                  </div>

                  <div className="deal-info-row">
                    <div className="deal-info-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="deal-info-icon">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <div className="deal-info-details">
                      <span className="deal-info-title">Transport logistics</span>
                      <span className="deal-info-value">{activeConv.transport}</span>
                    </div>
                  </div>
                </div>

                {/* Finalize Button */}
                <button 
                  className="btn-finalize"
                  onClick={() => setIsContractModalOpen(true)}
                >
                  Finalize Logistics & Create Contract
                </button>

                {/* Sparkle card at the bottom right */}
                <div 
                  className="deal-sparkle-card"
                  onClick={() => setIsContractModalOpen(true)}
                >
                  <span className="deal-sparkle-text">
                    Finalize Logistics & Create Contract
                  </span>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="deal-sparkle-icon">
                    <path d="M12 2l2.4 7.2 7.6.8-5.6 5.4 1.6 7.6-6-4-6 4 1.6-7.6-5.6-5.4 7.6-.8z" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Celebration success contract modal */}
      {isContractModalOpen && (
        <div className="modal-overlay" onClick={() => setIsContractModalOpen(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-success-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="modal-success-icon">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="modal-title">Contract Drafted!</h2>
            <p className="modal-description">
              Logistics have been finalized and a smart symbiosis contract has been generated for this matching.
            </p>
            <div className="modal-details-box">
              <div className="modal-detail-row">
                <span className="modal-detail-label">Partner:</span>
                <span className="modal-detail-value">{activeConv.name}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Material:</span>
                <span className="modal-detail-value">{activeConv.material.name}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Quantity:</span>
                <span className="modal-detail-value">{activeConv.material.amount}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Pickup Schedule:</span>
                <span className="modal-detail-value">{activeConv.pickup}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Transport Type:</span>
                <span className="modal-detail-value">{activeConv.transport}</span>
              </div>
            </div>
            <button className="btn-modal-close" onClick={() => setIsContractModalOpen(false)}>
              Close & Return
            </button>
          </div>
        </div>
      )}

    </div>
  );

  return currentTab === 'matches' ? renderMatchesView() : renderMessagesView();
}

export default App;
