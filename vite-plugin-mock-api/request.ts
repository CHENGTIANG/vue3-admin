import { IncomingMessage } from "http";

export declare type MockRequestQuery = {
  [key: string]: string | string[];
};
export class MockRequest extends IncomingMessage {
  query: MockRequestQuery;
}

export default MockRequest.prototype;
