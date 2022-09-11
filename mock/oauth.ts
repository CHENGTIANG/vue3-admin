import axios from "axios";
import tunnel from "tunnel";
const tunnelProxy = tunnel.httpsOverHttp({
  proxy: {
    host: "127.0.0.1",
    port: "1087",
  },
});

import { MockRequest } from "../vite-plugin-mock-api/request";
import { MockResponse } from "../vite-plugin-mock-api/response";

export default [
  {
    path: "/api/v1/oauth/login",
    method: "GET",
    handler: async (req: MockRequest, res: MockResponse) => {
      res
        .status(302)
        .redirect(
          `https://github.com/login/oauth/authorize?client_id=${
            process.env.CLIENT_ID
          }&redirect_uri=${encodeURIComponent(
            process.env.REDIRECT_URI
          )}&response_type=code&scope=user&state=test`
        );
    },
  },
  {
    path: "/api/v1/oauth/access_token",
    method: "POST",
    handler: async (req: MockRequest, res: MockResponse) => {
      const { code } = req.query;
      try {
        const { data } = await axios.post(
          `https://github.com/login/oauth/access_token`,
          {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code,
            redirect_uri: `http://localhost:3000`,
          },
          {
            proxy: false,
            httpsAgent:
              process.env.NODE_ENV === "development" ? tunnelProxy : null,
            headers: {
              Accept: "application/json",
            },
          }
        );
        res.status(200).json(data);
      } catch (error) {
        res.status(500).send({
          message: error.message,
        });
      }
    },
  },
];
