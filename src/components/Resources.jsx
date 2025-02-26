import { motion } from 'framer-motion';

export const Resources = () => {
  const videos = [
    {
      title: "Getting Started with AI Automation",
      thumbnail: "/assets/videos/thumbnails/ai-automation.jpg",
      youtubeId: "xsUBvZbuXvU",
      duration: "15:24"
    },
    {
      title: "AI for Small Business Growth",
      thumbnail: "/assets/videos/thumbnails/business-growth.jpg",
      youtubeId: "VIDEO_ID_2",
      duration: "12:45"
    },
    {
      title: "Understanding Predictive Analytics",
      thumbnail: "/assets/videos/thumbnails/analytics.jpg",
      youtubeId: "VIDEO_ID_3",
      duration: "18:30"
    }
  ];

  const guides = [
    {
      title: "Understanding AI: From Basics to Buzzwords",
      description: "A beginer's guide to understanding the complexities in the world of AI",
      icon: "📋",
      downloadUrl: "/assets/guides/Understanding AI_ From Basics to Buzzwords.pdf"
    },
    {
      title: "ROI Calculator Template",
      description: "Calculate the potential return on AI investment",
      icon: "📊",
      downloadUrl: "/assets/guides/roi-calculator.pdf"
    }
  ];

  return (
    <section id="resources" className="w-full px-6 py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">Free Resources</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our educational content and downloadable resources to help you get started with AI
          </p>
        </motion.div>

        {/* Video Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Featured Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  translateZ: 20,
                }}
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

        {/* Downloadable Resources */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Free Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
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
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{guide.title}</h4>
                <p className="text-gray-400 mb-4">{guide.description}</p>
                <motion.a
                  href={guide.downloadUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};