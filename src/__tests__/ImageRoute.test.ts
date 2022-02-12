import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("GET /images", () => {
  it("respondes with 200 on sucsses", async () => {
    const response = await request.get(
      "/images?filename=fjord&width=200&height=200"
    );
    expect(response.statusCode).toBe(200);
  });

  it("response with 400 on missing filename", async () => {
    const response = await request.get("/images?&width=200&height=200");
    expect(response.statusCode).toBe(400);
  });

  it("response with 400 on missing width", async () => {
    const response = await request.get("/images?filename=fjord&height=200");
    expect(response.statusCode).toBe(400);
  });

  it("response with 400 on missing height", async () => {
    const response = await request.get("/images?filename=fjord&width=200");
    expect(response.statusCode).toBe(400);
  });

  it("response with 400 on bad width", async () => {
    const response = await request.get(
      "/images?filename=fjord&width=XXX&height=200"
    );
    expect(response.statusCode).toBe(400);
  });

  it("response with 400 on bad height", async () => {
    const response = await request.get(
      "/images?filename=fjord&width=200&height=XXX"
    );
    expect(response.statusCode).toBe(400);
  });

  it("respondes with 404 on file not found", async () => {
    const response = await request.get(
      "/images?filename=notfound&width=200&height=200"
    );
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Input file is missing");
  });
});
