import type { Incident, Operateur, ProdOrder } from "../generated/prisma/client.js";
type IncidentWithRelations = Incident & {
    prodOrder: ProdOrder;
    operateur: Operateur | null;
};
/** Reforme la forme `Incident` du frontend (`production.types.ts`) — voir plan §0.3. */
export declare function toIncidentDto(incident: IncidentWithRelations): {
    id: string;
    of: string;
    categorie: string;
    description: string;
    date: string;
    statut: string;
    gravite: string;
    operateur: string | null;
};
export {};
//# sourceMappingURL=incidents.dto.d.ts.map