import { motion } from 'framer-motion';

export const SocialProof = () => {
  const clients = [
    { name: 'Waste to Taste', logo: '/assets/clients/waste-to-taste.png', description: 'An app that uses a custom made Elon University events API to find events with food and alert students of them.' },
    { name: 'SWYVL', logo: '/assets/clients/swyvl.png' },
    { name: 'Elon AI Center', logo: '/assets/clients/ElonAICenter.png' },
  ];

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 text-center mb-8">Trusted by innovative businesses</p>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-48 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};