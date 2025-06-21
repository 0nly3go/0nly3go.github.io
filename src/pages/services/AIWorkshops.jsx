import { motion } from 'framer-motion';

export default function AIWorkshops() {
  const features = [
    "Hands-on AI learning experiences",
    "Customized curriculum for your organization",
    "Ethical AI principles and practices",
    "Digital literacy fundamentals",
    "Interactive demonstrations",
    "Take-home resources and guides",
    "Follow-up support and Q&A",
    "Certificate of completion"
  ];

  const pricingTiers = [
    {
      name: "Introductory Workshop",
      price: "$300",
      description: "Perfect for organizations new to AI",
      features: [
        "2-hour workshop session",
        "AI basics and fundamentals",
        "Interactive demonstrations",
        "Basic resource materials",
        "Up to 20 participants",
        "1 week of follow-up support"
      ]
    },
    {
      name: "Comprehensive Training",
      price: "$800",
      description: "In-depth AI education for teams",
      features: [
        "Full-day workshop (6 hours)",
        "Advanced AI concepts",
        "Hands-on exercises",
        "Custom curriculum design",
        "Up to 30 participants",
        "Comprehensive materials",
        "1 month of follow-up support",
        "Certificate of completion"
      ]
    },
    {
      name: "Enterprise Program",
      price: "$2,000",
      description: "Complete AI education program",
      features: [
        "Multi-day workshop series",
        "Custom AI strategy development",
        "Ethical AI implementation",
        "Unlimited participants",
        "Custom materials and resources",
        "3 months of follow-up support",
        "Ongoing consultation",
        "Implementation guidance"
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Image Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="/assets/services/ai-workshops.jpg"
          alt="AI Workshops"
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
              AI Workshops
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empower your team with essential digital skills and AI knowledge
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
              Our workshops are designed to bridge the digital divide by making AI accessible and understandable for everyone. 
              We focus on practical applications, ethical considerations, and hands-on learning to ensure participants leave with 
              both knowledge and confidence to use AI responsibly.
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