import { getSessionOrUser } from "@/lib/apiHelper";
import { prisma } from "@cargoship/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // Check Authentication
  const user: any = await getSessionOrUser(req, res);
  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const apiId = req.query.apiId.toString();

  // POST
  if (req.method === "POST") {
    const api = await prisma.api.findUnique({
      where: {
        id: apiId,
      },
    });

    if (!api) {
      return res.status(404).json({ message: "API not found" });
    }

    // forward request
    const response = await fetch(api.endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.CARGOSHIP_PROXY_API_KEY,
      },
      body: JSON.stringify(req.body),
    });
    const responseData = await response.json();
    return res.json(responseData);
  }

  // Unknown HTTP Method
  else {
    throw new Error(`The HTTP ${req.method} method is not supported by this route.`);
  }
}
