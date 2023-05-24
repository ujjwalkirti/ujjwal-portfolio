// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const blog = req.body; // Access the sent data from req.body
    res.redirect(307, "/blogs/" + blog.id);
  } else {
    res.status(405).end(); // Return 405 Method Not Allowed for other request methods
  }
}
