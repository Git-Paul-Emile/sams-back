import { prisma } from "../config/database.js";
export const authRepository = {
    findUserByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    },
    findUserById(id) {
        return prisma.user.findUnique({ where: { id } });
    },
    findModulesForRole(role) {
        return prisma.rolePermission.findUnique({ where: { role: role } });
    },
    touchLastLogin(userId) {
        return prisma.user.update({ where: { id: userId }, data: { lastLoginAt: new Date() } });
    },
    createRefreshToken(data) {
        return prisma.refreshToken.create({ data });
    },
    findActiveRefreshTokenByHash(tokenHash) {
        return prisma.refreshToken.findUnique({ where: { tokenHash } });
    },
    revokeRefreshToken(id) {
        return prisma.refreshToken.update({ where: { id }, data: { revokedAt: new Date() } });
    },
};
//# sourceMappingURL=auth.repository.js.map