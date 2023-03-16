import Link from "next/link";

export default function GithubInfo() {
  return (
    <Link
      href="https://github.com/cargoshipsh/cargoship"
      className="flex h-12 cursor-pointer items-center justify-center bg-sky-100 text-sm font-medium text-slate-900">
      ⭐️ Cargoship is open source on Github. Help us by giving us a star! ⭐️
    </Link>
  );
}
