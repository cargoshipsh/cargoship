import Hero from "@/components/cloud/Hero";
import Cloud from "@/components/cloud/Features";
import CTA from "@/components/cloud/CTA";
import Pricing from "@/components/cloud/Pricing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";
import { UniversalCTA } from "@/components/shared/UniversalCTA";

export default function CloudLanding() {
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
        <Cloud />
        <Pricing /> 
        <CTA />
        <UniversalCTA
          teaser="Cargoship is still evolving"
          headline="Join the discussion"
          subheadline="Cargoship is in early access. Join our Discord to get updates and individual help to setup the models."
          cta="Join Discord"
          href="/discord"
          inverted
        />
        <div className="my-10"></div>
        <Footer />
      </main>
    </div>
  );
}
