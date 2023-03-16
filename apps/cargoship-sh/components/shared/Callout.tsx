import clsx from "clsx";

import { Icon } from "@/components/shared/Icon";

const styles = {
  note: {
    container: "bg-slate-800/60 ring-1 ring-slate-300/10",
    title: "text-slate-400",
    body: "text-slate-300 [--tw-prose-background:theme(colors.slate.50)] prose-a:text-slate-300 prose-code:text-slate-300 [--tw-prose-underline:theme(colors.slate.400)]",
  },
  warning: {
    container: "bg-slate-800/60 ring-1 ring-slate-300/10",
    title: "text-amber-500",
    body: "text-slate-300 [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-300 [--tw-prose-underline:theme(colors.slate.400)] prose-code:text-slate-300",
  },
};

const icons = {
  note: (props: any) => <Icon icon="lightbulb" {...props} />,
  warning: (props: any) => <Icon icon="warning" color="amber" {...props} />,
};

interface CalloutProps {
  type: "note" | "warning";
  title: string;
  children: React.ReactNode;
}

export function Callout({ type = "note", title, children }: CalloutProps) {
  let IconComponent = icons[type];

  return (
    <div className={clsx("my-8 flex rounded-3xl p-6", styles[type].container)}>
      <IconComponent className="h-8 w-8 flex-none" />
      <div className="ml-4 flex-auto">
        <p className={clsx("font-display m-0 text-xl", styles[type].title)}>{title}</p>
        <div className={clsx("prose mt-2.5", styles[type].body)}>{children}</div>
      </div>
    </div>
  );
}
