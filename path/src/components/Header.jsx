import React from 'react';
import { MapPin, HelpCircle, Maximize2 } from 'lucide-react';
import './Header.css';

const Header = ({ location, setLocation }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-title">PATH FINDER BHARATH</h1>
      </div>
      
      <div className="header-right">
        <div className="location-selector">
          <MapPin size={16} />
          <span>Your Location: {location}</span>
        </div>
        
        <button className="icon-button" title="Help">
          <HelpCircle size={20} />
        </button>
        
        <button className="icon-button" title="Fullscreen">
          <Maximize2 size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
