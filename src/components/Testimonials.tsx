"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarti & Rahul",
    event: "Royal Wedding",
    text: "Evaraa Events made our dream wedding a reality. The attention to detail, the majestic floral arrangements, and the seamless execution were beyond our expectations. Truly a luxury experience.",
    image: "/images/download (1).jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    event: "Corporate Gala",
    text: "Professional, elegant, and perfectly managed. The LED stage setup and the ambient lighting created exactly the premium vibe we wanted for our annual tech summit.",
    image: "/images/download (6).jpg",
  },
  {
    id: 3,
    name: "Vikram Singh",
    event: "50th Birthday Celebration",
    text: "They transformed our backyard into a magical wonderland. The guests were awestruck by the decor and the smooth flow of events. Highly recommended for any premium gathering.",
    image: "/images/happy birthday.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-rich-brown relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-gold mb-4"
          >
            Client Love
          </motion.h2>
          <p className="text-champagne font-light">What our esteemed clients say about us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              
              <p className="text-champagne/80 font-light italic mb-8 relative z-10 leading-relaxed text-sm md:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold/50"
                />
                <div>
                  <h4 className="text-ivory font-semibold">{testimonial.name}</h4>
                  <p className="text-gold text-xs uppercase tracking-widest">{testimonial.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
