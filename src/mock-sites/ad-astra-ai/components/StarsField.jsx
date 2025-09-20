'use client';

import React, { useId, useMemo, useEffect, useState } from 'react';

// Sparkle component for individual twinkling stars
export const Sparkle = ({ size = 4, x = 0, y = 0, color = '#ffffff', opacity = 1 }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const flicker = () => {
      setIsVisible(prev => !prev);
      setTimeout(flicker, Math.random() * 2000 + 1000);
    };
    
    const timeout = setTimeout(flicker, Math.random() * 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`absolute transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-30'}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    </div>
  );
};

// Stars field background component
export const StarsField = ({ 
  className = "", 
  starCount = 100, 
  starColor = "#ffffff",
  maxStarSize = 6,
  minStarSize = 2 
}) => {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxStarSize - minStarSize) + minStarSize,
      opacity: Math.random() * 0.8 + 0.2,
    }));
  }, [starCount, maxStarSize, minStarSize]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {stars.map(star => (
        <Sparkle
          key={star.id}
          x={star.x}
          y={star.y}
          size={star.size}
          color={starColor}
          opacity={star.opacity}
        />
      ))}
    </div>
  );
};