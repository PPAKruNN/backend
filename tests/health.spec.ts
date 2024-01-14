import supertest from "supertest";
import app from "../src/app";
import prisma from "@/database/database";
import httpStatus from "http-status";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany({});
});

describe("GET /health", () => {
  it("should respond 200", async () => {
    const res = await api.get("/health");
    expect(res.status).toBe(httpStatus.OK);
  });
});
