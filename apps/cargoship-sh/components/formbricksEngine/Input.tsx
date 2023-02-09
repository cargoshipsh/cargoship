import clsx from "clsx";
import { EngineButtons } from "./EngineButtons";

interface TextareaProps {
  element: any;
  field: any;
  register: any;
  disabled: boolean;
  allowSkip: boolean;
  skipAction: () => void;
  onSubmit: () => void;
  autoSubmit: boolean;
  loading: boolean;
}

export default function Input({
  element,
  field,
  register,
  disabled,
  onSubmit,
  skipAction,
  allowSkip,
  autoSubmit,
  loading,
}: TextareaProps) {
  return (
    <div className={clsx(loading && "formbricks-pulse-animation")}>
      <div className="flex flex-col justify-center">
        <label
          htmlFor={element.id}
          className="pb-6 text-center text-lg font-bold text-slate-300 sm:text-xl md:text-2xl">
          {element.label}
        </label>
        <input
          type={element.frontend?.type || "text"}
          onBlur=""
          className="focus:border-brand focus:ring-brand mx-auto mt-4 block w-full max-w-xl rounded-md border-gray-300 bg-slate-700 text-slate-200 shadow-sm placeholder:text-slate-400 focus:bg-slate-700 active:bg-slate-700 sm:text-sm"
          placeholder={element.frontend?.placeholder || ""}
          required={!!element.frontend?.required}
          {...register(element.name!)}
        />
      </div>
      <EngineButtons allowSkip={allowSkip} skipAction={skipAction} autoSubmit={autoSubmit} />
    </div>
  );
}
