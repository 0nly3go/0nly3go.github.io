'use client';

import React, { useState, useEffect, useRef } from 'react';

export const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "AI Literacy Programs",
      description: "Comprehensive training programs to elevate your team's understanding of AI technologies and their practical applications.",
      icon: "🎓",
      features: [
        "Executive AI Education",
        "Technical Skills Development",
        "Hands-on Workshops",
        "Custom Learning Paths"
      ],
      targetAudience: "All Organizations"
    },
    {
      id: 2,
      title: "Business Transformation",
      description: "Strategic AI implementation to revolutionize your business processes, enhance efficiency, and drive competitive advantage.",
      icon: "🚀",
      features: [
        "Process Automation",
        "Strategic Planning",
        "ROI Optimization",
        "Change Management"
      ],
      targetAudience: "Businesses"
    },
    {
      id: 3,
      title: "Non-Profit Innovation",
      description: "Tailored AI solutions to amplify your mission, optimize resource allocation, and maximize social impact.",
      icon: "🌟",
      features: [
        "Impact Measurement",
        "Resource Optimization",
        "Volunteer Management",
        "Donor Engagement"
      ],
      targetAudience: "Non-Profits"
    },
    {
      id: 4,
      title: "Educational Excellence",
      description: "Transform educational networks with AI-powered learning experiences and administrative innovations.",
      icon: "🎯",
      features: [
        "Curriculum Integration",
        "Student Analytics",
        "Administrative Efficiency",
        "Personalized Learning"
      ],
      targetAudience: "Educational Networks"
    },
    {
      id: 5,
      title: "Strategic Consulting",
      description: "Expert guidance on AI adoption strategy, risk management, and sustainable implementation frameworks.",
      icon: "🧭",
      features: [
        "AI Readiness Assessment",
        "Implementation Roadmaps",
        "Risk Mitigation",
        "Performance Metrics"
      ],
      targetAudience: "All Organizations"
    },
    {
      id: 6,
      title: "Ethical AI Implementation",
      description: "Ensure responsible AI deployment with comprehensive ethical frameworks and compliance strategies.",
      icon: "⚖️",
      features: [
        "Ethics Framework Development",
        "Bias Detection & Mitigation",
        "Compliance Management",
        "Transparency Protocols"
      ],
      targetAudience: "All Organizations"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-card-id]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Animated background constellation */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="absolute">
            <div
              className="w-px h-px bg-gray-600 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
            {/* Connect some stars with lines */}
            {i % 5 === 0 && (
              <svg
                className="absolute w-20 h-20 opacity-20"
                style={{
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 80}%`,
                }}
              >
                <line
                  x1="0" y1="0"
                  x2={Math.random() * 80}
                  y2={Math.random() * 80}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-600"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-200 drop-shadow-sm" style={{ filter: 'drop-shadow(0 0 8px rgba(254, 240, 138, 0.3))' }}>Constellation</span> of Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate your organization's AI transformation journey with our comprehensive suite of services, 
            designed to take you <span className="text-white font-medium">to the stars</span>.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-card-id={service.id}
              className={`group relative bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-200/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-200/10 ${
                visibleCards.has(service.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: visibleCards.has(service.id) ? `${index * 0.1}s` : '0s'
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-600/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and target audience badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                    {service.targetAudience}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-center text-sm text-gray-400 transition-all duration-300 ${
                        hoveredService === service.id 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-70 translate-x-2'
                      }`}
                      style={{ transitionDelay: `${featureIndex * 0.05}s` }}
                    >
                      <div className="w-1 h-1 bg-yellow-200 rounded-full mr-3 group-hover:bg-yellow-100 transition-colors duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-gradient-to-r from-transparent to-transparent border border-gray-600 text-gray-300 rounded-lg hover:from-yellow-200/10 hover:to-yellow-200/5 hover:border-yellow-200/30 hover:text-yellow-100 transition-all duration-300 group-hover:shadow-lg">
                  Learn More
                  <svg className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Floating particles effect on hover */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-ping opacity-15"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Let us guide your organization through a transformative AI journey that will elevate your capabilities and impact.
            </p>
            <button className="px-8 py-4 bg-yellow-200/10 border border-yellow-200/30 text-yellow-100 font-semibold rounded-lg hover:bg-yellow-200/20 hover:border-yellow-200/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/10">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};