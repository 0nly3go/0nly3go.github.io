'use client';

import React, { useState } from 'react';

export const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Joshua Mason",
      role: "Lead AI Implementation Strategist",
      image: "/assets/team/Joshua.jpg",
      bio: "CEO and Lead AI Consultant of FaithlineAI, Joshua brings extensive experience in AI research and development with a passion for helping businesses succeed through transformative AI solutions.",
      links: {
        linkedin: "https://www.linkedin.com/in/joshua-mason03/",
        website: "https://faithlineai.com/"
      },
      expertise: ["AI Strategy", "Business Transformation", "Innovation Leadership"]
    },
    {
      id: 2,
      name: "Dr. Mustafa Akben",
      role: "Senior AI Research Director",
      image: "/assets/team/mustafa.jpg",
      bio: "Ph.D. Assistant Professor at Elon University specializing in deep learning and generative AI. Expert in human-AI interaction and developing ML tools for social science research.",
      links: {
        linkedin: "https://www.linkedin.com/in/mustafaakben/",
        website: "https://mustafaakben.com/"
      },
      expertise: ["Deep Learning", "Generative AI", "Research & Development"]
    },
    {
      id: 3,
      name: "Aaron Satko",
      role: "Cybersecurity & Technology Integration Specialist", 
      image: "/assets/team/Aaron.jpg",
      bio: "Owner of Satko Cyber, providing comprehensive computer repair and cybersecurity services. Expert in sustainable technology practices and secure AI implementation.",
      links: {
        linkedin: "https://www.linkedin.com/in/aaron-satko/",
        website: "https://www.satkocyber.com/"
      },
      expertise: ["Cybersecurity", "Technology Repair", "Sustainable Tech"]
    },
    {
      id: 4,
      name: "Rebecca Macy",
      role: "Educational AI Integration Expert",
      image: "/assets/team/becca.jpg", 
      bio: "AI Literacy Consultant with over a decade of classroom experience. Certified in Anthropic AI Fluency and Google's Generative AI for Educators, specializing in ethical AI in education.",
      links: {
        linkedin: "https://www.linkedin.com/in/rebecca-macy-akben/",
        website: "https://sites.google.com/view/rebeccamacy/about"
      },
      expertise: ["AI Literacy", "Educational Technology", "Curriculum Development"]
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-200" style={{filter: 'drop-shadow(0 0 8px rgba(254, 240, 138, 0.3))'}}>Stellar</span> Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert consultants guiding your organization's journey to AI excellence
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative bg-black rounded-2xl p-6 border border-gray-700 hover:border-yellow-200/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-200/5 ${
                hoveredCard === member.id ? 'z-20' : ''
              }`}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-600/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              {/* Profile image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-gray-400 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Floating stars around image on hover */}
                {hoveredCard === member.id && (
                  <div className="absolute inset-0">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-200 rounded-full animate-ping opacity-20"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Member info */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {member.role}
                </p>
                <p className="text-sm text-gray-300 mb-6 transition-opacity duration-300">
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-1 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-700/50 text-yellow-200 text-xs rounded-full border border-yellow-200/20 transition-all duration-300 hover:bg-yellow-200/10"
                      style={{ transitionDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center space-x-4 transition-opacity duration-300">
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-200 transition-colors duration-200 p-2 rounded-full hover:bg-yellow-200/10"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-200 transition-colors duration-200 p-2 rounded-full hover:bg-yellow-200/10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};