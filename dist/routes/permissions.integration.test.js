import "dotenv/config";
import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import { connectToDatabase } from "../config/database.js";
import app from "../config/app.js";
// Régression : le seed RolePermission utilisait des noms de modules en minuscules
// ("stock", "finance"...) qui ne correspondaient pas aux noms attendus par
// requirePermission() dans les routes ("Stocks", "Finance"...), bloquant tous les
// rôles non-Administrateur. Ces tests couvrent le scoping réel par rôle.
async function loginAs(email, password = "ChangeMoi123!") {
    const res = await request(app).post("/api/v1/auth/login").send({ email, password });
    return res.body.data.accessToken;
}
beforeAll(async () => {
    await connectToDatabase();
});
describe("Scoping des permissions par rôle", () => {
    it("le rôle Stock accède aux endpoints du module Stocks", async () => {
        const token = await loginAs("stock@samsflux.sn");
        const res = await request(app)
            .get("/api/v1/stock-items")
            .query({ type: "MATIERE" })
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
    });
    it("le rôle Stock n'accède pas aux endpoints du module Finance", async () => {
        const token = await loginAs("stock@samsflux.sn");
        const res = await request(app)
            .get("/api/v1/finance/evolution-marge")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(403);
    });
    it("le rôle Administrateur (wildcard '*') accède à tous les modules protégés", async () => {
        const token = await loginAs("admin@samsflux.sn");
        const [stockRes, financeRes] = await Promise.all([
            request(app).get("/api/v1/stock-items").query({ type: "MATIERE" }).set("Authorization", `Bearer ${token}`),
            request(app).get("/api/v1/finance/evolution-marge").set("Authorization", `Bearer ${token}`),
        ]);
        expect(stockRes.status).toBe(200);
        expect(financeRes.status).toBe(200);
    });
});
//# sourceMappingURL=permissions.integration.test.js.map