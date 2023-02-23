import { Button } from "@cargoship/ui";
import BackgroundGradient from "../home/BackgroundGradient";

export function DiscordCTA() {
  return (
    <div className="relative">
      <BackgroundGradient rotate={true} />
      <div className="mt-16 rounded-xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur">
        <h4 className="my-0 text-3xl font-semibold text-slate-500 dark:text-slate-50">Need help?</h4>
        <p className="my-4 text-slate-500 dark:text-slate-400">
          Join our Discord and ask away. We&apos;re happy to help where we can!
        </p>
        <Button variant="highlight" href="/discord" target="_blank">
          Join Discord
        </Button>
      </div>
    </div>
  );
}
