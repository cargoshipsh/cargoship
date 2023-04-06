// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.CARGOSHIP_API_KEY) {
    res.status(500).json({ message: "No API key set" });
  }

  if (req.method === "POST") {
    const { text } = req.body;
    // fetch cargoship endpoint with API key from env
    const response = await fetch(`${process.env.CARGOSHIP_API_HOST}/api/language-detection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.CARGOSHIP_API_KEY || "",
      },
      body: JSON.stringify({ text }),
    });
    if (!response.ok) {
      return res.status(500).json({ message: "Something went wrong" });
    }
    const responseData = await response.json();
    return res.status(200).json(responseData);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
