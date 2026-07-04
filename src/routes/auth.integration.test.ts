import "dotenv/config";
import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import { connectToDatabase } from "../config/database.js";
import app from "../config/app.js";

// Ce test d'intégration s'appuie sur le compte admin créé par prisma/seeds/users.seed.ts
// (admin@samsflux.sn / ChangeMoi123!) sur la base de dev configurée dans .env.
const SEEDED_EMAIL = "admin@samsflux.sn";
const SEEDED_PASSWORD = "ChangeMoi123!";

beforeAll(async () => {
  await connectToDatabase();
});

describe("POST /api/v1/auth/login", () => {
  it("retourne un accessToken pour des identifiants valides", async () => {
    const res = await request(app)
      .post("/api/v1/auth/login")
      .send({ email: SEEDED_EMAIL, password: SEEDED_PASSWORD });

    expect(res.status).toBe(200);
    expect(res.body.data.accessToken).toEqual(expect.any(String));
    expect(res.body.data.user.email).toBe(SEEDED_EMAIL);
  });

  it("rejette un mot de passe incorrect avec 401", async () => {
    const res = await request(app)
      .post("/api/v1/auth/login")
      .send({ email: SEEDED_EMAIL, password: "MauvaisMotDePasse" });

    expect(res.status).toBe(401);
  });
});

describe("GET /api/v1/auth/me", () => {
  it("rejette une requête sans token avec 401", async () => {
    const res = await request(app).get("/api/v1/auth/me");
    expect(res.status).toBe(401);
  });

  it("retourne le profil utilisateur avec un token valide", async () => {
    const login = await request(app)
      .post("/api/v1/auth/login")
      .send({ email: SEEDED_EMAIL, password: SEEDED_PASSWORD });
    const token = login.body.data.accessToken;

    const res = await request(app).get("/api/v1/auth/me").set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.data.email).toBe(SEEDED_EMAIL);
  });
});
