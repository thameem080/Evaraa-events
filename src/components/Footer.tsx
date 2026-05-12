import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-gold/20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="/images/logo1.png" alt="Evaraa Logo" className="w-16 h-16 rounded-full border border-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] object-contain bg-black" />
              <div className="flex flex-col">
                <span className="font-heading text-2xl tracking-widest text-gold text-glow">
                  EVARAA
                </span>
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-ivory">
                  Events
                </span>
              </div>
            </a>
            <p className="text-champagne/70 text-sm leading-relaxed mb-6">
              Creating premium, cinematic, and royal event experiences that turn your dreams into unforgettable memories.
            </p>
            <div className="flex gap-4 text-gold mt-4">
              <a 
                href="https://www.instagram.com/evaraaevents.in?igsh=cGQxcXpoMzRzbGNi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-ivory transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/-2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-ivory font-heading text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-champagne/70">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory font-heading text-xl mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-champagne/70">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Birthday Celebrations</li>
              <li>Stage Decoration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory font-heading text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-champagne/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Royal City, Event Center</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 93445 89238</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@evaraaevents.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-champagne/50">
          <p>&copy; {new Date().getFullYear()} Evaraa Events. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
