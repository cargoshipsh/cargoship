import { Button } from "@cargoship/ui";
import BackgroundGradient from "../home/BackgroundGradient";

export function API_CTA() {
  return (
    <div className="relative">
      <BackgroundGradient rotate={true} />
      <div className="mt-16 rounded-xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur">
        <h4 className="my-0 text-3xl font-semibold text-slate-500 dark:text-slate-50">API</h4>
        <p className="my-4 text-slate-500 dark:text-slate-400">
          If you don&apos;t want to implement the model all by yourself, no worries. Benefit from our easy to
          use API and get started right away!
        </p>
        <Button variant="highlight" href="https://app.cargoship.sh/auth/signup" target="_blank">
          Get Started
        </Button>
      </div>
    </div>
  );
}
