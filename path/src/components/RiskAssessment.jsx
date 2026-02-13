import React from 'react';
import './RiskAssessment.css';

const RiskAssessment = ({ riskLevel, onCalculate, onSafeRouting }) => {
  const getRiskClass = () => {
    if (riskLevel.includes('High')) return 'high-risk';
    if (riskLevel.includes('Medium')) return 'medium-risk';
    return 'low-risk';
  };

  return (
    <div className="risk-assessment-card">
      <h3 className="risk-title">ESTIMATED RISK</h3>
      
      <div className={`risk-badge ${getRiskClass()}`}>
        {riskLevel}
      </div>

      <div className="action-buttons">
        <button 
          className="calculate-btn"
          onClick={onCalculate}
        >
          Calculate
        </button>
        <button 
          className="safe-routing-btn"
          onClick={onSafeRouting}
        >
          Safe Routing
        </button>
      </div>

      <div className="risk-info">
        <p className="info-text">
          Risk is calculated based on current battery level and road quality conditions.
        </p>
      </div>
    </div>
  );
};

export default RiskAssessment;
