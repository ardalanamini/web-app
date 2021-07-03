// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import app from "package.json";
import type { NextApiRequest, NextApiResponse } from "next";

type DataT = {
  name: string,
  version: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataT>,
): void {
  res
    .status(200)
    .json({
      name: app.name,
      version: app.version,
    });
}
