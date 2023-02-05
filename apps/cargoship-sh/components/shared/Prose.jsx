import clsx from "clsx";

export function Prose({ as: Component = "div", className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        "prose prose-invert max-w-none text-slate-400",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-slate-400",
        // links
        "prose-a:font-base prose-a:text-sky-500",
        // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,2px)+1px))_0_0_var(--tw-prose-underline,theme(colors.brand.dark))] hover:prose-a:[--tw-prose-underline-size:6px] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.slate.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)]",
        // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none prose-pre:ring-1 prose-pre:ring-slate-300/10",
        // hr
        "prose-hr:border-slate-800"
      )}
      {...props}
    />
  );
}
