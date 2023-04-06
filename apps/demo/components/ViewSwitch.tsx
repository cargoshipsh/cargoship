import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ViewSwitch() {
  const router = useRouter();
  const tabs = useMemo(
    () => [
      { name: "App", href: "/app", current: router.pathname.endsWith("/app") },
      { name: "Admin", href: "/admin", current: router.pathname.endsWith("/admin") },
    ],
    [router]
  );
  return (
    <div className="z-50 flex justify-center bg-slate-300 py-2">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current)?.name}>
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? "bg-slate-200 text-slate-800" : "text-slate-600 hover:text-slate-800",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={tab.current ? "page" : undefined}>
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
