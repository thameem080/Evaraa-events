"use client";

import { motion } from "framer-motion";

const timelineSteps = [
  { id: 1, title: "Consultation", desc: "Understanding your vision, preferences, and expectations." },
  { id: 2, title: "Planning & Design", desc: "Crafting a bespoke concept and detailed event blueprint." },
  { id: 3, title: "Theme Selection", desc: "Finalizing the aesthetics, colors, and premium decor elements." },
  { id: 4, title: "Setup & Decoration", desc: "Bringing the vision to life with meticulous attention to detail." },
  { id: 5, title: "Event Execution", desc: "Flawless coordination to ensure a smooth and magical experience." },
  { id: 6, title: "Final Celebration", desc: "You enjoy your royal moment while we handle the rest." },
];

export default function Timeline() {
  return (
    <section id="process" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-gold mb-4"
          >
            Our Royal Process
          </motion.h2>
          <p className="text-champagne font-light">How we turn your dreams into reality.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Golden Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-1/2" />

          {timelineSteps.map((step, index) => (
            <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group mb-12 last:mb-0">
              
              {/* Timeline Dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute left-[24px] md:left-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#D4AF37] md:-translate-x-1/2 z-10"
              />

              {/* Content Box */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`w-[calc(100%-60px)] md:w-[calc(50%-40px)] pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}
              >
                <div className="glassmorphism p-6 rounded-2xl border border-gold/10 hover:border-gold/50 transition-colors duration-300">
                  <span className="text-gold text-4xl font-heading opacity-50 mb-2 block">
                    0{step.id}
                  </span>
                  <h3 className="text-ivory font-heading text-xl mb-2">{step.title}</h3>
                  <p className="text-champagne/70 font-light text-sm">{step.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
