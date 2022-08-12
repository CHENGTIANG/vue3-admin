import type { VercelRequest, VercelResponse } from "@vercel/node";
import { match } from "path-to-regexp";
import mockItems from "../mock";
import setPrototypeOf from "setprototypeof";
import request, { MockRequest } from "../vite-plugin-mock-api/request";
import response, { MockResponse } from "../vite-plugin-mock-api/response";
import parseUrl from "parseurl";
import { IncomingMessage } from "http";
export default (req: VercelRequest, res: VercelResponse) => {
  if (!req.url) return;
  if (req.url?.startsWith("/api")) {
    let matched = false;
    for (const item of mockItems) {
      const fn = match(item.path);
      const { pathname } = parseUrl(req) as any;
      if (!!fn(pathname)) {
        if (req.method === item.method) {
          setPrototypeOf(req, request);
          setPrototypeOf(res, response);
          item.handler(req as MockRequest, res as MockResponse);
          matched = true;
        }
      }
    }
    if (!matched) {
      res.status(404).send(undefined);
    }
  }
};
