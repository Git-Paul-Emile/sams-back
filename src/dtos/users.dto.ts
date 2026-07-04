import type { User } from "../generated/prisma/client.js";

/**
 * Remappe une ligne Prisma vers la forme plate `administration.types.ts`
 * AdminUserAccount — `passwordHash` n'est JAMAIS exposé.
 */
export function toUserDto(user: User) {
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
