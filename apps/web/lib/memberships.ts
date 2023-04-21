import { WEBAPP_URL } from "@cargoship/lib/constants";
import { headers } from "next/headers";

export async function getMemberships() {
  const cookie = headers().get("cookie") || "";
  const res = await fetch(`${WEBAPP_URL}/api/memberships`, {
    headers: {
      cookie,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
