import { Button } from "@cargoship/ui";
import BackgroundGradient from "../home/BackgroundGradient";

export function TryItCTA() {
  return (
    <div className="relative">
      <BackgroundGradient rotate={true} />
      <div className="mt-16 rounded-xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-brand-dark dark:text-brand-light mb-3 text-sm font-semibold uppercase">
          What are you waiting for?
        </p>
        <h2 className="my-0 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-3xl">
          Try it right now!
        </h2>
        <p className="my-3 text-slate-500 dark:text-slate-300 sm:mb-6 sm:mt-4 md:text-sm">
          Dive right into our model collections and explore what you can do with Cargoship.
          <br />
          Questions? Join our Discord, we’re happy to help!
        </p>
        <Button variant="highlight" href="/collections">
          Check out the models
        </Button>
        <Button variant="secondary" className="ml-4" href="/discord" target="_blank">
          Join Discord
        </Button>
      </div>
    </div>
  );
}
