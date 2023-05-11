import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  LockClosedIcon,
  RectangleStackIcon,
  ServerIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import BackgroundGradient from "./BackgroundGradient";

const features = [
  {
    name: "CPU Model",
    description:
      ".",
    icon: RectangleStackIcon,
  },
  {
    name: "GPU Model",
    description: "Cargoship is keeping up with the development of the AI space so you don’t have to.",
    icon: SparklesIcon,
  },
  {
    name: "Open Source & easy to use",
    description:
      "You can either host the model yourself very easily or get your personal endpoint and API-Key with one click.",
    icon: CursorArrowRaysIcon,
  },
];

export default function Features() {
  return (
    <div className="relative py-24" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-400">
            Smart Apps without the fuss
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            No AI engineer? No problem!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            No matter if Image Recognition or Language Processing - all models are pre-trained and packaged in
            an easy-to-use API.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon className="absolute top-1 left-1 h-5 w-5 text-sky-500" aria-hidden="true" />
                {feature.name}
              </dt>
              <br />
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <BackgroundGradient />
    </div>
  );
}
