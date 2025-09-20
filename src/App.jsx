import { useState } from 'react'
import { useEffect } from 'react'
// Remove these lines if you're not using them
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { ParticleBackground } from './components/ParticleBackground'
import { Testimonials } from './components/Testimonials'
import { SocialProof } from './components/SocialProof'
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { HeroVideo } from './components/HeroVideo';
import { CaseStudies as CaseStudiesSection } from './components/CaseStudies';
import { Resources } from './components/Resources';
import { Support } from './components/Support';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Services from './pages/Services';
import WhoWeHelp from './pages/WhoWeHelp';
import CaseStudiesPage from './pages/CaseStudies';
import Workshops from './pages/Workshops';
import ResourcesPage from './pages/Resources';
import About from './pages/About';
// Service page imports
import WorkflowAutomation from './pages/services/WorkflowAutomation';
import AIAgentsChatbots from './pages/services/AIAgentsChatbots';
import AIConsulting from './pages/services/AIConsulting';
import DataAnalytics from './pages/services/DataAnalytics';
import AppDevelopment from './pages/services/AppDevelopment';
import AIWorkshops from './pages/services/AIWorkshops';
import SocialMediaAutomation from './pages/services/SocialMediaAutomation';
import Mentorship from './pages/services/Mentorship';
import EthicalAIConsulting from './pages/services/EthicalAIConsulting';
import ChatbotWorkshop from './pages/workshops/ChatbotWorkshop';
import Blog from './pages/Blog';
import BeginnersGuideToAI from './pages/blog/BeginnersGuideToAI';
// Mock site import
import AdAstraAI from './mock-sites/ad-astra-ai/AdAstraAI';

function scrollToSection(id) {
  // Wait for navigation, then scroll
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 0);
}

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change (for mobile UX)
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  // Helper for nav links
  const handleNav = (section) => {
    setMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 50);
    } else {
      scrollToSection(section);
    }
  };

  // Nav links config
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Who We Help', to: '/who-we-help' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Workshops', to: '/workshops' },
    { label: 'Resources', to: '/resources' },
    { label: 'Blog', to: '/blog' },
    { label: 'About', to: '/about' },
  ];

  // Close menu when clicking outside the menu content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setMenuOpen(false);
  };

  return (
    <nav className="w-full flex flex-row justify-between items-center px-4 md:px-12 py-6 relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img src="/assets/LogoMark_White.png" alt="FaithlineAI Logo" className="h-10 w-auto object-contain" />
        </Link>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-4 md:gap-6 text-lg font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="relative px-3 py-1 rounded-full font-medium text-[#06b6d4] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] group overflow-hidden"
            onClick={() => setMenuOpen(false)}
          >
            <span className="relative z-10 group-hover:text-[#22d3ea] group-hover:font-semibold transition-colors duration-200">{link.label}</span>
            <span className="absolute left-1/2 bottom-1 w-0 h-0.5 bg-[#22d3ea] rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
            <span className="absolute inset-0 rounded-full bg-[#06b6d4]/10 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
          </Link>
        ))}
        <motion.button 
          onClick={() => handleNav('contact')}
          className="action-button px-6 py-2 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] rounded-lg font-medium shadow-lg shadow-[#2563eb]/20 text-white"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          Let's Talk
        </motion.button>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 z-30"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="sr-only">Toggle navigation</span>
        <svg
          className={`w-8 h-8 text-cyan-400 transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-20 transition-all md:hidden"
          onClick={handleOverlayClick}
        >
          <div className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto px-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="w-full text-center px-3 py-3 rounded-full text-2xl font-medium text-[#06b6d4] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] group overflow-hidden"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:text-[#22d3ea] group-hover:font-semibold transition-colors duration-200">{link.label}</span>
              </Link>
            ))}
            <motion.button 
              onClick={() => { setMenuOpen(false); handleNav('contact'); }}
              className="w-full text-center action-button px-4 py-3 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] rounded-lg font-medium shadow-lg shadow-[#2563eb]/20 text-white text-2xl font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-x-hidden">
        <Toaster position="top-center" />
        <div className="absolute inset-0 z-0 w-full h-full">
          <ParticleBackground />
        </div>
        <div className="relative z-10 w-full">
          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route path="/support" element={<Support />} />
            <Route path="/" element={
              <>
                {/* Main page content, excluding Support and Contact Us sections */}
                <main className="w-full flex flex-col items-center justify-center text-center px-6 min-h-screen relative">
                  <HeroVideo />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="w-full mx-auto relative z-10"
                  >
                    <motion.h1 
                      className="text-8xl/text-9xl/text-[10rem] font-bold leading-none tracking-wide text-white mb-16"
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.2,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block mr-6"
                      >
                        Transform
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.6,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block mr-6"
                      >
                        Your
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 1.0,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block mr-6"
                      >
                        Business
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 1.4,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block mr-6"
                      >
                        With
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 1.8,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block text-cyan-400"
                      >
                        AI
                      </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                      className="text-gray-300 text-3xl md:text-4xl mt-6 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 2.6,
                        type: "spring"
                      }}
                    >
                      Empower your small business with intelligent automation and data-driven insights
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap justify-center gap-6 mt-12"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 2.8,
                        type: "spring"
                      }}
                    >
                      <motion.a
                        href="https://tidycal.com/jmason16/30-minute-meeting"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="action-button text-xl px-10 py-4 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] rounded-lg font-medium shadow-lg shadow-[#2563eb]/20 text-white"
                        target="_blank" rel="noopener noreferrer"
                      >
                        Let's Talk
                      </motion.a>
                      <motion.a
                        href="#services"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.98 }}
                        className="action-button text-xl px-10 py-4 bg-white/10 border border-white/20 rounded-lg font-medium backdrop-blur-sm"
                      >
                        Explore Services
                      </motion.a>
                    </motion.div>
                  </motion.div>
                  
                  {/* Stats Section */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 w-full max-w-5xl relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 3.0,
                      type: "spring"
                    }}
                  >
                    {[
                      { number: "40%", label: "Average Efficiency Increase" },
                      { number: "1000+", label: "Minutes Saved" },
                      { number: "24/7", label: "AI-Powered Support" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 3.2 + index * 0.2, 
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="text-center"
                      >
                        <motion.h3 
                          className="text-5xl md:text-6xl font-bold text-cyan-400"
                          whileHover={{ 
                            scale: 1.1, 
                            textShadow: "0 0 8px rgba(6, 182, 212, 0.8)"
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {stat.number}
                        </motion.h3>
                        <p className="text-gray-300 text-xl mt-3">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </main>

                <SocialProof />

                {/* About Section */}
                <section id="about" className="w-full px-6 py-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                  >
                    <div className="text-center mb-16">
                      <h2 className="text-white text-4xl font-semibold mb-6">About Us</h2>
                      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        FaithlineAI specializes in providing AI-powered solutions designed to help small businesses grow into 
                        medium-sized enterprises. We emphasize faith-based values of patience, ease, and purpose to nurture 
                        a supportive and trustworthy service.
                      </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      {[
                        {
                          title: "Our Mission",
                          icon: (
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                          desc: "To empower small businesses with accessible AI solutions that drive growth and innovation"
                        },
                        {
                          title: "Our Values",
                          icon: (
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          ),
                          desc: "Faith, Innovation, Trust, and Commitment to excellence in everything we do"
                        },
                        {
                          title: "Our Vision",
                          icon: (
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          ),
                          desc: "To be the leading AI partner for small businesses, fostering growth through innovation"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ 
                            scale: 1.02,
                            translateZ: 20,
                          }}
                          transition={{ delay: index * 0.2 }}
                          className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-cyan-500/20"
                        >
                          <div className="text-cyan-400 mb-4">{item.icon}</div>
                          <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                          <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Team Section */}
                    <div className="mb-16 text-center">
                      <h3 className="text-2xl font-semibold text-white mb-8">
                        Our Team
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mx-auto text-center"
                        >
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/20">
                            <img
                              src="/assets/team/Joshua.jpg"
                              alt="Joshua Mason"
                              className="w-full h-full object-cover"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <h4 className="text-white font-semibold mb-1">
                            Joshua Mason
                          </h4>
                          <p className="text-cyan-400 text-sm mb-2">
                            CEO & Founder
                          </p>
                          <p className="text-gray-400 text-sm">
                            Experience in AI research and development, with a passion 
                            for helping businesses succeed
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="mx-auto text-center"
                        >
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/20">
                            <img
                              src="/assets/team/Aaron.jpg"
                              alt="Aaron Satko"
                              className="w-full h-full object-cover"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <h4 className="text-white font-semibold mb-1">
                            Aaron Satko
                          </h4>
                          <p className="text-cyan-400 text-sm mb-2">
                            AI Consultant
                          </p>
                          <p className="text-gray-400 text-sm">
                            Expertise in computer science research, AI development, 
                            and computer repair
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h3 className="text-2xl font-semibold text-white text-center mb-8">Our Journey</h3>
                      <div className="space-y-4">
                        {[
                          { year: "2023", title: "Founded", desc: "Started with a vision to bring big ideas to small communities" },
                          { year: "2024", title: "University Innovation Award", desc: "Recognized for breakthrough solutions developing tools to help college community" },
                          { year: "2025", title: "Teaching and Learning", desc: "Founded organization with over 100 individuals passionate about learning innovative technologies" }
                        ].map((milestone, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className=" gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                          >
                            <div className="text-cyan-400 font-bold text-xl">{milestone.year}</div>
                            <div>
                              <h4 className="text-white font-semibold">{milestone.title}</h4>
                              <p className="text-gray-400 text-sm">{milestone.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Services Section with Motion Cards */}
                <section id="services" className="w-full px-6 py-20 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                  >
                    <h2 className="text-white text-4xl font-semibold mb-6">Our Services</h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                      Transformative AI solutions tailored to help your business grow and succeed
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { 
                          title: "Workflow Automation",
                          icon: (
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                              />
                            </svg>
                          ),
                          desc: "Streamline your operations with AI-powered automation that reduces manual tasks by up to 80%",
                          benefits: ["Reduced operational costs", "Fewer human errors", "Faster processing times"],
                          image: "/assets/services/workflow.jpg"
                        },
                        { 
                          title: "AI Agents & Chatbots",
                          icon: (
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                              />
                            </svg>
                          ),
                          desc: "Streamline operations and enhance engagement with tailored AI chatbots for customer support, appointments, or internal workflows",
                          benefits: ["24/7 customer support", "Reduced response times", "Scalable interactions"],
                          image: "/assets/services/chatbots.jpg"
                        },
                        { 
                          title: "AI Workshops",
                          icon: (
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                              />
                            </svg>
                          ),
                          desc: "Empower your team or community with essential digital skills through engaging workshops on AI basics, digital literacy, and ethical tech use",
                          benefits: ["Hands-on learning", "Customized curriculum", "Ethical AI focus"],
                          image: "/assets/services/workshops.jpg"
                        },

                      ].map((service, index) => (
                        <motion.div 
                          key={index}
                          className="relative overflow-hidden rounded-xl group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20"
                          whileHover={{ 
                            scale: 1.02,
                            translateZ: 20,
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <div className="p-8">
                            <div className="text-cyan-400 mb-6">
                              {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">
                              {service.title}
                            </h3>
                            <p className="text-gray-300 mb-6">
                              {service.desc}
                            </p>
                            <ul className="space-y-3 mb-8">
                              {service.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center text-gray-400">
                                  <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                            <motion.button
                              className="text-cyan-400 flex items-center mx-auto"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link to={index === 0 ? "/services/workflow-automation" : index === 1 ? "/services/ai-agents-chatbots" : "/services/ai-workshops"} className="flex items-center">
                                Learn More 
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </motion.button>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <CaseStudiesSection />

                <Testimonials />

                <Resources />

                {/* Footer */}
                <Footer />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/who-we-help" element={<WhoWeHelp />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/beginners-guide-to-ai" element={<BeginnersGuideToAI />} />
            {/* Individual service routes */}
            <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
            <Route path="/services/ai-agents-chatbots" element={<AIAgentsChatbots />} />
            <Route path="/services/ai-consulting" element={<AIConsulting />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/ai-workshops" element={<AIWorkshops />} />
            <Route path="/services/social-media-automation" element={<SocialMediaAutomation />} />
            <Route path="/services/mentorship" element={<Mentorship />} />
            <Route path="/services/ethical-ai-consulting" element={<EthicalAIConsulting />} />
            <Route path="/workshops/chatbot-workshop" element={<ChatbotWorkshop />} />
            {/* Mock sites */}
            <Route path="/mock/ad-astra-ai" element={<AdAstraAI />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
