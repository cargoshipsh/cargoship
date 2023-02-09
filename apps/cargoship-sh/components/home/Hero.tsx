import Link from "next/link";
import BackgroundGradient from "./BackgroundGradient";
import HeroExplainer from "@/images/hero-explainer.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative py-24 sm:py-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The{" "}
            <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
              easiest way
            </span>{" "}
            to integrate{" "}
            <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
              AI
            </span>{" "}
            into your application
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choose a model from our open source collection and use it without any machine learning knowledge
            to build amazing products.
            <br />
            Host it yourself or use our managed service.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/waitlist"
              className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm transition-all ease-in-out hover:scale-105 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
              Join the beta
            </Link>
            <Link href="#features" className="text-base font-semibold leading-7 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <Image
          src={HeroExplainer}
          alt="How cargoship works"
          className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
        />
      </div>
    </div>
  );
}
