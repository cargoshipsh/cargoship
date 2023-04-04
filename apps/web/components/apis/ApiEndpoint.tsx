import { Code } from "@/components/ui/Code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function ApiEndpoint({ api }) {
  const publicApiEndpoint = `${process.env.NEXT_PUBLIC_CARGOSHIP_URL}/api/${api.id}`;
  return (
    <div>
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
  );
}
