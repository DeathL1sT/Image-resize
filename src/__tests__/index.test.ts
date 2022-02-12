import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("gets the api endpoint root", async () => {
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
  });
});
