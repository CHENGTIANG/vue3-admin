import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

import mockAPI from "../mock/api";

export function setupProdMockServer() {
  createProdMockServer([...mockAPI]);
}
