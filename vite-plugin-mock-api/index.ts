import { Plugin } from "vite";
import { match } from "path-to-regexp";
import mockItems from "../mock";
import setPrototypeOf from "setprototypeof";
import request, { MockRequest, MockRequestQuery } from "./request";
import response, { MockResponse } from "./response";
import parseUrl from "parseurl";
import qs from "qs";
export default function mockAPIPlugin(): Plugin {
  return {
    name: "mock-api",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith("/api")) {
          let matched = false;
          for (const item of mockItems) {
            const fn = match(item.path);
            const { pathname, query } = parseUrl(req);
            if (!!fn(pathname)) {
              if (req.method === item.method) {
                setPrototypeOf(req, request);
                (req as MockRequest).query = qs.parse(
                  query as string
                ) as MockRequestQuery;
                setPrototypeOf(res, response);
                item.handler(req as MockRequest, res as MockResponse);
                matched = true;
              }
            }
          }
          if (!matched) {
            next();
          }
        } else {
          next();
        }
      });
    },
  };
}
