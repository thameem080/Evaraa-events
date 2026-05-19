import About from "@/components/About";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EVARAA EVENTS",
  description: "Learn about EVARAA EVENTS, our story, why choose us, and our royal process.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full pt-20">
      <About />
      <Features />
      <Timeline />
      <Footer />
    </main>
  );
}
