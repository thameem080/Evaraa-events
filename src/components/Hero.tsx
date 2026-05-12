"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const backgroundSlides = [
  { image: "/images/download (1).jpg", color: "text-white" },
  { image: "/images/download (6).jpg", color: "text-gold" },
  { image: "/images/download (5).jpg", color: "text-white" },
  { image: "/images/Led screen & Side panel decor.jpg", color: "text-gold" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundSlides[currentSlide].image}')` }}
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="/images/logo1.png" alt="Evaraa Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-8 rounded-full border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.4)] bg-white/5" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest text-glow mb-4 uppercase transition-colors duration-1000 ${backgroundSlides[currentSlide].color}`}
        >
          Evaraa Events
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-xl sm:text-2xl md:text-4xl text-ivory tracking-wide mb-6 italic"
        >
          Every Moment, Made Royal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-sm md:text-lg text-champagne/80 tracking-widest uppercase max-w-2xl"
        >
          Luxury Weddings • Birthday Events • Corporate Events • Stage Design
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 sm:py-3 bg-gold text-black font-semibold tracking-wide hover:bg-ivory transition-colors duration-300 rounded-full sm:rounded-none"
          >
            Explore Services
          </a>
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 sm:py-3 border border-gold text-gold font-semibold tracking-wide hover:bg-gold/10 transition-colors duration-300 box-glow rounded-full sm:rounded-none"
          >
            Book Your Event
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-gold uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-gold" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
