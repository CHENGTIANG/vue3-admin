import Mock from "mockjs";
import { MockRequest } from "../vite-plugin-mock-api/request";
import { MockResponse } from "../vite-plugin-mock-api/response";
const { items = [] } = Mock.mock({
  "items|20-100": [
    {
      "id|+1": 1,
      name: "@name",
      username: "@name",
      email: "@email",
    },
  ],
});
export default [
  {
    path: "/api/v1/users",
    method: "GET",
    handler: (req: MockRequest, res: MockResponse) => {
      const { query } = req;
      const page = parseInt(query.page as string) || 0;
      const size = parseInt(query.size as string) || 10;
      res.status(200).send({
        page,
        size,
        total: items.length,
        items: items.slice(page * size, (page + 1) * size),
      });
    },
  },
  {
    path: "/api/v1/users/:id",
    method: "GET",
    handler: (req: MockRequest, res: MockResponse) => {
      const { query } = req;
      res.status(200).json(items.find((ele) => ele.id === query.id));
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
