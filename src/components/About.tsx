"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center py-8"
          >
            <div className="relative w-64 sm:w-[350px] md:w-[450px] aspect-square">
              {/* Logo container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-gold/80 shadow-[0_0_40px_rgba(212,175,55,0.3)] animate-[pulse_4s_ease-in-out_infinite] bg-black">
                <img
                  src="/images/logo1.png"
                  alt="About Evaraa"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-gold tracking-widest uppercase text-sm font-semibold">Our Story</h4>
            <h2 className="font-heading text-4xl md:text-5xl text-ivory leading-tight">
              Crafting Unforgettable Experiences with Royal Elegance
            </h2>
            <p className="text-champagne/80 font-light leading-relaxed">
              At EVARAA EVENTS, we don't just plan events; we create cinematic memories. Born from a passion for perfection and a flair for the extraordinary, our team specializes in transforming ordinary spaces into magical realms.
            </p>
            <p className="text-champagne/80 font-light leading-relaxed mb-4">
              Whether it's a grand royal wedding, a sophisticated corporate gala, or an intimate celebration, we infuse every detail with luxury, precision, and emotion.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-4 border-t border-gold/20 pt-8">
              <div>
                <h3 className="text-4xl font-heading text-gold mb-2">250+</h3>
                <p className="text-sm text-ivory tracking-wider uppercase">Events Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-heading text-gold mb-2">5+</h3>
                <p className="text-sm text-ivory tracking-wider uppercase">Years Experience</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
