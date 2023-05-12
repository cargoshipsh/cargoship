import { ContentWrapper } from "@/components/ContentWrapper";
import { Code } from "@/components/ui/Code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { getApi } from "@/lib/apis";
import { convertDateString } from "@/lib/utils";
import { CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { WEBAPP_URL } from "@cargoship/lib/constants";
import Button from "@/components/ui/Button";
import clsx from "clsx";

export default async function SingleApiPage({ params }) {
  const api = await getApi(params.apiId);
  const publicApiEndpoint = `${WEBAPP_URL}/api/${api.id}`;
  return (
    <ContentWrapper>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {api.name}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {api.cost} {api.cost === 1 ? "Credit" : "Credits"}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              Released on {convertDateString(api.createdAt.toString())}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 text-slate-200" />
      <p className="my-4 text-base text-slate-800">{api.description}</p>
      <div className="mt-8">
        <h3 className="mb-3 text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
          API Endpoint
        </h3>
        <Code code={publicApiEndpoint} />
        <hr className="my-5 text-slate-200" />
        <h3 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
          Models
        </h3>
        <div>
          <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {api.models.map((model) => (
              <li key={model.name} className="col-span-1 flex rounded-md shadow-sm">
                <div
                  className={clsx(
                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-slate-800 text-sm font-medium text-white"
                  )}>
                  {model.id}
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <p className="font-medium text-gray-900 hover:text-gray-600">{model.name}</p>
                    <p className="text-gray-500">{model.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          You can more about how to switch between different models in our{" "}
          <a href="https://cargoship.sh/docs" target="_blank" className="underline" rel="noreferrer">
            docs
          </a>
          .
        </p>
        <hr className="my-5 text-slate-200" />
        <h3 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
          Usage
        </h3>
        <Tabs defaultValue="general" className="mt-8 w-full">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="curl">curl</TabsTrigger>
            <TabsTrigger value="axios">axios</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <h2 className="font-semibold">Request</h2>
            <Code code={api.instructions?.request} />
            <h2 className="mt-8 font-semibold">Response</h2>
            <Code code={api.instructions?.response} />
          </TabsContent>
          <TabsContent value="curl">
            <Code
              code={`curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: ***Your API Key***' --data '${api.instructions?.request.replace(
                /\n+/g,
                ""
              )}' ${publicApiEndpoint}`}
            />
          </TabsContent>
          <TabsContent value="axios">
            <Code
              code={`axios.post('${publicApiEndpoint}, 
${api.instructions?.request},
{headers: 
    {X-API-Key: ***Your Api Key***}
})
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
}); `}
            />
          </TabsContent>
          <TabsContent value="python">
            <Code
              code={`requests.post("${publicApiEndpoint}", data = ${api.instructions?.request.replace(
                /\n+/g,
                ""
              )}, headers = {"X-API-Key": "***Your Api Key***"})`}
            />
          </TabsContent>
        </Tabs>
        <p className="mt-4 text-sm text-slate-800">
          You need a personal API key to use this API. You can find your API key on the{" "}
          <a href={`/teams/${params.teamId}/settings`} className="underline">
            settings
          </a>{" "}
          page.
        </p>
        <hr className="my-5 text-slate-200" />
        <p className="text-sm text-slate-800">
          You can find more information about this model on the cargoship website:
        </p>
        <Button href={api.instructions.docsUrl} target="_blank" variant="secondary" className="mt-4">
          More Information
        </Button>
      </div>
    </ContentWrapper>
  );
}
