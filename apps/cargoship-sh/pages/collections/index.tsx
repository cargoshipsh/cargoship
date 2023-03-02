import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";
import Image from "next/image";
import Link from "next/link";
import LanguageDetectionCollectionImage from "@/images/collection-language-detection.jpg";
import ImageRecognitionCollectionImage from "@/images/collection-image-recognition.jpg";
import ImageGenerationCollectionImage from "@/images/collection-image-generation.jpg";
import DataProcessingCollectionImage from "@/images/collection-data-processing.jpg";

const collections = [
  {
    id: "text-processing",
    name: "Text Processing",
    description: "Analyze text, find information, detect language and more",
    image: LanguageDetectionCollectionImage,
  },
  {
    id: "image-recognition",
    name: "Image Recognition",
    description: "Find objects in images, classify them or find subtitles",
    image: ImageRecognitionCollectionImage,
    comingSoon: true,
  },
  {
    id: "image-generation",
    name: "Image Generation",
    description: "Generate new images from text",
    image: ImageGenerationCollectionImage,
    comingSoon: true,
  },
  {
    id: "data-processing",
    name: "General Data Processing",
    description: "Classify data, find patterns, predict values and more",
    image: DataProcessingCollectionImage,
    comingSoon: true,
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
              <span className="mb-2 inline-flex items-center rounded-md bg-sky-100 px-2.5 py-0.5 text-sm font-medium text-sky-800">
                Categories
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Choose your Topic</h2>
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
                  className="relative rounded-2xl border-2 border-white/10 bg-white/5 py-10 px-8 backdrop-blur transition-all ease-in-out hover:scale-105">
                  <Image
                    className="mx-auto h-48 rounded-lg object-cover md:h-56"
                    src={collection.image}
                    alt="Language Detection Hero Image"
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                    {collection.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">{collection.description}</p>
                  {collection.comingSoon && (
                    <div className="absolute -top-2 -left-1 flex w-full justify-center">
                      <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800">
                        launching soon
                      </span>
                    </div>
                  )}
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
