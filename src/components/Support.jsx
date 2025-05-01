import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export const Support = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    requestType: '',
    subject: '',
    details: '',
    urgency: '',
    followUp: 'Yes'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_kfz5jiq',
        'template_df3bqe2',
        formData,
        '1oj1R4sGk6ZzGZWqc'
      );
      toast.success('Support request submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        requestType: '',
        subject: '',
        details: '',
        urgency: '',
        followUp: 'Yes'
      });
    } catch (error) {
      toast.error('Failed to submit support request. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="w-full px-6 py-20 min-h-screen bg-gradient-to-b from-gray-900/80 via-black/80 to-gray-900/90 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-cyan-900/10 via-black/30 to-cyan-800/10 blur-2xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto relative z-10"
      >
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10 p-10">
          <h2 className="text-4xl font-semibold text-white text-center mb-4 drop-shadow-lg">Waste to Taste Support</h2>
          <p className="text-gray-300 text-center mb-10">We're here to help! Please fill out the form below and we'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/70 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500/40 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/70 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500/40 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Request Type
                </label>
                <div className="space-y-2">
                  {[
                    "I'm reporting an issue",
                    "I have a question about how W2T works",
                    "I want to suggest a new feature",
                    "Other"
                  ].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="requestType"
                        value={type}
                        checked={formData.requestType === type}
                        onChange={handleChange}
                        required
                        className="text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/70 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500/40 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-1">
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/70 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500/40 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Urgency
                </label>
                <div className="space-y-2">
                  {[
                    "Low (just feedback)",
                    "Medium (would like help soon)",
                    "High (app is not working for me)"
                  ].map((level) => (
                    <label key={level} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={handleChange}
                        required
                        className="text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-gray-300">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Follow Up
                </label>
                <div className="space-y-2">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="followUp"
                        value={option}
                        checked={formData.followUp === option}
                        onChange={handleChange}
                        required
                        className="text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 0 16px 0 rgba(6,182,212,0.25)" }}
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all shadow-lg shadow-cyan-500/20"
            >
              Submit Support Request
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};