import "dotenv/config";
import { describe, it, expect, vi, beforeEach } from "vitest";
import bcrypt from "bcrypt";
const findUserByEmail = vi.fn();
const findModulesForRole = vi.fn();
const touchLastLogin = vi.fn();
const createRefreshToken = vi.fn();
vi.mock("../repositories/auth.repository.js", () => ({
    authRepository: {
        findUserByEmail: (...args) => findUserByEmail(...args),
        findModulesForRole: (...args) => findModulesForRole(...args),
        touchLastLogin: (...args) => touchLastLogin(...args),
        createRefreshToken: (...args) => createRefreshToken(...args),
    },
}));
const { authService } = await import("./auth.service.js");
describe("authService.login", () => {
    beforeEach(() => {
        findUserByEmail.mockReset();
        findModulesForRole.mockReset();
        touchLastLogin.mockReset();
        createRefreshToken.mockReset().mockResolvedValue(undefined);
        findModulesForRole.mockResolvedValue({ modules: ["*"] });
    });
    it("rejette un email inconnu", async () => {
        findUserByEmail.mockResolvedValue(null);
        await expect(authService.login("inconnu@sams.sn", "peu importe")).rejects.toThrow("Identifiant ou mot de passe incorrect");
    });
    it("rejette un mot de passe incorrect", async () => {
        const passwordHash = await bcrypt.hash("BonMotDePasse123!", 4);
        findUserByEmail.mockResolvedValue({
            id: "u1",
            nom: "Test User",
            email: "test@sams.sn",
            role: "Administrateur",
            statut: "Actif",
            passwordHash,
        });
        await expect(authService.login("test@sams.sn", "MauvaisMotDePasse")).rejects.toThrow("Identifiant ou mot de passe incorrect");
    });
    it("rejette un compte désactivé même avec le bon mot de passe", async () => {
        const passwordHash = await bcrypt.hash("BonMotDePasse123!", 4);
        findUserByEmail.mockResolvedValue({
            id: "u1",
            nom: "Test User",
            email: "test@sams.sn",
            role: "Administrateur",
            statut: "Inactif",
            passwordHash,
        });
        await expect(authService.login("test@sams.sn", "BonMotDePasse123!")).rejects.toThrow("Compte désactivé");
    });
    it("retourne un accessToken et le payload utilisateur pour des identifiants valides", async () => {
        const passwordHash = await bcrypt.hash("BonMotDePasse123!", 4);
        findUserByEmail.mockResolvedValue({
            id: "u1",
            nom: "Aminata Ndoye",
            email: "admin@samsflux.sn",
            role: "Administrateur",
            statut: "Actif",
            passwordHash,
        });
        const result = await authService.login("admin@samsflux.sn", "BonMotDePasse123!");
        expect(result.accessToken).toEqual(expect.any(String));
        expect(result.refreshToken).toEqual(expect.any(String));
        expect(result.user).toMatchObject({
            id: "u1",
            email: "admin@samsflux.sn",
            role: "Administrateur",
            modules: ["*"],
        });
        expect(touchLastLogin).toHaveBeenCalledWith("u1");
    });
});
//# sourceMappingURL=auth.service.test.js.map