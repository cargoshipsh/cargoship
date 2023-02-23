import { Button } from "@cargoship/ui";
import BackgroundGradient from "../home/BackgroundGradient";

export function UnderConstructionCTA() {
  return (
    <div className="relative">
      <BackgroundGradient rotate={true} />
      <div className="mt-16 rounded-xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-brand-dark dark:text-brand-light mb-3 text-sm font-semibold uppercase">
          We are working on hard on this
        </p>
        <h2 className="my-0 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-3xl">
          Models will be launched soon
        </h2>
        <p className="my-3 text-slate-500 dark:text-slate-300 sm:mb-6 sm:mt-4 md:text-sm">
          We will be launching these models in the coming weeks. Stay tuned!
          <br />
          Want to be the first to know? Join our Discord!
        </p>
        <Button variant="highlight" className="ml-4" href="/discord" target="_blank">
          Join Discord
        </Button>
      </div>
    </div>
  );
}
