import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden border-2 border-white/20 bg-white/5 px-6 py-24 text-center shadow-2xl backdrop-blur-md sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
            Join the AI revolution
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Sign up for our beta to get access to our collection of models and start building amazing & smart
            products
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/waitlist"
              className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm transition-all ease-in-out hover:scale-105 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
              Join the beta
            </Link>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true">
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#89edfc" />
            <stop offset={1} stopColor="#80b1ff" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
