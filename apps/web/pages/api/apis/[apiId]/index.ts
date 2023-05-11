import { getSessionOrUser } from "@/lib/apiHelper";
import { prisma } from "@cargoship/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // Check Authentication
  const user: any = await getSessionOrUser(req, res);
  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const apiId = req.query.apiId as string;

  // GET
  if (req.method === "GET") {
    const api = await prisma.api.findUnique({
      where: {
        id: apiId,
      },
      select: {
        id: true,
        createdAt: true,
        name: true,
        description: true,
        cost: true,
        instructions: true,
      },
    });

    return res.json(api);
  }

  // Unknown HTTP Method
  else {
    throw new Error(`The HTTP ${req.method} method is not supported by this route.`);
  }
}
