import { Button } from "@cargoship/ui";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function SummarizationEnDemo() {
  const [prediction, setPrediction] = useState(
    "Developing machine learning models can be time consuming and resource intensive. It requires domain knowledge, data processing skills and technical expertise for most developers."
  );
  const [loading, setLoading] = useState(false);

  const makePrediction = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch("https://summarization-en.api.stackocean.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "stackocean4",
      },
      body: JSON.stringify({
        text: e.target.text.value,
      }),
    });
    if (!res.ok) {
      console.log("error");
      setLoading(false);
      return;
    }
    const data = await res.json();
    setPrediction(data.text);
    setLoading(false);
  };

  return (
    <div>
      <div className="relative grid grid-cols-1 gap-3 rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur sm:grid-cols-2">
        <div className="p-5">
          <h3 className="m-0 text-xl">Input</h3>
          <form onSubmit={(e) => makePrediction(e)}>
            <div>
              <div className="mt-1">
                <textarea
                  rows={12}
                  name="text"
                  id="text"
                  className="block w-full rounded-md border-white/10 bg-white/5 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  defaultValue={
                    "When it comes to machine learning, everyone says it's going to make our lives easier - and it's true! But that's not true for most developers out there. ML has the potential to automate and revolutionise the way we work and live. However, developing machine learning models can be time consuming and resource intensive, requiring a significant amount of domain knowledge, data processing skills and technical expertise."
                  }
                />
              </div>
            </div>
            <Button type="submit" className="mt-3">
              Make Prediction
            </Button>
          </form>
        </div>
        <div className="rounded-lg bg-white/5 p-5">
          <h3 className="m-0 inline-flex items-center text-xl">
            <ArrowRightCircleIcon className="mr-1 h-6 w-6" /> Predicted Summary
          </h3>
          <div className="mt-1">
            <p className="m-o text-white">{prediction}</p>
          </div>
        </div>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-white"></div>
            </div>
          </div>
        )}
      </div>
      <p className="text-xs text-slate-500">
        This demo runs on a virtual server with 4 vCPUs and 16 GB Ram (~$20/month)
      </p>
    </div>
  );
}
