import { motion } from 'framer-motion';

const blog = [
  { title: 'AI Trends for Small Business', desc: 'What to expect in 2024 and beyond.' },
  { title: 'Ethical AI in Education', desc: 'Best practices for responsible AI.' },
];
const guides = [
  { title: 'AI Readiness Checklist', desc: 'Is your business ready for AI? Download our free checklist.' },
  { title: 'Guide to Ethical AI', desc: 'A practical guide for schools and nonprofits.' },
];
const webinars = [
  { title: 'Getting Started with Workflow Automation', desc: 'Watch our recorded session.' },
  { title: 'Building Chatbots 101', desc: 'A hands-on webinar for beginners.' },
];
const newsletters = [
  { title: 'April 2024', desc: 'AI news and tips for your organization.' },
  { title: 'March 2024', desc: 'Spotlight on digital literacy.' },
];

export default function Resources() {
  return (
    <section className="w-full px-6 py-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Resources
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Blog</h2>
            <ul className="space-y-3 mb-8">
              {blog.map((item) => (
                <li key={item.title} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg p-4 border border-cyan-500/20 text-gray-300">
                  <div className="font-semibold text-white">{item.title}</div>
                  <div>{item.desc}</div>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Guides & Whitepapers</h2>
            <ul className="space-y-3 mb-8">
              {guides.map((item) => (
                <li key={item.title} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg p-4 border border-cyan-500/20 text-gray-300">
                  <div className="font-semibold text-white">{item.title}</div>
                  <div>{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Webinars & Videos</h2>
            <ul className="space-y-3 mb-8">
              {webinars.map((item) => (
                <li key={item.title} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg p-4 border border-cyan-500/20 text-gray-300">
                  <div className="font-semibold text-white">{item.title}</div>
                  <div>{item.desc}</div>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Newsletter Archive</h2>
            <ul className="space-y-3 mb-8">
              {newsletters.map((item) => (
                <li key={item.title} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg p-4 border border-cyan-500/20 text-gray-300">
                  <div className="font-semibold text-white">{item.title}</div>
                  <div>{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 