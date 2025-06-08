import { motion } from 'framer-motion';

export const SocialProof = () => {
  const clients = [
    { name: 'Waste to Taste', logo: '/assets/clients/WasteToTaste.png', description: 'An app that uses a custom made Elon University events API to find events with food and alert students of them.' },
    { name: 'SWYVL', logo: '/assets/clients/swyvl.png' },
    { name: 'Elon AI Center', logo: '/assets/clients/ElonAICenter.png' },
  ];

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 text-center mb-8">Trusted by innovative businesses</p>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {clients.map((client, index) => {
            let link = null;
            if (client.name === 'Waste to Taste') link = 'https://apps.apple.com/us/app/w2t/id6744896370';
            if (client.name === 'SWYVL') link = null;
            if (client.name === 'Elon AI Center') link = 'https://elonopenapps.azurewebsites.net/AItoolbox/toolbox.html';
            if (client.name === 'Hammer Media') link = 'https://hammermedias.com/';
            const logoImg = (
              <img 
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            );
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.08, filter: 'grayscale(0%)' }}
                className="w-48 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={client.name} className="block w-full h-full">
                    {logoImg}
                  </a>
                ) : logoImg}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};