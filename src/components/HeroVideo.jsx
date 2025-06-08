import { motion } from 'framer-motion';

export const HeroVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900/70 z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/assets/videos/FaithlineBackground25.mp4" type="video/mp4" />
      </video>
    </div>
  );
};