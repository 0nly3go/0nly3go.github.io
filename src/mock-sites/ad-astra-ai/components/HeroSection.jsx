'use client';

import React, { useState, useEffect } from 'react';
import { ShootingStars } from './ShootingStars';
import { StarsField } from './StarsField';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const words = ['Transform', 'Elevate', 'Innovate', 'Accelerate'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000); // Slower transition for smoother effect
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background stars */}
      <StarsField className="z-0" starCount={150} />
      
      {/* Shooting stars */}
      <ShootingStars className="z-10" />
      
      {/* Hero content */}
      <div className={`relative z-20 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Company logo/name */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              AD ASTRA
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-light text-gray-300 tracking-widest">
            AI
          </h2>
        </div>

        {/* Dynamic tagline */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            We take organizations{' '}
            <span className="text-white font-semibold">to the stars</span>{' '}
            with AI literacy and transformation
          </p>
          
          <div className="h-20 flex items-center justify-center overflow-hidden">
            <span className="text-3xl md:text-4xl font-bold relative flex items-center">
              <span className="text-gray-500">We </span>
              
              {/* Scroll wheel effect for words */}
              <div className="inline-block relative h-12 w-52 overflow-hidden">
                <div 
                  className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateY(-${currentWordIndex * 100}%)`
                  }}
                >
                  {words.concat(words[0]).map((word, index) => (
                    <div
                      key={index}
                      className="h-12 flex items-center justify-center text-yellow-200"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(254, 240, 138, 0.3))',
                        opacity: index === currentWordIndex ? 1 : 0.4
                      }}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Empowering{' '}
          <span className="text-white font-medium">businesses</span>,{' '}
          <span className="text-white font-medium">non-profits</span>, and{' '}
          <span className="text-white font-medium">educational networks</span>{' '}
          through comprehensive AI literacy and strategic transformation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 bg-yellow-200/10 border border-yellow-200/30 text-yellow-100 font-semibold rounded-lg hover:bg-yellow-200/20 hover:border-yellow-200/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/10">
            <span className="flex items-center justify-center gap-2">
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-yellow-200/50 hover:text-yellow-100 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/5">
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes smoothFade {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.02); 
          }
        }
      `}</style>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
    </div>
  );
};