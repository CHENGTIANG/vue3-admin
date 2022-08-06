import Mock from "mockjs";
import { MockMethod } from "vite-plugin-mock";

const mockMethods: MockMethod[] = [
  {
    url: "/crud",
    method: "get",
    response: ({ query }) => {
      return Mock.mock({
        "total": 100,
        "items|1-10": [
          {
            "id|+1": 1,
            "name": "@name",
            "description": "@paragraph"
          },
        ],
      });
    },
  },
];
export default mockMethods;
