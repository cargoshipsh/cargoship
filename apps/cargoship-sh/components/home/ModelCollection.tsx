import Collections from "../models/Collections";
import BackgroundGradient from "./BackgroundGradient";

/* const models = [
  {
    label: "Text Summarization",
    value: "textSummarization",
    frontend: {
      icon: DocumentTextIcon,
      description:
        "Automatically reduce a text document to its most important points while preserving its overall meaning.",
    },
  },
  {
    label: "Language Detection",
    value: "languageDetection",
    frontend: {
      icon: FlagIcon,
      description: "Automatically determine the language of a given text.",
    },
  },
  {
    label: "Text Generation",
    value: "textGeneration",
    frontend: {
      icon: DocumentTextIcon,
      description:
        "Automatically generate coherent and meaningful text in response to a prompt, using statistical and machine learning techniques.",
    },
  },
  {
    label: "Image Recognition",
    value: "imageRecognition",
    frontend: {
      icon: PhotoIcon,
      description:
        "Identiy objects, people, scenes, and actions within an image using machine learning algorithms.",
    },
  },
  {
    label: "Audio Transcription",
    value: "audioTranscription",
    frontend: {
      icon: MicrophoneIcon,
      description: "Convert spoken words within an audio recording into written text.",
    },
  },
  {
    label: "General Classification",
    value: "generalClassification",
    frontend: {
      icon: Cog8ToothIcon,
      description:
        "Use the relationship of a given dataset to assign new input data to one of a predefined set of classes or categories.",
    },
  },
]; */

export default function ModelCollection() {
  return (
    <div className="relative py-10">
      <div className="absolute inset-x-0 top-[calc(100%-24rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-48rem)]">
        <BackgroundGradient rotate={true} />
      </div>
      <div className="px-4 py-20 text-center sm:px-6 lg:px-8" id="best-practices">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-400">Open-Source</h2>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get started with{" "}
          <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
            our pre-trained models
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-slate-300 md:mt-5 md:max-w-3xl">
          Packaged as easy-to-use Docker containers, you get a well-documented API for every AI challenge.
        </p>
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-900 px-3 text-xl font-bold tracking-tight text-white">
              Our collections
            </span>
          </div>
        </div>
        <h2 className="my-14 text-xl font-bold tracking-tight text-white sm:text-2xl"></h2>
        <div className="mx-auto max-w-5xl">
          <Collections />
        </div>
      </div>
    </div>
  );
}
