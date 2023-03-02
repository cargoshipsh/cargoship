import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import ModelCollection from "@/components/home/ModelCollection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";
import { UniversalCTA } from "@/components/shared/UniversalCTA";

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
        <UniversalCTA
          teaser="Cargoship is still evolving"
          headline="Join the discussion"
          subheadline="Cargoship is in early access. Join our Discord to get updates and individual help to setup the models."
          cta="Join Discord"
          href="/discord"
          inverted
        />
        <ModelCollection />
        {/* <CTA /> */}
        {/* <UniversalCTA
          teaser="Check out the models"
          headline="Make your app smart today"
          subheadline="Our model collection is still growing. Check out our newest additions to the collections."
          cta="Check out models"
          href="collections"
          inverted
        /> */}
        <div className="my-10"></div>
        <Footer />
      </main>
    </div>
  );
}
