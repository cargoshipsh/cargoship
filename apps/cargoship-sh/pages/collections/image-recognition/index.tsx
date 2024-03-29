import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import MetaInformation from "@/components/shared/MetaInformation";
import ImageRecognitionCollectionImage from "@/images/collection-image-recognition.jpg";
import ImageCaptioningCollectionImage from "@/images/collection-image-captioning.jpg";
import OCRImage from "@/images/collection-ocr.jpg";
import Image from "next/image";
import Link from "next/link";

const models = [
  {
    id: "image-captioning",
    name: "Image Captioning",
    description: "Automatically generates a caption for an image",
    image: ImageCaptioningCollectionImage,
    sizeTag: "moderate",
    computation: "cpu",
    size: "980 MB",
  },
  {
    id: "image-classification",
    name: "Image Classification",
    description: "Automatically classifies an image into one of the 1,000 ImageNet classes",
    image: ImageRecognitionCollectionImage,
    sizeTag: "moderate",
    computation: "cpu",
    size: "350 MB",
  },
  {
    id: "ocr-handwritten",
    name: "Optical Character Recognition",
    description: "Recognize handwritten text in scanned documents and images",
    image: OCRImage,
    sizeTag: "moderate",
    computation: "cpu",
    size: "1.4 GB",
  },
];

export default function CollectionsOverviewPage() {
  return (
    <div className="isolate bg-gray-900">
      <MetaInformation
        title={"Image Recognition"}
        description={"Find objects and text in images, classify them or find subtitles"}
      />
      <Navbar />
      <main className="min-h-screen">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl">
              <span className="mb-2 inline-flex items-center rounded-md bg-sky-100 px-2.5 py-0.5 text-sm font-medium text-sky-800">
                Collection
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Image Recognition</h2>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                Find objects and text in images, classify them or find subtitles
              </p>
            </div>
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {models.map((model) => (
                <Link
                  key={model.name}
                  href={`/collections/image-recognition/${model.id}`}
                  className="rounded-2xl border-2 border-white/10 bg-white/5 py-10 px-8 backdrop-blur transition-all ease-in-out hover:scale-105">
                  <Image
                    className="mx-auto h-48 rounded-lg md:h-56"
                    src={model.image}
                    alt="Language Detection Hero Image"
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                    {model.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">{model.description}</p>
                  <div className="mt-2 space-x-2">
                    {model.sizeTag === "small" && (
                      <span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Small
                      </span>
                    )}
                    {model.sizeTag === "moderate" && (
                      <span className="inline-flex items-center rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                        Moderate
                      </span>
                    )}
                    {model.computation === "cpu" && (
                      <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                        CPU
                      </span>
                    )}
                    {model.size && (
                      <span className="inline-flex items-center rounded bg-sky-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                        {model.size}
                      </span>
                    )}
                  </div>
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
