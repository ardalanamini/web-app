// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import app from "package.json";

type DataT = {
  name: string,
  version: string,
}

function handler(
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

export default withSentry(handler);
