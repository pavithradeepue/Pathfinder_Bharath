import React from 'react';
import './RoadQualityScore.css';

const RoadQualityScore = ({ score, setScore }) => {
  const getScoreLabel = () => {
    if (score <= 3) return 'Smooth';
    if (score <= 6) return 'Moderate';
    return 'Rough';
  };

  const getScorePosition = () => {
    return (score / 10) * 100;
  };

  return (
    <div className="road-quality-card">
      <h3 className="road-quality-title">
        Road Adpat! Score <span className="auto-label">(Auto Generated)</span>
      </h3>
      <p className="sadak-score">Sadak Score - {score.toFixed(2)}</p>
      
      <div className="score-slider-wrapper">
        <div className="score-track">
          <div 
            className="score-indicator"
            style={{ left: `${getScorePosition()}%` }}
          >
            <div className="indicator-circle"></div>
          </div>
        </div>
        
        <div className="score-labels">
          <div className="score-label-item">
            <span className="label-value">00</span>
            <span className="label-text">smooth</span>
          </div>
          <div className="score-label-item center">
            <span className="label-text">{getScoreLabel()}</span>
          </div>
          <div className="score-label-item">
            <span className="label-value">10 Rough</span>
            <span className="label-text">10</span>
          </div>
        </div>
      </div>

      <div className="score-control">
        <label className="slider-label">Test Road Quality Score:</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="quality-slider"
        />
        <div className="slider-value-display">
          Current Score: <strong>{score.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default RoadQualityScore;
