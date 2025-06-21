import { motion } from 'framer-motion';

export default function Mentorship() {
  const features = [
    "Tech mentoring for students",
    "Coding and AI education",
    "Entrepreneurship guidance",
    "Youth digital access projects",
    "Hands-on project development",
    "Career pathway guidance",
    "Community engagement programs",
    "Volunteer project consulting"
  ];

  const pricingTiers = [
    {
      name: "Individual Mentorship",
      price: "$200",
      description: "One-on-one mentoring for students",
      features: [
        "Monthly 1-hour sessions",
        "Coding and AI basics",
        "Project guidance",
        "Career advice",
        "3 months of support",
        "Resource materials"
      ]
    },
    {
      name: "Group Programs",
      price: "$500",
      description: "Small group mentoring and workshops",
      features: [
        "Weekly group sessions",
        "Hands-on projects",
        "Team collaboration",
        "Portfolio development",
        "6 months of support",
        "Community events",
        "Certificate of completion"
      ]
    },
    {
      name: "Community Programs",
      price: "$1,200",
      description: "Large-scale youth engagement initiatives",
      features: [
        "Custom program design",
        "Multiple sessions per week",
        "Advanced project development",
        "Community partnerships",
        "12 months of support",
        "Impact reporting",
        "Volunteer coordination",
        "Grant proposal assistance"
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Image Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="/assets/services/mentorship.jpg"
          alt="Mentorship & Youth Engagement"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 z-10" style={{display: 'none'}}></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mentorship & Youth Engagement
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Invest in the next generation of innovators and leaders
            </motion.p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-8 mb-16"
          >
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">What We Offer</h2>
            <p className="text-gray-300 mb-6">
              We're passionate about bridging the digital divide and empowering the next generation of innovators. 
              Our mentorship programs focus on coding, AI, entrepreneurship, and hands-on project development, 
              helping students build the skills and confidence they need to succeed in the digital economy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-400 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{tier.price}</div>
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <svg className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://tidycal.com/jmason16/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <a
              href="https://tidycal.com/jmason16/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] rounded-lg font-medium shadow-lg shadow-[#2563eb]/20 text-white text-xl"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 