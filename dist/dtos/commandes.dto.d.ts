import type { Client, Commande, CommandeTimeline, Commercial, User } from "../generated/prisma/client.js";
type TimelineWithUser = CommandeTimeline & {
    user: User | null;
};
type CommandeRow = Commande & {
    client: Client;
    commercial: Commercial;
    timeline: TimelineWithUser[];
};
/**
 * Forme plate attendue par le frontend (`ventes.types.ts` `Commande`) —
 * `client`/`commercial` en libellés, `timeline` embarquée (ordonnée par date
 * asc), y compris en liste : le frontend lit `.timeline` directement sur les
 * lignes de la liste (`VentesOverview.tsx`), pas de fetch détail séparé.
 */
export declare function toCommandeDto(commande: CommandeRow): {
    id: string;
    num: string;
    client: string;
    date: string;
    montant: number;
    commercial: string;
    statutActuel: string;
    timeline: {
        etat: string;
        date: string;
        user: string | null;
        commentaire: string;
    }[];
};
export {};
//# sourceMappingURL=commandes.dto.d.ts.map