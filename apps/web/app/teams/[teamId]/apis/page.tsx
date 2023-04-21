import { Button } from "@/components/ui/Button";
import { ContentWrapper } from "@/components/ContentWrapper";
import { getApis } from "@/lib/apis";
import Avatar from "boring-avatars";

export default async function ApiOverviewPage({ params }) {
  const apis = await getApis();
  return (
    <ContentWrapper>
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
        {apis.map((api) => (
          <div key={api.id} className="rounded-2xl bg-slate-200 px-8 py-5">
            <div className="flex justify-center">
              <Avatar size={100} name={api.id} variant="bauhaus" colors={["#1e293b", "#64748b", "#f1f5f9"]} />
            </div>
            {/*           <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" /> */}
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-slate-800">
              {api.name}
            </h3>
            <p className="text-sm leading-6 text-slate-500">{api.description}</p>
            <Button className="mt-3 w-full justify-center" href={`/teams/${params.teamId}/apis/${api.id}`}>
              View
            </Button>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
}
