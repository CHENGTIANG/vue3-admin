import { ServerResponse } from "http";
export class MockResponse extends ServerResponse {
  status(code: number) {
    this.statusCode = code;
    return this;
  }
  json(obj: any) {
    this.setHeader("Content-Type", "application/json");
    this.send(JSON.stringify(obj));
    return this;
  }
  send(body: any) {
    if (typeof body === "object") {
      this.json(body);
    } else {
      this.write(body);
    }
    this.end();
    return this;
  }
  redirect(url) {
    this.setHeader("Location", url);
    this.end();
  }
}

export default MockResponse.prototype;
