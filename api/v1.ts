import Mock from "mockjs";
import type { VercelRequest, VercelResponse } from "@vercel/node";
export default (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send(
    Mock.mock({
      total: 100,
      url: request.url,
      "items|1-10": [
        {
          "id|+1": 1,
          name: "@name",
          description: "@paragraph",
        },
      ],
    })
  );
};
