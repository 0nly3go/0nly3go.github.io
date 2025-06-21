import { motion } from 'framer-motion';

const audiences = [
  { title: 'Small Businesses', icon: '🏢', desc: 'AI solutions to boost efficiency, automate tasks, and drive growth.' },
  { title: 'Schools & Educators', icon: '🎓', desc: 'Workshops, digital literacy, and responsible AI for education.' },
  { title: 'Nonprofits', icon: '🤝', desc: 'Tech for good: grant support, impact analytics, and community AI.' },
  { title: 'Solopreneurs', icon: '💡', desc: 'Affordable automation and AI tools for solo founders and creators.' },
];

export default function WhoWeHelp() {
  return (
    <section className="w-full px-6 py-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Who We Help
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((aud, i) => (
            <motion.div
              key={aud.title}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-8 shadow-lg flex flex-col items-center text-center hover:border-cyan-400 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl mb-4">{aud.icon}</div>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-3">{aud.title}</h2>
              <p className="text-gray-300">{aud.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 