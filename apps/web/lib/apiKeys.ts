import { WEBAPP_URL } from "@cargoship/lib/constants";
import { headers } from "next/headers";

export async function getApiKeys() {
  const cookie = headers().get("cookie") || "";
  const res = await fetch(`${WEBAPP_URL}/api/users/me/api-keys`, {
    headers: {
      cookie,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
