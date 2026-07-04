import type { User } from "../generated/prisma/client.js";
/**
 * Remappe une ligne Prisma vers la forme plate `administration.types.ts`
 * AdminUserAccount — `passwordHash` n'est JAMAIS exposé.
 */
export declare function toUserDto(user: User): {
    id: string;
    nom: string;
    email: string;
    tel: string | null;
    role: import("../generated/prisma/enums.js").Role;
    connexion: string;
    statut: string;
};
//# sourceMappingURL=users.dto.d.ts.map