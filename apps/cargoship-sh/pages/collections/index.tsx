import Navbar from "@/components/layout/Navbar";
import Collections from "@/components/models/Collections";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";
import { UniversalCTA } from "@/components/shared/UniversalCTA";

export default function CollectionsOverviewPage() {
  return (
    <div className="isolate bg-gray-900">
      <MetaInformation
        title={"Language Detection Model"}
        description={"API for detecting language of an input text"}
      />
      <Navbar />
      <main className="min-h-screen">
        <div className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl">
              <span className="mb-2 inline-flex items-center rounded-md bg-sky-100 px-2.5 py-0.5 text-sm font-medium text-sky-800">
                Categories
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Choose your Topic</h2>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                We provide a collection of open-source and free-to-use AI models that you can use in your
                software.
              </p>
            </div>
            <div className="mt-20">
              <Collections />
            </div>
          </div>
        </div>
        <div className="mb-10">
          <UniversalCTA
            teaser="Cargoship is still evolving"
            headline="Missing your favorite model?"
            subheadline="Join our Discord and let us know!"
            cta="Join Discord"
            href="/discord"
            inverted
          />
        </div>

        <Footer />
      </main>
    </div>
  );
}
