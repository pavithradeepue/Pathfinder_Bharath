import React, { useState } from 'react';
import BatteryStatus from './components/BatteryStatus';
import RoadQualityScore from './components/RoadQualityScore';
import RiskAssessment from './components/RiskAssessment';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

function App() {
  const [batteryPercentage, setBatteryPercentage] = useState(65);
  const [sadakScore, setSadakScore] = useState(0.73);
  const [location, setLocation] = useState('Los Angeles');
  const [riskLevel, setRiskLevel] = useState('Medium Risk');

  const calculateRisk = () => {
    // Risk calculation logic based on battery and road quality
    if (batteryPercentage < 30 || sadakScore > 7) {
      setRiskLevel('High Risk');
    } else if (batteryPercentage >= 30 && batteryPercentage < 60 || sadakScore > 4) {
      setRiskLevel('Medium Risk');
    } else {
      setRiskLevel('Low Risk');
    }
  };

  const handleSafeRouting = () => {
    // This would integrate with routing API
    alert('Finding safest route based on battery level and road conditions...');
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header location={location} setLocation={setLocation} />
        
        <div className="content-wrapper">
          <BatteryStatus 
            percentage={batteryPercentage} 
            setBatteryPercentage={setBatteryPercentage}
          />
          
          <RoadQualityScore 
            score={sadakScore}
            setScore={setSadakScore}
          />
          
          <RiskAssessment 
            riskLevel={riskLevel}
            onCalculate={calculateRisk}
            onSafeRouting={handleSafeRouting}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
