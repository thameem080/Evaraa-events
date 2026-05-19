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
      { name: "Venue Selection & Booking", desc: "Premium palaces, resorts, and exotic beach destinations.", image: "/images/wedding_packages/Venue Selection & Booking.jpg" },
      { name: "Thematic Decor & Floral Design", desc: "Custom mandaps, royal entrance setups, and luxury floral arrangements.", image: "/images/wedding_packages/Elegant Red Setup.jpg" },
      { name: "Cinematic Photography & Videography", desc: "Drone shots, candid moments, and pre-wedding shoots.", image: "/images/wedding_packages/Cinematic Photography & Videography.jpg" },
      { name: "Catering & Menu Styling", desc: "Multi-cuisine gourmet buffets and personalized dessert counters.", image: "/images/wedding_packages/luxury wedding buffet.jpg" },
      { name: "Entertainment & Artist Management", desc: "Live bands, celebrity DJs, and traditional folk performances.", image: "/images/wedding_packages/celebrity dj wedding.jpg" },
      { name: "Bridal Makeup & Styling", desc: "Top-tier makeup artists and personal bridal styling.", image: "/images/wedding_packages/luxury bridal makeup.jpg" },
      { name: "Guest Hospitality & Logistics", desc: "Airport transfers, luxury accommodations, and welcome hampers.", image: "/images/wedding_packages/Guest Hospitality & Logistics.jpg" }
    ]
  },
  corporate: {
    title: "Corporate Event Packages",
    subtitle: "Elevate Your Brand's Presence",
    poster: "/images/posters/corporate.jpeg",
    services: [
      { name: "Conferences & Seminars", desc: "State-of-the-art AV setups, staging, and seating.", image: "/images/corporate_packages/corporate conference setup.jpg" },
      { name: "Product Launches", desc: "High-impact reveals with immersive brand experiences.", image: "/images/corporate_packages/product launch event.jpg" },
      { name: "Award Ceremonies & Galas", desc: "Red carpet arrivals, luxury dining, and entertainment.", image: "/images/corporate_packages/Award Ceremonies & Galas.jpg" },
      { name: "Team Building & Retreats", desc: "Curated off-site experiences that inspire and connect.", image: "/images/corporate_packages/team building activities.jpg" },
      { name: "Brand Activations", desc: "Engaging pop-ups and interactive installations.", image: "/images/corporate_packages/event photo booth.jpg" },
      { name: "Corporate Gifting", desc: "Curated luxury hampers for your delegates and VIPs.", image: "/images/corporate_packages/premium gift hamper.jpg" }
    ]
  },
  birthday: {
    title: "Luxury Birthday Packages",
    subtitle: "Make Every Year Magical",
    services: [
      { name: "Themed Decor & Setups", desc: "From fairytales to elegant black-tie soirées.", image: "/images/birthday_packages/Themed Decor & Setups.jpg" },
      { name: "Custom Cake & Dessert Stations", desc: "Designer cakes and luxurious sweet tables.", image: "/images/birthday_packages/Custom Cake & Dessert Stations.jpg" },
      { name: "Immersive Entertainment", desc: "Magicians, live bands, DJs, and interactive games.", image: "/images/birthday_packages/Immersive Entertainment.jpg" },
      { name: "Professional Photography", desc: "Capturing all the candid joy and memorable moments.", image: "/images/birthday_packages/Professional Photography.jpg" },
      { name: "Gourmet Catering", desc: "Kid-friendly menus alongside sophisticated adult dining.", image: "/images/birthday_packages/Gourmet Catering.jpg" },
      { name: "Return Gifts & Favors", desc: "Customized, premium thank-you gifts for your guests.", image: "/images/birthday_packages/Regalitos de salida_ Cotillones 💕.jpg" }
    ]
  },
  proposal: {
    title: "Surprise Proposal Packages",
    subtitle: "A Moment to Remember Forever",
    services: [
      { name: "Venue Scouting & Booking", desc: "Private beaches, luxury rooftops, and secluded romantic spots.", image: "/images/proposal_packages/venue_scouting.png" },
      { name: "Romantic Setup & Styling", desc: "Beachside cabanas, private yachts, or rooftop candlelit dinners.", image: "/images/proposal_packages/romantic_setup.png" },
      { name: "Photography & Videography", desc: "Hidden camera setups and candid emotional captures.", image: "/images/proposal_packages/proposal_photography.png" },
      { name: "Live Music & Entertainment", desc: "Acoustic musicians or flash mobs to set the mood.", image: "/images/proposal_packages/proposal_music.png" },
      { name: "Luxury Dining", desc: "Private chefs and premium champagne service.", image: "/images/proposal_packages/proposal_dining.png" }
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

          <div className="flex flex-col gap-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading text-gold mb-8 sm:mb-10 border-b border-gold/20 pb-4 inline-block">Our Premium Offerings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {data.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="group relative h-[400px] md:h-[450px] w-full overflow-hidden border border-gold/20 cursor-pointer rounded-xl"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url('${service.image || ""}')`, backgroundColor: service.image ? 'transparent' : '#1a1a1a' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-500 group-hover:bg-black/70" />
                    
                    {!service.image && (
                      <div className="absolute inset-0 flex items-start pt-8 justify-center pointer-events-none">
                        <span className="text-gold/30 font-heading text-sm uppercase tracking-widest">Image Placeholder</span>
                      </div>
                    )}

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 w-full z-10">
                      <div>
                        <h4 className="font-heading text-3xl md:text-4xl text-ivory mb-4">
                          {service.name}
                        </h4>
                      </div>
                      <div className="mb-6">
                        <p className="text-champagne font-light md:text-lg">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative borders */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphism p-8 md:p-12 border border-gold/20 rounded-3xl mt-8">
              <h4 className="text-ivory text-3xl font-heading mb-4">Ready to start planning?</h4>
              <p className="text-champagne/80 mb-8 font-light text-lg">Every event is unique. Contact us today to customize this package to your exact vision and budget.</p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/#booking" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black hover:bg-ivory rounded-full font-bold uppercase tracking-widest transition-colors w-full sm:w-auto font-heading">
                  Book Consultation
                </Link>
                <a href="https://wa.me/919344589238" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold hover:bg-gold/10 rounded-full font-bold uppercase tracking-widest transition-colors w-full sm:w-auto font-heading">
                  WhatsApp Us
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
