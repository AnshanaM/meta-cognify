// components/ProgressRing.tsx
import React from 'react';
import '../styles/ProgressRing.css';

interface ProgressRingProps {
  progress: number;
  radius: number;
  stroke: number;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ progress, radius, stroke }) => {
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      className="progress-ring"
      width={radius * 2}
      height={radius * 2}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8D1F66" />
          <stop offset="50%" stopColor="#6F1C84" />
          <stop offset="100%" stopColor="#481888" />
        </linearGradient>
      </defs>
      <circle
        className="progress-ring__background"
        stroke="#e6e6e6"
        strokeWidth={stroke}
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className="progress-ring__progress"
        stroke="url(#gradient)"
        strokeWidth={stroke}
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ strokeDasharray: circumference, strokeDashoffset }}
      />
      <text
        className="progress-ring__text"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24px"
        fill="#ffffff"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default ProgressRing;
