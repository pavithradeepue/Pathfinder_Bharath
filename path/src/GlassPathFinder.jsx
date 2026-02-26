import React, { useState } from 'react';
import './GlassPathFinder.css';
import { Battery, Navigation, MapPin, AlertTriangle } from 'lucide-react';

const GlassPathFinder = () => {
  const [batteryPercentage, setBatteryPercentage] = useState(65);
  const [sadakScore, setSadakScore] = useState(0.73);
  const [location, setLocation] = useState('Kalady');
  const [riskLevel, setRiskLevel] = useState('Medium Risk');

  const calculateRisk = () => {
    if (batteryPercentage < 30 || sadakScore > 7) {
      setRiskLevel('High Risk');
    } else if (batteryPercentage >= 30 && batteryPercentage < 60 || sadakScore > 4) {
      setRiskLevel('Medium Risk');
    } else {
      setRiskLevel('Low Risk');
    }
  };

  const handleSafeRouting = () => {
    alert('Finding safest route based on battery level and road conditions...');
  };

  const getBatteryColor = () => {
    if (batteryPercentage >= 60) return '#4ade80';
    if (batteryPercentage >= 30) return '#1e3a8a';
    return '#ff4d4d';
  };

  const getRiskClass = () => {
    if (riskLevel.includes('High')) return 'high-risk';
    if (riskLevel.includes('Medium')) return 'medium-risk';
    return 'low-risk';
  };

  return (
    <div className="glass-pathfinder-wrapper">
      {/* Animated Background Shapes */}
      <div className="glass-bg-container">
        <div className="shape-orb orb-1"></div>
        <div className="shape-orb orb-2"></div>
        <div className="shape-orb orb-3"></div>
        <div className="shape-geometric shape-cube"></div>
        <div className="shape-geometric shape-torus"></div>
        <div className="gradient-mesh"></div>
      </div>

      {/* Main Content */}
      <div className="glass-pathfinder-content">
        {/* Glass Window Container */}
        <div className="glass-macos-window">
          {/* Window Header with Traffic Lights and Nav */}
          <div className="glass-window-titlebar">
            {/* Traffic Light Buttons */}
            <div className="traffic-lights">
              <div className="traffic-light red"></div>
              <div className="traffic-light yellow"></div>
              <div className="traffic-light green"></div>
            </div>

            {/* Navigation */}
            <nav className="glass-navbar">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="#login" className="nav-link">Login</a>
            </nav>

            {/* Location Badge */}
            <div className="location-badge">
              <MapPin size={16} color="#4ade80" strokeWidth={2.5} className="icon-glow-green" />
              <span>{location}</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="glass-hero-section">
            <div className="hero-content">
              <h1 className="hero-main-title">
                Volt-AI
              </h1>
              <p className="hero-description">
                Intelligent Energy Navigation for Electric Vehicles — Powered by real-time battery analytics, road quality assessment, and charging infrastructure intelligence
              </p>
              
              {/* Energy Risk Level Status Bar */}
              <div className="energy-status-bar">
                <div className="status-indicator">
                  <span className="status-label">Energy Risk Level:</span>
                  <span className={`status-value ${getRiskClass()}`}>
                    {riskLevel} at {batteryPercentage}% battery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Layer Architecture Section */}
          <div className="architecture-section">
            <h2 className="architecture-title">3-Layer Architecture</h2>
            <div className="architecture-grid">
              {/* User Layer */}
              <div className="architecture-layer">
                <div className="layer-icon-wrapper">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="glow-user">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="32" cy="20" r="10" stroke="#4ade80" strokeWidth="2" fill="none" filter="url(#glow-user)"/>
                    <path d="M 12 50 Q 12 35 32 35 Q 52 35 52 50" stroke="#4ade80" strokeWidth="2" fill="none" filter="url(#glow-user)"/>
                  </svg>
                </div>
                <h3 className="layer-title">User Layer</h3>
                <p className="layer-description">Interactive interface for drivers to input preferences and view routes</p>
              </div>

              {/* Logic Layer */}
              <div className="architecture-layer">
                <div className="layer-icon-wrapper">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="glow-logic">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <rect x="10" y="10" width="20" height="20" stroke="#1e3a8a" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <rect x="34" y="10" width="20" height="20" stroke="#1e3a8a" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <rect x="10" y="34" width="20" height="20" stroke="#1e3a8a" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <rect x="34" y="34" width="20" height="20" stroke="#1e3a8a" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <line x1="20" y1="30" x2="34" y2="30" stroke="#4ade80" strokeWidth="1.5" filter="url(#glow-logic)"/>
                    <line x1="30" y1="20" x2="30" y2="34" stroke="#4ade80" strokeWidth="1.5" filter="url(#glow-logic)"/>
                  </svg>
                </div>
                <h3 className="layer-title">Logic Layer</h3>
                <p className="layer-description">Core algorithms for route calculation and risk assessment</p>
              </div>

              {/* External Data Layer */}
              <div className="architecture-layer">
                <div className="layer-icon-wrapper">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="glow-data">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <ellipse cx="32" cy="15" rx="20" ry="6" stroke="#4ade80" strokeWidth="2" fill="none" filter="url(#glow-data)"/>
                    <ellipse cx="32" cy="32" rx="20" ry="6" stroke="#4ade80" strokeWidth="2" fill="none" filter="url(#glow-data)"/>
                    <ellipse cx="32" cy="49" rx="20" ry="6" stroke="#4ade80" strokeWidth="2" fill="none" filter="url(#glow-data)"/>
                    <line x1="12" y1="15" x2="12" y2="49" stroke="#4ade80" strokeWidth="2" filter="url(#glow-data)"/>
                    <line x1="52" y1="15" x2="52" y2="49" stroke="#4ade80" strokeWidth="2" filter="url(#glow-data)"/>
                  </svg>
                </div>
                <h3 className="layer-title">External Data</h3>
                <p className="layer-description">Real-time traffic, weather, and charging station data integration</p>
              </div>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className="dashboard-grid">
            {/* Safe Route Calculation Card */}
            <div className="glass-dashboard-card feature-card">
              <div className="feature-icon-wrapper energy-certainty-icon">
                <Navigation size={48} color="#4ade80" strokeWidth={2.5} className="icon-glow-green" />
              </div>
              <h3 className="feature-title">Energy Certainty</h3>
              <p className="feature-description">
                Calculate 'Safe Routes' based on real-time battery levels and energy consumption patterns. Our AI-powered routing ensures you never run out of charge mid-journey.
              </p>
              <div className="feature-stats">
                <div className="stat-item">
                  <Battery size={20} color="#4ade80" strokeWidth={2.5} className="icon-pulse-green" />
                  <span>Battery: {batteryPercentage}%</span>
                </div>
                <div className="stat-item">
                  <MapPin size={20} color="#1e3a8a" strokeWidth={2.5} className="icon-glow-blue" />
                  <span>{location}</span>
                </div>
              </div>
              <button 
                className="glass-action-btn primary"
                onClick={handleSafeRouting}
              >
                Find Safe Route
              </button>
            </div>

            {/* Sadak-Score Card */}
            <div className="glass-dashboard-card feature-card">
              <div className="feature-icon-wrapper sadak-score-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-glow-gradient">
                  <defs>
                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                    <filter id="roadGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M 8 24 Q 24 10 40 24 Q 24 38 8 24 Z" stroke="url(#roadGradient)" strokeWidth="3" fill="none" filter="url(#roadGlow)"/>
                  <circle cx="24" cy="18" r="3" fill="#4ade80" filter="url(#roadGlow)"/>
                  <circle cx="16" cy="24" r="2" fill="#1e3a8a" filter="url(#roadGlow)"/>
                  <circle cx="32" cy="24" r="2" fill="#1e3a8a" filter="url(#roadGlow)"/>
                  <path d="M 12 28 L 36 28 M 14 32 L 34 32 M 16 36 L 32 36" stroke="url(#roadGradient)" strokeWidth="2" strokeDasharray="4 2" filter="url(#roadGlow)"/>
                </svg>
              </div>
              <h3 className="feature-title">Sadak-Score</h3>
              <p className="feature-description">
                Advanced road quality analysis for optimal energy efficiency. Real-time surface condition assessment minimizes battery drain and maximizes range on every journey.
              </p>
              <div className="sadak-score-display">
                <div className="score-circle">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="rgba(15, 20, 25, 0.9)"
                      strokeWidth="10"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="10"
                      strokeDasharray={`${(sadakScore / 10) * 314} 314`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                      style={{ 
                        transition: 'stroke-dasharray 0.5s ease',
                        filter: 'drop-shadow(0 0 12px rgba(74, 222, 128, 0.8))'
                      }}
                    />
                  </svg>
                  <div className="score-text">
                    <span className="score-number">{sadakScore.toFixed(1)}</span>
                    <span className="score-max">/10</span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={sadakScore}
                onChange={(e) => setSadakScore(Number(e.target.value))}
                className="glass-slider"
              />
            </div>

            {/* Grid-Trust Card */}
            <div className="glass-dashboard-card feature-card">
              <div className="feature-icon-wrapper grid-trust-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-glow-blue">
                  <defs>
                    <filter id="gridGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <rect x="10" y="8" width="28" height="32" rx="4" stroke="#1e3a8a" strokeWidth="2.5" fill="none" filter="url(#gridGlow)"/>
                  <rect x="14" y="14" width="6" height="8" fill="#1e3a8a" filter="url(#gridGlow)"/>
                  <rect x="22" y="14" width="6" height="8" fill="#1e3a8a" filter="url(#gridGlow)"/>
                  <rect x="30" y="14" width="6" height="8" fill="#1e3a8a" filter="url(#gridGlow)"/>
                  <path d="M 18 30 L 24 24 L 30 30 L 24 36 Z" fill="#4ade80" filter="url(#gridGlow)"/>
                  <circle cx="24" cy="30" r="2" fill="#4ade80" filter="url(#gridGlow)"/>
                  <path d="M 20 28 L 22 30 L 20 32" stroke="#4ade80" strokeWidth="2" fill="none" filter="url(#gridGlow)"/>
                  <path d="M 28 28 L 26 30 L 28 32" stroke="#4ade80" strokeWidth="2" fill="none" filter="url(#gridGlow)"/>
                </svg>
              </div>
              <h3 className="feature-title">Grid-Trust</h3>
              <p className="feature-description">
                Reliability ratings for charging infrastructure. Access real-time station availability, network stability scores, and verified user ratings for complete charging confidence.
              </p>
              <div className="grid-trust-indicators">
                <div className="trust-item">
                  <div className="trust-bar">
                    <div className="trust-fill" style={{ width: '92%', background: '#4ade80' }}></div>
                  </div>
                  <span className="trust-label">Station Availability: 92%</span>
                </div>
                <div className="trust-item">
                  <div className="trust-bar">
                    <div className="trust-fill" style={{ width: '88%', background: '#1e3a8a' }}></div>
                  </div>
                  <span className="trust-label">Network Stability: 88%</span>
                </div>
                <div className="trust-item">
                  <div className="trust-bar">
                    <div className="trust-fill" style={{ width: '95%', background: '#4ade80' }}></div>
                  </div>
                  <span className="trust-label">User Rating: 95%</span>
                </div>
              </div>
              <button 
                className="glass-action-btn secondary"
                onClick={calculateRisk}
              >
                View Stations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Elements */}
      <button className="floating-button floating-button-left" onClick={calculateRisk}>
        <div className="floating-icon floating-icon-green">
          <AlertTriangle size={20} color="#ffffff" strokeWidth={2.5} />
        </div>
        <span className="floating-label">Auto Detect</span>
      </button>
      <div className="floating-badge floating-badge-right">
        <div className="badge-icon badge-icon-green">
          <Navigation size={20} color="#4ade80" strokeWidth={2.5} />
        </div>
        <span className="badge-label">Smart Route</span>
        <div className="badge-pulse"></div>
      </div>
    </div>
  );
};

export default GlassPathFinder;
