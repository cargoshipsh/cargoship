import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@cargoship/database";
import { createHash } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import { User, getServerSession } from "next-auth";

export const hashApiKey = (key: string): string => createHash("sha256").update(key).digest("hex");

export const hasOwnership = async (model, session, id) => {
  try {
    const entity = await prisma[model].findUnique({
      where: { id: id },
      include: {
        user: {
          select: { email: true },
        },
      },
    });
    if (entity.user.email === session.user.email) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(`can't verify ownership: ${e}`);
    return false;
  }
};

export const getSessionOrUser = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<User | undefined> => {
  // check for session (browser usage)
  let session = await getServerSession(req, res, authOptions);
  if (session && "user" in session) return session.user;
  // check for api key
  if (req.headers["x-api-key"]) {
    const apiKey = await prisma.apiKey.findUnique({
      where: {
        hashedKey: hashApiKey(req.headers["x-api-key"].toString()),
      },
      include: {
        user: true,
      },
    });
    if (apiKey && apiKey.user) {
      return apiKey.user;
    }
  }
};
