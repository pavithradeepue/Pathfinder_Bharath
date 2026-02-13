import React from 'react';
import './GlassmorphismHero.css';

const GlassmorphismHero = () => {
  return (
    <div className="glass-hero-wrapper">
      {/* Animated Background Shapes */}
      <div className="glass-bg-shapes">
        {/* Metallic/Neon Orbs */}
        <div className="shape-orb shape-orb-1"></div>
        <div className="shape-orb shape-orb-2"></div>
        <div className="shape-orb shape-orb-3"></div>
        
        {/* Geometric Shapes */}
        <div className="shape-cube"></div>
        <div className="shape-torus"></div>
        
        {/* Gradient Mesh Overlay */}
        <div className="gradient-overlay"></div>
      </div>

      {/* Main Content Container */}
      <div className="glass-content-wrapper">
        {/* Glass Card - macOS Window */}
        <div className="glass-window">
          {/* Window Title Bar */}
          <div className="glass-window-header">
            {/* Traffic Light Buttons */}
            <div className="traffic-lights">
              <div className="traffic-light traffic-light-red"></div>
              <div className="traffic-light traffic-light-yellow"></div>
              <div className="traffic-light traffic-light-green"></div>
            </div>

            {/* Navigation Menu */}
            <nav className="glass-nav">
              <a href="#home" className="glass-nav-link">Home</a>
              <a href="#about" className="glass-nav-link">About</a>
              <a href="#services" className="glass-nav-link">Services</a>
              <a href="#contact" className="glass-nav-link">Contact</a>
              <a href="#login" className="glass-nav-link">Login</a>
            </nav>

            {/* Mobile Menu Icon */}
            <button className="mobile-menu-btn">
              <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Hero Content */}
          <div className="glass-hero-content">
            <div className="hero-text-container">
              {/* Main Heading */}
              <h1 className="hero-title">
                Glass
                <br />
                Morphism
              </h1>
              
              {/* Sub Heading */}
              <h2 className="hero-subtitle">
                mockup.
              </h2>

              {/* Description */}
              <p className="hero-description">
                Experience the future of modern design with our glassmorphism aesthetic. 
                A perfect blend of transparency, blur, and vibrant colors creates an 
                immersive visual experience.
              </p>

              {/* CTA Buttons */}
              <div className="hero-buttons">
                <button className="glass-btn glass-btn-primary">
                  Get Started
                </button>
                <button className="glass-btn glass-btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            {/* Decorative Card */}
            <div className="decorative-card">
              <div className="decorative-card-content">
                <div className="decorative-avatar"></div>
                <div className="decorative-text">
                  <p className="decorative-title">Premium Design</p>
                  <p className="decorative-subtitle">Modern & Elegant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glass Cards */}
      <div className="floating-card floating-card-1">
        <div className="floating-card-icon floating-card-icon-1"></div>
      </div>

      <div className="floating-card floating-card-2">
        <div className="floating-card-icon floating-card-icon-2"></div>
      </div>
    </div>
  );
};

export default GlassmorphismHero;
