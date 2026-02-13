import React, { useState } from 'react';
import './GlassPathFinder.css';
import { Battery, Navigation, MapPin, AlertTriangle } from 'lucide-react';

const GlassPathFinder = () => {
  const [batteryPercentage, setBatteryPercentage] = useState(65);
  const [sadakScore, setSadakScore] = useState(0.73);
  const [location, setLocation] = useState('Los Angeles');
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
    if (batteryPercentage >= 60) return '#32ff7e';
    if (batteryPercentage >= 30) return '#00bfff';
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
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="glass-hero-section">
            <div className="hero-content">
              <h1 className="hero-main-title">
                Bharat Path
                <br />
                Finder
              </h1>
              <p className="hero-description">
                EV Routing with advanced battery management and road quality analysis
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
                    <circle cx="32" cy="20" r="10" stroke="#00bfff" strokeWidth="2" fill="none" filter="url(#glow-user)"/>
                    <path d="M 12 50 Q 12 35 32 35 Q 52 35 52 50" stroke="#00bfff" strokeWidth="2" fill="none" filter="url(#glow-user)"/>
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
                    <rect x="10" y="10" width="20" height="20" stroke="#32ff7e" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <rect x="34" y="10" width="20" height="20" stroke="#32ff7e" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <rect x="10" y="34" width="20" height="20" stroke="#32ff7e" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <rect x="34" y="34" width="20" height="20" stroke="#32ff7e" strokeWidth="2" fill="none" filter="url(#glow-logic)"/>
                    <line x1="20" y1="30" x2="34" y2="30" stroke="#32ff7e" strokeWidth="1.5" filter="url(#glow-logic)"/>
                    <line x1="30" y1="20" x2="30" y2="34" stroke="#32ff7e" strokeWidth="1.5" filter="url(#glow-logic)"/>
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
                    <ellipse cx="32" cy="15" rx="20" ry="6" stroke="#00bfff" strokeWidth="2" fill="none" filter="url(#glow-data)"/>
                    <ellipse cx="32" cy="32" rx="20" ry="6" stroke="#00bfff" strokeWidth="2" fill="none" filter="url(#glow-data)"/>
                    <ellipse cx="32" cy="49" rx="20" ry="6" stroke="#00bfff" strokeWidth="2" fill="none" filter="url(#glow-data)"/>
                    <line x1="12" y1="15" x2="12" y2="49" stroke="#00bfff" strokeWidth="2" filter="url(#glow-data)"/>
                    <line x1="52" y1="15" x2="52" y2="49" stroke="#00bfff" strokeWidth="2" filter="url(#glow-data)"/>
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
              <div className="feature-icon-wrapper">
                <Navigation size={48} color="#8b5cf6" strokeWidth={2} />
              </div>
              <h3 className="feature-title">Safe Route Calculation</h3>
              <p className="feature-description">
                Using real-time battery and road data, our intelligent algorithm calculates the safest and most energy-efficient routes for your EV journey.
              </p>
              <div className="feature-stats">
                <div className="stat-item">
                  <Battery size={20} color="#4ade80" />
                  <span>Battery: {batteryPercentage}%</span>
                </div>
                <div className="stat-item">
                  <MapPin size={20} color="#60a5fa" />
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
              <div className="feature-icon-wrapper">
                <div className="road-icon">🛣️</div>
              </div>
              <h3 className="feature-title">Sadak-Score</h3>
              <p className="feature-description">
                An analysis of road quality for energy efficiency. We evaluate road conditions to minimize battery drain and maximize your vehicle's range.
              </p>
              <div className="sadak-score-display">
                <div className="score-circle">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="rgba(30, 30, 30, 0.8)"
                      strokeWidth="10"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#32ff7e"
                      strokeWidth="10"
                      strokeDasharray={`${(sadakScore / 10) * 314} 314`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                      style={{ 
                        transition: 'stroke-dasharray 0.5s ease',
                        filter: 'drop-shadow(0 0 8px rgba(50, 255, 126, 0.6))'
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
              <div className="feature-icon-wrapper">
                <div className="grid-icon">⚡</div>
              </div>
              <h3 className="feature-title">Grid-Trust</h3>
              <p className="feature-description">
                Reliability scores for EV charging stations. Access real-time availability, user ratings, and network stability data for charging infrastructure.
              </p>
              <div className="grid-trust-indicators">
                <div className="trust-item">
                  <div className="trust-bar">
                    <div className="trust-fill" style={{ width: '92%', background: '#32ff7e' }}></div>
                  </div>
                  <span className="trust-label">Station Availability: 92%</span>
                </div>
                <div className="trust-item">
                  <div className="trust-bar">
                    <div className="trust-fill" style={{ width: '88%', background: '#00bfff' }}></div>
                  </div>
                  <span className="trust-label">Network Stability: 88%</span>
                </div>
                <div className="trust-item">
                  <div className="trust-bar">
                    <div className="trust-fill" style={{ width: '95%', background: '#32ff7e' }}></div>
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
        <div className="floating-icon">
          <span className="lightning-icon">⚡</span>
        </div>
        <span className="floating-label">Auto Detect</span>
      </button>
      <div className="floating-badge floating-badge-right">
        <div className="badge-icon">🛣️</div>
        <span className="badge-label">Smart Route</span>
        <div className="badge-pulse"></div>
      </div>
    </div>
  );
};

export default GlassPathFinder;
