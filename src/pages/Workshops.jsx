import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const upcoming = [
  { 
    title: 'AI Chatbot Creation Workshop', 
    date: 'July 10, 2025 at 10:30 AM', 
    desc: 'Hands-on workshop with Jubilee Housing youth to create and interact with AI chatbots. Learn prompt engineering basics while building functional chatbots.',
    partner: 'Jubilee Housing',
    location: 'Washington, D.C.',
    link: '/workshops/chatbot-workshop'
  },
  { title: 'AI for Small Business Basics', date: 'July 15, 2024', desc: 'Intro to AI tools and automation for business owners.' },
  { title: 'Digital Literacy for Educators', date: 'August 2, 2024', desc: 'Empowering teachers with AI and digital skills.' },
];
const past = [
  { title: 'Youth AI Bootcamp', desc: 'Hands-on AI projects for students.' },
  { title: 'Nonprofit Tech for Good', desc: 'How nonprofits can leverage AI for impact.' },
];

export default function Workshops() {
  return (
    <section className="w-full px-6 py-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Workshops
        </motion.h1>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {upcoming.map((w, i) => (
            <motion.div
              key={w.title}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-6 shadow-lg hover:border-cyan-400 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{w.title}</h3>
              <div className="text-cyan-400 mb-2">{w.date}</div>
              {w.partner && (
                <div className="text-yellow-400 mb-2 font-medium">Partner: {w.partner}</div>
              )}
              {w.location && (
                <div className="text-gray-400 mb-2 text-sm">{w.location}</div>
              )}
              <p className="text-gray-300 mb-4">{w.desc}</p>
              {w.link ? (
                <Link to={w.link} className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors font-medium">
                  Join Workshop
                </Link>
              ) : (
                <a href="#register" className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors font-medium">Register</a>
              )}
            </motion.div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Past Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {past.map((w, i) => (
            <motion.div
              key={w.title}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-6 shadow-lg flex flex-col hover:border-cyan-400 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{w.title}</h3>
              <p className="text-gray-300">{w.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href="#request" className="inline-block px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] rounded-lg font-medium shadow-lg shadow-[#2563eb]/20 text-white text-xl mb-4">Request a Custom Workshop</a>
        </div>
      </div>
    </section>
  );
} 