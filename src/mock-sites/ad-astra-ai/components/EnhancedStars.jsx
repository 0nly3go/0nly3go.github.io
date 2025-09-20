'use client';

import React, { useState, useEffect } from 'react';

export const EnhancedStars = ({ className = "" }) => {
  const [stars, setStars] = useState([]);

  // Generate initial stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 3 + 1,
        twinkleDelay: Math.random() * 5,
        color: Math.random() > 0.8 ? 'yellow' : Math.random() > 0.6 ? 'blue' : 'white'
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  const getStarColor = (color) => {
    switch (color) {
      case 'blue': return '#93c5fd';
      case 'yellow': return '#fef3c7';
      default: return '#ffffff';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Static stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: getStarColor(star.color),
            opacity: star.opacity,
            animationDuration: `${star.twinkleSpeed}s`,
            animationDelay: `${star.twinkleDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px ${getStarColor(star.color)}50`
          }}
        />
      ))}

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {/* Generate some connecting lines between nearby stars */}
        {stars.slice(0, 20).map((star, index) => {
          const nextStar = stars[index + 1];
          if (!nextStar) return null;
          
          const distance = Math.sqrt(
            Math.pow(star.x - nextStar.x, 2) + Math.pow(star.y - nextStar.y, 2)
          );
          
          // Only draw lines for nearby stars
          if (distance > 15) return null;
          
          return (
            <line
              key={`line-${index}`}
              x1={`${star.x}%`}
              y1={`${star.y}%`}
              x2={`${nextStar.x}%`}
              y2={`${nextStar.y}%`}
              stroke="#374151"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}
      </svg>

      {/* Shooting star trails */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`trail-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-40"
            style={{
              width: '100px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `shootingTrail ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes shootingTrail {
          0% {
            transform: translateX(-200px) translateY(-200px) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(200px) translateY(200px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};