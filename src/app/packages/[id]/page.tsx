import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const packageData = {
  wedding: {
    title: "Royal Wedding Packages",
    subtitle: "A Celebration of Eternal Love",
    poster: "/images/posters/wedding.jpeg",
    services: [
      { name: "Venue Selection & Booking", desc: "Premium palaces, resorts, and exotic beach destinations." },
      { name: "Thematic Decor & Floral Design", desc: "Custom mandaps, royal entrance setups, and luxury floral arrangements." },
      { name: "Cinematic Photography & Videography", desc: "Drone shots, candid moments, and pre-wedding shoots." },
      { name: "Catering & Menu Styling", desc: "Multi-cuisine gourmet buffets and personalized dessert counters." },
      { name: "Entertainment & Artist Management", desc: "Live bands, celebrity DJs, and traditional folk performances." },
      { name: "Bridal Makeup & Styling", desc: "Top-tier makeup artists and personal bridal styling." },
      { name: "Guest Hospitality & Logistics", desc: "Airport transfers, luxury accommodations, and welcome hampers." }
    ]
  },
  corporate: {
    title: "Corporate Event Packages",
    subtitle: "Elevate Your Brand's Presence",
    poster: "/images/posters/corporate.jpeg",
    services: [
      { name: "Conferences & Seminars", desc: "End-to-end management of professional gatherings with top-tier AV setups." },
      { name: "Product Launches", desc: "High-impact stage designs, 3D mapping, and media management." },
      { name: "Award Ceremonies & Galas", desc: "Red carpet setups, elegant seating, and luxury catering." },
      { name: "Team Building Retreats", desc: "Destination management, engaging activities, and logistics." },
      { name: "Brand Activations", desc: "Interactive tech setups, photo booths, and immersive brand experiences." },
      { name: "Corporate Gifting", desc: "Premium customized hampers and executive souvenirs." }
    ]
  },
  birthday: {
    title: "Luxury Birthday Packages",
    subtitle: "Make Every Year Magical",
    services: [
      { name: "Themed Decor & Setups", desc: "From fairytales to elegant black-tie soirées." },
      { name: "Custom Cake & Dessert Stations", desc: "Designer cakes and luxurious sweet tables." },
      { name: "Immersive Entertainment", desc: "Magicians, live bands, DJs, and interactive games." },
      { name: "Professional Photography", desc: "Capturing all the candid joy and memorable moments." },
      { name: "Gourmet Catering", desc: "Kid-friendly menus alongside sophisticated adult dining." },
      { name: "Return Gifts & Favors", desc: "Customized, premium thank-you gifts for your guests." }
    ]
  },
  proposal: {
    title: "Surprise Proposal Packages",
    subtitle: "A Moment to Remember Forever",
    services: [
      { name: "Venue Scouting & Booking", desc: "Private beaches, luxury rooftops, and secluded romantic spots." },
      { name: "Thematic Decor & Ambience", desc: "Candlelight pathways, floral arches, and personalized signage." },
      { name: "Candid Photography & Videography", desc: "Hidden cameras and professional photographers to capture the beautiful reaction." },
      { name: "Live Music & Entertainment", desc: "Acoustic guitarists, violinists, or your favorite song playing in the background." },
      { name: "Gourmet Dining Experience", desc: "Private chef, champagne toast, and customized romantic dinner." }
    ]
  }
};

export function generateStaticParams() {
  return [
    { id: 'wedding' },
    { id: 'corporate' },
    { id: 'birthday' },
    { id: 'proposal' },
  ];
}

export default async function PackagePage({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  // Handle both Next 14 and Next 15+ params format
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  
  const data = packageData[id as keyof typeof packageData];
  
  if (!data) {
    notFound();
  }

  return (
    <SmoothScroll>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24 relative overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <Link href="/#services" className="inline-flex items-center gap-2 text-champagne hover:text-gold transition-colors mb-12 border border-gold/20 hover:border-gold/50 px-4 py-2 rounded-full text-sm tracking-widest uppercase">
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-ivory mb-4">{data.title}</h1>
            <p className="text-gold text-sm sm:text-base md:text-lg uppercase tracking-[0.2em]">{data.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            {/* Services Details Column */}
            <div className="glassmorphism p-6 sm:p-8 md:p-12 border border-gold/20 rounded-3xl">
                <h3 className="text-2xl sm:text-3xl font-heading text-gold mb-6 sm:mb-8 border-b border-gold/20 pb-4">Our Premium Offerings</h3>
                
                <div className="flex flex-col gap-8">
                  {data.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0 group-hover:bg-gold/20 transition-colors mt-1">
                        <CheckCircle2 className="text-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl text-ivory font-semibold mb-2">{service.name}</h4>
                        <p className="text-champagne/70 font-light leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t border-gold/20">
                  <h4 className="text-ivory text-2xl font-heading mb-4">Ready to start planning?</h4>
                  <p className="text-champagne/70 mb-8 font-light">Every event is unique. Contact us today to customize this package to your exact vision and budget.</p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href="/#booking" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black hover:bg-ivory rounded-full font-bold uppercase tracking-widest transition-colors w-full sm:w-auto">
                      Book Consultation
                    </Link>
                    <a href="https://wa.me/919344589238" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold hover:bg-gold/10 rounded-full font-bold uppercase tracking-widest transition-colors w-full sm:w-auto">
                      WhatsApp Us
                    </a>
                  </div>
                </div>

              </div>
            </div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
