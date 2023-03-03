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
    numModels: 5,
  },
  {
    id: "image-recognition",
    name: "Image Recognition",
    description: "Find objects in images, classify them or find subtitles",
    image: ImageRecognitionCollectionImage,
    numModels: 2,
  },
  {
    id: "image-generation",
    name: "Image Generation",
    description: "Generate new images from a given input",
    image: ImageGenerationCollectionImage,
    comingSoon: true,
    numModels: 0,
  },
  {
    id: "data-processing",
    name: "General Data Processing",
    description: "Classify data, find patterns, predict values and more",
    image: DataProcessingCollectionImage,
    comingSoon: true,
    numModels: 0,
  },
];

export default function Collections() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
      {collections.map((collection) => (
        <Link
          key={collection.name}
          href={`/collections/${collection.id}`}
          className="relative rounded-2xl border-2 border-white/10 bg-white/5 px-8 pt-10 pb-6 backdrop-blur transition-all ease-in-out hover:scale-105">
          <Image
            className="mx-auto h-48 rounded-lg object-cover md:h-56"
            src={collection.image}
            alt="Language Detection Hero Image"
          />
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
            {collection.name}
          </h3>
          <p className="text-sm leading-6 text-gray-400">{collection.description}</p>
          <span className="mt-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-slate-300">
            {collection.numModels} {collection.numModels === 1 ? "model" : "models"}
          </span>
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
  );
}
