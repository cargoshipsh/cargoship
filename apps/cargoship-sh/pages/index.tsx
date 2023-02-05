import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";

export default function HomePage() {
  return (
    <div className="isolate bg-gray-900">
      <MetaInformation
        title={"Cargoship - Integrate AI into your Application"}
        description={
          "Choose a model from our collection and use it with zero machine learning knowledge to build amazing products."
        }
      />
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
