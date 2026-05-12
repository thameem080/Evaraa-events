"use client";

import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  { id: 1, image: "/images/A Love as Timeless as the Mountains.jpg", title: "Timeless Mountain Wedding", tag: "Wedding" },
  { id: 2, image: "/images/Led screen & Side panel decor.jpg", title: "LED Stage Decor", tag: "Decoration" },
  { id: 3, image: "/images/luxury_wedding_setup.png", title: "Royal Palace Reception", tag: "Wedding" },
  { id: 4, image: "/images/download (11).jpg", title: "Romantic Surprise Proposal", tag: "Proposal" },
  { id: 5, image: "/images/download (3).jpg", title: "Elegant Beachside Vows", tag: "Wedding" },
  { id: 6, image: "/images/download (4).jpg", title: "Luxurious Floral Mandap", tag: "Decoration" },
];

export default function Portfolio() {

  return (
    <section id="portfolio" className="py-24 bg-rich-brown relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-gold mb-4"
          >
            Our Masterpieces
          </motion.h2>
          <p className="text-champagne font-light max-w-2xl mx-auto">
            A glimpse into the magical moments we've crafted.
          </p>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden group rounded-lg break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-ivory font-heading text-2xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
