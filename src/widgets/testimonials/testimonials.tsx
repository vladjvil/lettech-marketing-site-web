import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';

export const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechVision Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
      content: "LetTech has been instrumental in our digital transformation. Their developers seamlessly integrated with our team and delivered exceptional results.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateSoft",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      content: "The level of expertise and professionalism at LetTech is unmatched. They helped us launch our product ahead of schedule with superior quality.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "CEO",
      company: "Digital Pioneers",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
      content: "Working with LetTech has been a game-changer for our business. Their strategic consulting and development expertise have helped us scale rapidly.",
      rating: 5
    },
    {
      name: "David Kim",
      position: "Engineering Director",
      company: "FutureTech Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
      content: "The team at LetTech consistently delivers high-quality solutions. Their attention to detail and technical expertise is remarkable.",
      rating: 5
    },
    {
      name: "",
      position: "Engineering Director",
      company: "FutureTech Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
      content: "The team at LetTech consistently delivers high-quality solutions. Their attention to detail and technical expertise is remarkable.",
    }
  ];

  export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    }
  };

export function Testimonials() {
  const { theme } = useTheme();

  return (
    <motion.section variants={itemVariants} className="py-20">
      <div className="text-center mb-16">
        <span className="inline-block text-sm font-semibold text-blue-500 mb-4 tracking-wider uppercase">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          What Our Clients Say
        </h2>
        <p className={cn(
          "text-lg max-w-2xl mx-auto",
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        )}>
          Discover why leading companies choose LetTech for their development needs
        </p>
      </div>

      <div className="py-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="!overflow-visible [&_.swiper-slide]:!w-[400px] sm:[&_.swiper-slide]:!w-[500px] [&_.swiper-slide]:opacity-50 [&_.swiper-slide]:scale-90 [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide-active]:scale-100 [&_.swiper-pagination-bullet]:bg-blue-500 dark:[&_.swiper-pagination-bullet]:bg-blue-400 [&_.swiper-button-next]:text-blue-500 [&_.swiper-button-prev]:text-blue-500 [&_.swiper-button-next]:scale-75 [&_.swiper-button-prev]:scale-75"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className={cn(
                  "p-8 rounded-2xl relative mx-4",
                  theme === 'dark'
                    ? 'bg-gray-800/80 border border-gray-700'
                    : 'bg-white border border-gray-200 shadow-lg'
                )}
              >
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-500/20" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h3 className={cn(
                      "font-semibold text-lg",
                      theme === "dark" ? "text-white" : "text-gray-900"
                    )}>
                      {testimonial.name}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    )}>
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-blue-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className={cn(
                  "text-lg leading-relaxed",
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                )}>
                  "{testimonial.content}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}