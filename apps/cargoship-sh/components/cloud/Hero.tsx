import HeroImg from "@/images/hero-preview.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Welcome to Cargoship{" "}
            <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
              Cloud
            </span>{" "}
            , where cutting-edge{" "}
            <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
              machine learning
            </span>{" "}
            is just a click away{" "}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We understand that accessing and deploying machine learning models can be a complex process, which
            is why we&apos;ve made it as seamless and effortless as possible. With our cloud-powered model
            hosting, you can leverage the full potential of our models right from your own applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://app.cargoship.sh"
              className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm transition-all ease-in-out hover:scale-105 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
              Get started for free
            </Link>
            <Link href="/docs/cloud/introduction" className="text-base font-semibold leading-7 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <Image
          src={HeroImg}
          alt="Cargoship Cloud Example"
          width={2432}
          height={1442}
          className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
        />
      </div>
    </div>
  );
}
