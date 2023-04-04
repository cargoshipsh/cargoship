"use client";

import { useApis } from "@/lib/apis/apis";
import Avatar from "boring-avatars";
import LoadingSpinner from "components/LoadingSpinner";
import { useRouter } from "next/router";
import { Button } from "../ui/Button";

export default function ApisPage({}) {
  const router = useRouter();
  const { teamId } = router.query;
  const { apis, isLoadingApis, isErrorApis } = useApis();

  if (isLoadingApis) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isErrorApis) {
    return <div>Error loading ressources. Maybe you don&lsquo;t have enough access rights</div>;
  }
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
      {apis.map((api) => (
        <div key={api.id} className="rounded-2xl bg-slate-200 px-8 py-5">
          <div className="flex justify-center">
            <Avatar size={100} name={api.id} variant="bauhaus" colors={["#1e293b", "#64748b", "#f1f5f9"]} />
          </div>
          {/*           <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" /> */}
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-slate-800">{api.name}</h3>
          <p className="text-sm leading-6 text-slate-500">{api.description}</p>
          <Button className="mt-3 w-full" onClick={() => router.push(`/teams/${teamId}/apis/${api.id}`)}>
            View
          </Button>
        </div>
      ))}
    </div>
  );
}
