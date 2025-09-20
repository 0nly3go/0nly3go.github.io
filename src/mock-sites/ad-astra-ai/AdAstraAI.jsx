'use client';

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { EnhancedStars } from './components/EnhancedStars';

export const AdAstraAI = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Global enhanced star field */}
      <EnhancedStars className="fixed inset-0 z-0" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold">
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  AD ASTRA AI
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                Services
              </a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors duration-200">
                Team
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <button className="px-4 py-2 bg-yellow-200/10 border border-yellow-200/30 text-yellow-100 rounded-lg hover:bg-yellow-200/20 hover:border-yellow-200/50 transition-all duration-200">
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content with relative z-index to appear above stars */}
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="team">
          <TeamSection />
        </section>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default AdAstraAI;