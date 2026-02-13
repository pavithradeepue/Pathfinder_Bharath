import React, { useState, useEffect } from 'react';
import { Battery } from 'lucide-react';
import './BatteryStatus.css';

const BatteryStatus = ({ percentage, setBatteryPercentage }) => {
  const [isCharging, setIsCharging] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const getBatteryColor = () => {
    if (percentage >= 60) return '#4ade80'; // green
    if (percentage >= 30) return '#fbbf24'; // yellow
    return '#ef4444'; // red
  };

  // Calculate time remaining based on battery percentage and charging state
  useEffect(() => {
    if (isCharging) {
      // Time to full charge (assuming 1% per 2 minutes)
      const remainingCharge = 100 - percentage;
      setTimeRemaining(remainingCharge * 2);
    } else {
      // Time to empty (assuming 1% per 3 minutes of usage)
      setTimeRemaining(percentage * 3);
    }
  }, [percentage, isCharging]);

  const formatTime = (minutes) => {
    if (minutes < 60) {
      return `${minutes} mins`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="battery-status-card">
      <div className="battery-icon-wrapper">
        <Battery 
          size={48} 
          color={getBatteryColor()} 
          fill={getBatteryColor()} 
          strokeWidth={2}
        />
      </div>
      
      <div className="battery-info">
        <p className="battery-label">Current Battery Percentage</p>
        <div className="battery-percentage">
          <span className="percentage-value">{percentage}</span>
          <span className="percentage-symbol">%</span>
        </div>
        <p className="battery-sublabel">
          {isCharging ? '⚡' : '🔋'} {isCharging ? '+' : '-'}{formatTime(timeRemaining)} {isCharging ? 'to full' : 'remaining'}
        </p>
        <button 
          className="charging-toggle"
          onClick={() => setIsCharging(!isCharging)}
        >
          {isCharging ? '🔌 Charging' : '🚗 Driving'}
        </button>
      </div>

      <div className="battery-control">
        <label className="slider-label">Adjust Battery Level:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setBatteryPercentage(Number(e.target.value))}
          className="battery-slider"
          style={{
            background: `linear-gradient(to right, ${getBatteryColor()} 0%, ${getBatteryColor()} ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
          }}
        />
        <div className="slider-markers">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default BatteryStatus;
