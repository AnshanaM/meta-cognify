import React from 'react';
import '../styles/ProgressBar.css';

interface ProgressBarProps {
  progress: number; // progress percentage (0-100)
  color: string; // hex color value for the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
