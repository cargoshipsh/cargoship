import { ContentWrapper } from "@/components/ContentWrapper";
import { Code } from "@/components/ui/Code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { getApi } from "@/lib/apis";
import { convertDateString } from "@/lib/utils";
import { CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { WEBAPP_URL } from "@cargoship/lib/constants";

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
      <div className="mt-8">
        <Code code={publicApiEndpoint} />
        <Tabs defaultValue="general" className="mt-8 w-[400px]">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="curl">curl</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <h2 className="font-semibold">Request</h2>

            <p className="mt-2 whitespace-pre-wrap rounded bg-slate-100 p-2 text-sm text-slate-500 dark:text-slate-400">
              <Code
                code={`{
    "text": "Hello World!"
}`}
              />
            </p>
            <h2 className="mt-8 font-semibold">Response</h2>
            <Code
              code={`{
    "language": "en"
}`}
            />
          </TabsContent>
          <TabsContent value="curl">
            <Code
              code={`curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"text":"Hello, World!"}' ${publicApiEndpoint}`}
            />
          </TabsContent>
        </Tabs>
      </div>
    </ContentWrapper>
  );
}
