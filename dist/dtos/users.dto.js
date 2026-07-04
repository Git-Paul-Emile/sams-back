/**
 * Remappe une ligne Prisma vers la forme plate `administration.types.ts`
 * AdminUserAccount — `passwordHash` n'est JAMAIS exposé.
 */
export function toUserDto(user) {
    return {
        id: user.id,
        nom: user.nom,
        email: user.email,
        tel: user.tel,
        role: user.role,
        connexion: user.lastLoginAt ? user.lastLoginAt.toISOString() : "Jamais connecté",
        statut: user.statut,
    };
}
//# sourceMappingURL=users.dto.js.map