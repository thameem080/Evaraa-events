"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Wedding Planning",
    description: "Royal and cinematic wedding experiences tailored to perfection.",
    image: "/images/download (1).jpg",
    link: "/packages/wedding",
  },
  {
    id: 2,
    title: "Birthday Events",
    description: "Magical setups and premium planning for your special day.",
    image: "/images/happy birthday.jpg",
    link: "/packages/birthday",
  },
  {
    id: 3,
    title: "Corporate Events",
    description: "Elevate your brand with highly professional and luxurious corporate gatherings.",
    image: "/images/Led screen & Side panel decor.jpg",
    link: "/packages/corporate",
  },
  {
    id: 4,
    title: "Surprise Proposal",
    description: "Romantic and luxurious surprise proposals crafted to create unforgettable moments.",
    image: "/images/surprise_proposal.png",
    link: "/packages/proposal",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl text-gold mb-4"
          >
            Services Offering
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[450px] w-full overflow-hidden border border-gold/20 cursor-pointer rounded-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-500 group-hover:bg-black/70" />
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 w-full">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl text-ivory mb-4">
                    {service.title}
                  </h3>
                </div>
                <div className="mb-6">
                  <p className="text-champagne font-light md:text-lg">
                    {service.description}
                  </p>
                </div>
                
                <Link href={service.link} className="flex items-center gap-2 px-6 py-3 bg-gold/10 hover:bg-gold text-gold hover:text-black border border-gold/50 rounded-full transition-all duration-300 z-10">
                  <span className="uppercase tracking-widest text-sm font-semibold">View Packages</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              {/* Decorative borders */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
