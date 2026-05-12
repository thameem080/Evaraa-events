"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";

export default function Booking() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const eventType = formData.get("eventType");
    const date = formData.get("date");
    const message = formData.get("message");

    const rawMessage = `*New Inquiry from EVARAA Events*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Event Type:* ${eventType}\n*Date:* ${date || "Not specified"}\n*Message:* ${message || "No message"}`;
    const whatsappMessage = encodeURIComponent(rawMessage);
    
    window.open(`https://wa.me/919344589238?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="glassmorphism rounded-3xl p-8 md:p-12 border border-gold/30 box-glow relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-ivory mb-4">
                Let's Craft Your <span className="text-gold">Dream Event</span>
              </h2>
              <p className="text-champagne/80 font-light mb-8">
                Fill out the form below or contact us directly via WhatsApp to start planning your luxurious and unforgettable experience.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-ivory">
                  <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center bg-gold/5">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">Direct Call</p>
                    <p className="font-semibold">+91 93445 89238</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <a 
                    href="https://wa.me/919344589238" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 min-w-[120px] bg-black/40 border border-gold/50 text-gold hover:bg-gold hover:text-black rounded-2xl font-semibold transition-all group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    <span className="text-sm">WhatsApp</span>
                  </a>

                  <a 
                    href="https://www.instagram.com/evaraaevents.in?igsh=cGQxcXpoMzRzbGNi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 min-w-[120px] bg-black/40 border border-gold/50 text-gold hover:bg-gold hover:text-black rounded-2xl font-semibold transition-all group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="text-sm">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gold ml-2">Full Name</label>
                  <input required name="name" type="text" id="name" className="bg-black/50 border border-gold/20 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gold ml-2">Phone Number</label>
                  <input required name="phone" type="tel" id="phone" className="bg-black/50 border border-gold/20 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventType" className="text-xs uppercase tracking-widest text-gold ml-2">Event Type</label>
                  <select name="eventType" id="eventType" className="bg-black/50 border border-gold/20 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-gold ml-2">Event Date</label>
                  <input name="date" type="date" id="date" className="bg-black/50 border border-gold/20 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gold ml-2">Message</label>
                <textarea name="message" id="message" rows={4} className="bg-black/50 border border-gold/20 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your dream event..." />
              </div>

              <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-black font-bold uppercase tracking-widest rounded-xl hover:bg-ivory transition-colors mt-2">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
