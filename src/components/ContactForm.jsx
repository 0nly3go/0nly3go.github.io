import { motion } from 'framer-motion';
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto"
    >
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors h-32 resize-none"
            required
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium shadow-lg shadow-cyan-500/20 text-white"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
};