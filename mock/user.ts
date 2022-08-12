import Mock from "mockjs";
import { MockRequest } from "../vite-plugin-mock-api/request";
import { MockResponse } from "../vite-plugin-mock-api/response";
export default [
  {
    path: "/api/v1/users",
    method: "GET",
    handler: (req: MockRequest, res: MockResponse) => {
      res.status(200).send(
        Mock.mock({
          total: 100,
          "items|1-10": [
            {
              "id|+1": 1,
              name: "@name",
              description: "@paragraph",
            },
          ],
        })
      );
    },
  },
  {
    path: "/api/v1/users/:id",
    method: "GET",
    handler: (req: MockRequest, res: MockResponse) => {
      res.status(200).json(
        Mock.mock({
          "id|+1": 1,
          name: "@name",
          description: "@paragraph",
        })
      );
    },
  },
  {
    path: "/api/v1/users",
    method: "POST",
    handler: (req: MockRequest, res: MockResponse) => {
      res.status(200).json(
        Mock.mock({
          "id|+1": 1,
          name: "@name",
          description: "@paragraph",
        })
      );
    },
  },
  {
    path: "/api/v1/users/:id",
    method: "PUT",
    handler: (req: MockRequest, res: MockResponse) => {
      res.status(200).json(
        Mock.mock({
          "id|+1": 1,
          name: "@name",
          description: "@paragraph",
        })
      );
    },
  },
  {
    path: "/api/v1/users/:id",
    method: "DELETE",
    handler: (req: MockRequest, res: MockResponse) => {
      res.status(204);
    },
  },
];
