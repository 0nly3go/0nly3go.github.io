import { motion } from 'framer-motion';

const team = [
  { name: 'Joshua Mason', role: 'CEO & Founder', desc: 'AI researcher and entrepreneur passionate about digital equity.' },
  { name: 'Aaron Satko', role: 'AI Consultant', desc: 'Expert in computer science, AI, and community engagement.' },
];
const partners = [
  { name: 'Elon University', desc: 'Innovation Challenge Partner' },
  { name: 'Techstars', desc: 'Startup Accelerator' },
];

export default function About() {
  return (
    <section className="w-full px-6 py-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          About FaithlineAI
        </motion.h1>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Mission & Vision</h2>
          <p className="text-gray-300">Empowering small businesses, schools, and nonprofits by bridging the digital divide with advanced, ethical AI solutions. We believe in making technology accessible, responsible, and impactful for all.</p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-6 shadow-lg">
                <div className="font-semibold text-white text-lg mb-1">{member.name}</div>
                <div className="text-cyan-400 mb-2">{member.role}</div>
                <div className="text-gray-300">{member.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Partnerships</h2>
          <ul className="space-y-3">
            {partners.map((p) => (
              <li key={p.name} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg p-4 border border-cyan-500/20 text-gray-300">
                <div className="font-semibold text-white">{p.name}</div>
                <div>{p.desc}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Community Impact</h2>
          <p className="text-gray-300">We are committed to digital equity, offering mentorship, workshops, and tech-for-good projects that empower underserved communities and the next generation of innovators.</p>
        </div>
      </div>
    </section>
  );
} 