import { motion } from 'framer-motion';

// Homepage resources (from src/components/Resources.jsx)
const videos = [
  {
    title: "Securing Finance with Blockchain and Artificial Intelligence",
    thumbnail: "/assets/videos/thumbnails/blockchain-ai.jpg",
    youtubeId: "_WAt2nDwu8I",
    duration: "3:00"
  }
];

const homepageGuides = [
  {
    title: "Understanding AI: From Basics to Buzzwords",
    description: "A beginer's guide to understanding the complexities in the world of AI",
    icon: "📋",
    downloadUrl: "/assets/guides/Understanding AI_ From Basics to Buzzwords.pdf"
  },
  {
    title: "Tech Consultant Pro",
    description: "Calculate costs and get recommendations for your tech infrastructure using our custom GPT",
    icon: "🤖",
    downloadUrl: "https://chatgpt.com/g/g-vxMMLnhVc-tech-consultant-pro"
  }
];

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

        {/* --- Featured Videos (from homepage) --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Featured Videos</h3>
          <div className="grid grid-cols-1 max-w-xl mx-auto gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, translateZ: 20 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-cyan-500/20 overflow-hidden"
              >
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.a>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-white font-medium mt-3">{video.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Free Guides (from homepage) --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Free Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homepageGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, translateZ: 20 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-cyan-500/20"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{guide.title}</h4>
                <p className="text-gray-400 mb-4">{guide.description}</p>
                <motion.a
                  href={guide.downloadUrl}
                  download={guide.downloadUrl.endsWith('.pdf')}
                  className="inline-flex items-center px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  target={guide.downloadUrl.startsWith('http') ? '_blank' : undefined}
                  rel={guide.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Access for Free
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Existing resources content below --- */}
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