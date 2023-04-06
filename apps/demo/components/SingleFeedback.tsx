import { timeSince } from "@/lib/time";
import Avatar from "boring-avatars";

interface Feedback {
  feedback: string;
  sentiment: string;
  createdAt: string;
}

export default function SingleFeedback({ feedback }: { feedback: Feedback }) {
  return (
    <div className=" my-6 rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
      <div className="space-y-2 px-6 pb-5 pt-6">
        <div className="flex items-center justify-between">
          <div className="group flex items-center">
            <Avatar
              size={40}
              name={"demo-avatar"}
              variant="bauhaus"
              colors={["#1e293b", "#64748b", "#f1f5f9"]}
            />
            <h3 className="ml-4 pb-1 font-semibold text-slate-600 group-hover:underline">Demo User</h3>
          </div>
          <div className="flex space-x-4 text-sm">
            <time className="text-slate-500" dateTime={timeSince(feedback.createdAt)}>
              {timeSince(feedback.createdAt)}
            </time>
          </div>
        </div>
      </div>
      <div className="space-y-6 rounded-b-lg bg-white p-6">
        <div>
          <p className="text-sm text-slate-500">Feedback</p>
          <p className="my-1 font-semibold text-slate-700">{feedback.feedback}</p>
          <p className="mt-8 mb-2 text-sm text-slate-500">Sentiment</p>
          {feedback.sentiment === "positive" && (
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
              Positive
            </span>
          )}
          {feedback.sentiment === "neutral" && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">
              Neutral
            </span>
          )}
          {feedback.sentiment === "negative" && (
            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800">
              Negative
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
