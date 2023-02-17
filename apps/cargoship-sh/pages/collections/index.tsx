import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";
import Image from "next/image";
import Link from "next/link";
import LanguageDetectionCollectionImage from "@/images/collection-language-detection.jpg";

const collections = [
  {
    id: "language-detection",
    name: "Language Detection",
    description: "Automatically detect the language of an input text",
    image: LanguageDetectionCollectionImage,
  },
];

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
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Add AI to your software without any machine learning knowledge
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                We provide a collection of open-source and free-to-use AI models that you can use in your
                software.
              </p>
            </div>
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.name}
                  href={`/collections/${collection.id}`}
                  className="rounded-2xl border-2 border-white/10 bg-white/5 py-10 px-8 backdrop-blur transition-all ease-in-out hover:scale-105">
                  <Image
                    className="mx-auto h-48 rounded-lg md:h-56"
                    src={collection.image}
                    alt="Language Detection Hero Image"
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                    {collection.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">{collection.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
