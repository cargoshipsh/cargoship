import { useApi } from "@/lib/apis/apis";
import { useRouter } from "next/router";
import LoadingSpinner from "../LoadingSpinner";
import ApiHeader from "./ApiHeader";
import { ApiEndpoint } from "./ApiEndpoint";

export default function ApiDefaultPage({}) {
  const router = useRouter();
  const { teamId, apiId } = router.query;
  const { api, isLoadingApi, isErrorApi } = useApi(apiId.toString());

  if (isLoadingApi) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isErrorApi) {
    return <div>Error loading ressources. Maybe you don&lsquo;t have enough access rights</div>;
  }

  return (
    <div>
      <ApiHeader api={api} />
      <div className="mt-8">
        <ApiEndpoint api={api} />
      </div>
    </div>
  );
}
