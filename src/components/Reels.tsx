"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

type Reel = {
  id: number;
  title: string;
  category: string;
  videoSrc?: string;
  thumbnail?: string;
  type: "video" | "image";
};

const reels: Reel[] = [
  { id: 1, title: "Royal Wedding", category: "Wedding", videoSrc: "/videos/marriage_reel.mp4", type: "video" },
  { id: 2, title: "Surprise Proposal", category: "Proposal", videoSrc: "/videos/proposal_reel.mp4", type: "video" },
  { id: 3, title: "Grand Gala", category: "Corporate", videoSrc: "/videos/corporate_reel.mp4", type: "video" },
  { id: 4, title: "Birthday Magic", category: "Birthday", videoSrc: "/videos/birthday_reel.mp4", type: "video" },
];

export default function Reels() {
  return (
    <section id="reels" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl text-gold mb-2"
            >
              Event Reels
            </motion.h2>
            <p className="text-champagne font-light">Experience the magic in motion.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-gold hover:text-ivory transition-colors uppercase tracking-widest text-sm border-b border-gold pb-1">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer border border-gold/10 hover:border-gold/50 transition-colors"
            >
              {reel.type === "video" ? (
                <video
                  src={reel.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-[pulse_4s_ease-in-out_infinite]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90 group-hover:via-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-gold/50 box-glow">
                  <Play className="text-gold ml-1" size={24} />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-1 block">
                  {reel.category}
                </span>
                <h3 className="text-ivory font-heading text-xl leading-tight">
                  {reel.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
