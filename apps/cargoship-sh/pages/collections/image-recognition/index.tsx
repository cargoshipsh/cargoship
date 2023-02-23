import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";
import { UnderConstructionCTA } from "@/components/shared/UnderConstructionCTA";

export default function CollectionsOverviewPage() {
  return (
    <div className="isolate bg-gray-900">
      <MetaInformation
        title={"Language Detection Model"}
        description={"API for detecting language of an input text"}
      />
      <Navbar />
      <main className="min-h-screen">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl">
              <span className="mb-2 inline-flex items-center rounded-md bg-sky-100 px-2.5 py-0.5 text-sm font-medium text-sky-800">
                Collection
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Image Processing</h2>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                Find objects in images, classify them or find subtitles
              </p>
            </div>
            <div className="mx-auto mt-20">
              <UnderConstructionCTA />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
