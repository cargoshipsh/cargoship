import { WEBAPP_URL } from "@cargoship/lib/constants";
import { headers } from "next/headers";

export async function getApis() {
  const cookie = headers().get("cookie") || "";
  const res = await fetch(`${WEBAPP_URL}/api/apis`, {
    headers: {
      cookie,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getApi(apiId: string) {
  const cookie = headers().get("cookie") || "";
  const res = await fetch(`${WEBAPP_URL}/api/apis/${apiId}`, {
    headers: {
      cookie,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const api = await res.json();

  // delete endpoint url from models from every api
  api.models.forEach((model) => {
    delete model.endpointUrl;
  });

  return api;
}
