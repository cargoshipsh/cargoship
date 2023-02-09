import { Confetti } from "@cargoship/ui";

export default function ThankYouHeading({ element }: { element: any }) {
  return (
    <div className="text-center">
      <Confetti />
      <h2 className="mt-3 text-xl font-bold text-slate-100 sm:text-2xl ">
        Thank you! We’re onboarding new users <span className="text-brand">regularly.</span>
      </h2>
      <p className="mt-4 text-slate-300">We will be in touch shortly.</p>
    </div>
  );
}
