import { motion } from 'framer-motion';

export const CaseStudies = () => {
  const cases = [
    {
      client: "Waste to Taste",
      industry: "Campus Events & Food Recovery",
      before: "Students miss out on free food at campus events, leading to food waste.",
      after: "Custom Elon University events API alerts students to events with food, reducing waste and increasing student engagement.",
      roi: "Hundreds of meals saved, happier students",
      image: "/assets/cases/WasteToTaste.png"
    },
    {
      client: "Hammer Media",
      industry: "Digital Marketing",
      before: "Manual customer insights",
      after: "AI-powered analytics",
      roi: "2x customer engagement",
      image: "/assets/cases/HammerMediaLogo.jpg"
    },
    {
      client: "SWYVL",
      industry: "Financial Services",
      before: "Manual data entry, 5hrs/day",
      after: "Automated AI insights",
      roi: "20% increase in Financial Literacy",
      image: "/assets/cases/swyvl.png"
    }
  ];

  return (
    <section className="w-full px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-semibold text-white text-center mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
            >
              <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{study.client}</h3>
              <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-gray-400 text-sm">Before</p>
                  <p className="text-white">{study.before}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-gray-400 text-sm">After</p>
                  <p className="text-white">{study.after}</p>
                </div>
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <p className="text-cyan-400 font-semibold">{study.roi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Recognition & Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"> {/* Updated grid columns and added max-width + margin */}
            {[
              { name: "Elon Innovation Challenge", image: "/assets/awards/innovationChallenge.png" },
              { name: "Techstars Runner Up", image: "/assets/awards/techstars.png" },
              { name: "NC Idea", image: "/assets/awards/NCIDEA.png" }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <img 
                  src={award.image} 
                  alt={award.name}
                  className="h-16 w-auto mx-auto mb-3 opacity-80"
                />
                <p className="text-sm text-gray-400">{award.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};