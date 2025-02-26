import { useState } from 'react'
// Remove these lines if you're not using them
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { motion } from 'framer-motion'
import { ParticleBackground } from './components/ParticleBackground'
import { Testimonials } from './components/Testimonials'
import { SocialProof } from './components/SocialProof'
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { HeroVideo } from './components/HeroVideo';
import { CaseStudies } from './components/CaseStudies';
import { Resources } from './components/Resources';

function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        <ParticleBackground />
      </div>
      <div className="relative z-10 w-full">
        {/* Navbar */}
        <nav className="w-full flex justify-between items-center px-12 py-6">
          <div>
            <img src="/assets/LogoMark_White.png" alt="FaithLineAI Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex items-center space-x-6 text-lg font-medium">
            <a href="#about" className="text-[#06b6d4] hover:text-[#22d3ea] transition-colors">About Us</a>
            <a href="#services" className="text-[#06b6d4] hover:text-[#22d3ea] transition-colors">Services</a>
            <a href="https://tidycal.com/jmason16/30-minute-meeting" className="text-[#06b6d4] hover:text-[#22d3ea] transition-colors">Testimonials</a>
            <a href="#contact" className="text-[#06b6d4] hover:text-[#22d3ea] transition-colors">Contact Us</a>
            <motion.a 
              href="#contact" 
              className="relative group overflow-hidden rounded-lg"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/10 to-[#0ea5e9]/10 backdrop-blur-sm" />
              <div className="px-6 py-2 bg-white/5 border border-white/10 relative z-10 text-[#06b6d4]">
                Let's Talk
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/20 to-[#0ea5e9]/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </nav>

        {/* Hero Section with Motion */}
        <main className="w-full flex flex-col items-center justify-center text-center px-6 min-h-screen relative">
          <HeroVideo />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <motion.h1 
              className="text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Transform Your Business with AI
            </motion.h1>
            <p className="text-gray-300 text-xl mt-6 max-w-2xl mx-auto">
              Empower your small business with intelligent automation and data-driven insights
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a
                href="https://tidycal.com/jmason16/30-minute-meeting"
                whileHover={{ scale: 1.05 }}
                className="action-button px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium shadow-lg shadow-cyan-500/20"
              >
                Get Started Free
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                className="action-button px-8 py-3 bg-white/10 border border-white/20 rounded-lg font-medium backdrop-blur-sm"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl relative z-10">
            {[
              { number: "40%", label: "Average Efficiency Increase" },
              { number: "1000+", label: "Minutes Saved" },
              { number: "24/7", label: "AI-Powered Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-cyan-400">{stat.number}</h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
                FaithLineAI specializes in providing AI-powered solutions designed to help small businesses grow into 
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
    Our Leadership Team
  </h3>

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
                  title: "Customer Relations",
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2v4zm-8 12h8" 
                      />
                    </svg>
                  ),
                  desc: "Enhance customer satisfaction with personalized AI interactions and 24/7 support capabilities",
                  benefits: ["Improved response times", "Personalized experiences", "Scalable support"],
                  image: "/assets/services/customer.jpg"
                },
                { 
                  title: "Predictive Analytics",
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                      />
                    </svg>
                  ),
                  desc: "Make data-driven decisions with AI insights that predict trends and identify opportunities",
                  benefits: ["Accurate forecasting", "Risk mitigation", "Growth opportunities"],
                  image: "/assets/services/analytics.jpg"
                }
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
                      Learn More 
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <CaseStudies />

        <Testimonials />

        <Resources />

        {/* Contact Section */}
        <section id="contact" className="w-full px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-white text-4xl font-semibold mb-6">Contact Us</h2>
              <p className="text-gray-400 text-lg mb-6">
                Ready to experience the transformational impact of AI on your business?<br />
                Schedule a free consultation today!
              </p>
            </motion.div>
            
            <ContactForm />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="text-cyan-400 mb-4">
                  <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-400 mt-2">contact@faithlineai.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="text-cyan-400 mb-4">
                  <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Response Time</h3>
                <p className="text-gray-400 mt-2">Within 24 hours</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="text-cyan-400 mb-4">
                  <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                <p className="text-gray-400 mt-2">24/7 AI Support</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
