import { motion } from 'framer-motion';

export const HeroVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900 z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};