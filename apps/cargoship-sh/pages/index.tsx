import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <div className="isolate bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
