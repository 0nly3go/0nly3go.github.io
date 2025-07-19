import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Beginner's Guide to AI",
    slug: "beginners-guide-to-ai",
    excerpt: "A comprehensive introduction to artificial intelligence, machine learning, neural nets, and how to spot real value in AI trends.",
    date: "2024-05-01"
  }
];

export default function Blog() {
  return (
    <section className="w-full px-6 py-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Blog
        </motion.h1>
        <div className="space-y-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg border border-cyan-500/20 shadow hover:shadow-lg transition-shadow"
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-semibold text-cyan-400 group-hover:underline mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-2">{post.excerpt}</p>
                <div className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 