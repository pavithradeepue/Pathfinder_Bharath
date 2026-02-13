import React from 'react';
import { Battery, MapPin, Navigation, Printer, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="white" stroke="#1e293b" strokeWidth="2"/>
          <path d="M20 10 L20 30 M15 20 L25 20" stroke="#1e293b" strokeWidth="2"/>
        </svg>
      </div>
      
      <nav className="sidebar-nav">
        <button className="nav-item active" title="Battery Status">
          <Battery size={24} />
        </button>
        <button className="nav-item" title="Navigation">
          <Navigation size={24} />
        </button>
        <button className="nav-item" title="Location">
          <MapPin size={24} />
        </button>
        <button className="nav-item" title="Print">
          <Printer size={24} />
        </button>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item" title="Settings">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
