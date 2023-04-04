import { getSessionOrUser } from "@/lib/apiHelper";
import { prisma } from "@cargoship/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // Check Authentication
  const session = await getSessionOrUser(req, res);
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  // GET /api/teams
  // Get all of my teams
  if (req.method === "GET") {
    console.log(session.email);
    const memberships = await prisma.membership.findMany({
      where: {
        user: { email: session.email },
      },
      include: {
        team: true,
      },
    });
    console.log(memberships);
    return res.json(memberships);
  }

  // Unknown HTTP Method
  else {
    throw new Error(`The HTTP ${req.method} method is not supported by this route.`);
  }
}
