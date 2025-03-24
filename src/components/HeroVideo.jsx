import { motion } from 'framer-motion';

export const HeroVideo = () => {
  // Get base URL from import.meta.env or default to '/'
  const baseUrl = import.meta.env.BASE_URL || '/';
  
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
        <source src={`${baseUrl}assets/videos/FaithlineBackgroundCompressed.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};