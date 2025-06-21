import { motion } from 'framer-motion';

const caseStudies = [
  { title: 'Campus Food Redistribution App', desc: 'How we helped a university reduce food waste and feed students using AI-powered notifications.', image: '/assets/cases/WasteToTaste.png' },
  { title: 'Workflow Automation for Small Business', desc: 'Automated repetitive tasks, saving 1000+ minutes per month for a local business.', image: '/assets/cases/HammerMediaLogo.jpg' },
  { title: 'AI Workshops for Youth', desc: 'Empowered students with digital literacy and hands-on AI projects.', image: '/assets/awards/innovationChallenge.png' },
];

export default function CaseStudies() {
  return (
    <section className="w-full px-6 py-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Success Stories
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-6 shadow-lg hover:border-cyan-400 transition-colors flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800 flex items-center justify-center">
                <img src={cs.image} alt={cs.title} className="object-contain h-full w-full" />
              </div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2 text-center">{cs.title}</h2>
              <p className="text-gray-300 text-center">{cs.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] rounded-lg font-medium shadow-lg shadow-[#2563eb]/20 text-white text-xl">
            Contact Us for a Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
} 