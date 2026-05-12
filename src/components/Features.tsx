"use client";

import { motion } from "framer-motion";
import { Crown, CheckCircle, Diamond, Clock, HeartHandshake } from "lucide-react";

const features = [
  { id: 1, icon: Crown, title: "Luxury Decorations", desc: "Premium floral and architectural designs that exude royalty." },
  { id: 2, icon: CheckCircle, title: "Professional Management", desc: "Experienced team handling every detail with precision." },
  { id: 3, icon: Diamond, title: "Bespoke Packages", desc: "Customized event planning tailored to your unique needs." },
  { id: 4, icon: Clock, title: "On-Time Execution", desc: "Flawless scheduling to ensure a smooth, stress-free event." },
  { id: 5, icon: HeartHandshake, title: "Dedicated Support", desc: "We are with you at every step, providing 24/7 assistance." },
];

export default function Features() {
  return (
    <section className="py-24 bg-rich-brown relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-gold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <p className="text-champagne font-light">The Evaraa Events promise of excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glassmorphism p-8 rounded-2xl text-center group hover:bg-gold/5 transition-all duration-300 border border-gold/10 hover:border-gold/30 ${
                  index === 3 || index === 4 ? "lg:col-span-1.5" : ""
                }`}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-gold" size={28} />
                </div>
                <h3 className="text-ivory font-heading text-xl mb-3">{feature.title}</h3>
                <p className="text-champagne/70 font-light text-sm">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
