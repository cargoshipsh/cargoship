import Link from "next/link";
import {
  Cog8ToothIcon,
  DocumentTextIcon,
  FlagIcon,
  MicrophoneIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import BackgroundGradient from "./BackgroundGradient";
import { Icon } from "../shared/Icon";

const models = [
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
];

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
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/collections"
              className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm transition-all ease-in-out hover:scale-105 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
              Check out the models
            </Link>
        </div>
      </div>
      <div>
        <div className=" mx-auto grid max-w-5xl grid-cols-1 gap-6 px-2 sm:grid-cols-2">
          {models.map((model) => (
            <div
              key={model.label}
              className="drop-shadow-card duration-120 relative cursor-default rounded-lg border-2 border-white/10 bg-white/5 p-8 backdrop-blur transition-all ease-in-out hover:scale-105 hover:bg-white/10">
              <div className="h-12 w-12">
                <model.frontend.icon className="text-brand-light h-10 w-10" />
              </div>
              <h3 className="mt-3 mb-1 text-lg font-bold text-slate-100">{model.label}</h3>
              <p className="text-sm text-slate-400">{model.frontend.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
