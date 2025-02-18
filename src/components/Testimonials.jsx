import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Shriya Baru",
      role: "CEO, Shriyas",
      feedback: "FaithLineAI transformed our online presence, increasing sales by 40%.",
      image: "/assets/testimonials/shriya.jpg"
    },
    {
      name: "Michael Gemintri",
      role: "Marketing Director, Geminitri Agency",
      feedback: "The AI-powered customer insights helped us better understand our market.",
      image: "/assets/testimonials/michael.jpg"
    },
    {
      name: "Aaron Satko",
      role: "Operations Manager, AGS Store",
      feedback: "Implementing FaithLineAI's solutions streamlined our entire business process.",
      image: "/assets/testimonials/aaron.jpg"
    }
  ];

  return (
    <section id="testimonials" className="w-full px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-white text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-cyan-500/40">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-4">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-300 text-sm italic">
                    "{testimonial.feedback}"
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};