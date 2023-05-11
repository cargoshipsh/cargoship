import { getSessionOrUser } from "@/lib/apiHelper";
import { prisma } from "@cargoship/database";
import type { NextApiRequest, NextApiResponse } from "next";
import { capturePosthogEvent } from "@cargoship/lib/posthogServer";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const apiId = req.query.apiId as string;

  // CORS
  if (req.method === "OPTIONS") {
    res.status(200).end();
  }

  // POST
  else if (req.method === "POST") {
    // Check Authentication
    const user: any = await getSessionOrUser(req, res);
    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const api = await prisma.api.findUnique({
      where: {
        id: apiId,
      },
    });

    if (!api) {
      return res.status(404).json({ message: "API not found" });
    }

    let endpointUrl;

    const models = JSON.parse(JSON.stringify(api.models));

    if ("model" in req.query) {
      const modelId = req.query.model as string;
      for (const model of models) {
        if (model.id === modelId) {
          endpointUrl = model.endpointUrl;
          break;
        }
      }
      if (!endpointUrl) {
        return res.status(404).json({ message: "Model not found" });
      }
    } else {
      // find default model
      for (const model of models) {
        if (model.default) {
          endpointUrl = model.endpointUrl;
          break;
        }
      }

      if (!endpointUrl) {
        return res.status(404).json({ message: "Default model not found" });
      }
    }

    // forward request
    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.PROXY_API_KEY || "",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      return res.status(response.status).json({ message: response.statusText });
    }

    // get teamId from environment
    const enhancedUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        teams: {
          select: {
            teamId: true,
          },
        },
      },
    });

    const teamId = enhancedUser?.teams[0].teamId;

    await capturePosthogEvent(user.id, "api called", teamId, {
      apiId,
    });

    const responseData = await response.json();
    return res.json(responseData);
  }

  // Unknown HTTP Method
  else {
    throw new Error(`The HTTP ${req.method} method is not supported by this route.`);
  }
}
