"use client";

import { Copy } from "lucide-react";
import toast from "react-hot-toast";

export function Code({ code }) {
  return (
    <div className="relative inline-flex w-full whitespace-pre-wrap rounded bg-slate-100 p-5 text-slate-800">
      <button
        className="absolute right-2 top-2"
        onClick={() => {
          navigator.clipboard.writeText(code);
          toast.success("URL copied to clipboard");
        }}>
        <Copy className="h-4 w-4 text-slate-500" />
      </button>
      <p className="ml-3">{code}</p>
    </div>
  );
}
