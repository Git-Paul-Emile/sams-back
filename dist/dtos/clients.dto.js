import { formatAbbrevName } from "../utils/format.js";
/**
 * Remappe une ligne Prisma (avec relation) vers la forme plate que le
 * frontend consomme déjà (`commercial` en string abrégée, agrégats fusionnés)
 * — voir plan §0.3.
 */
export function toClientDto(client, aggregates) {
    return {
        id: client.id,
        code: client.code,
        raison: client.raison,
        contact: client.contact,
        tel: client.tel,
        email: client.email,
        adresse: client.adresse,
        ville: client.ville,
        pays: client.pays,
        zone: client.zone,
        commercial: client.commercial ? formatAbbrevName(client.commercial.prenom, client.commercial.nom) : null,
        commercialId: client.commercialId,
        conditions: client.conditions,
        plafond: client.plafond,
        encours: aggregates.encours,
        caYtd: aggregates.caYtd,
        statut: client.statut,
        nbCmd: aggregates.nbCmd,
    };
}
//# sourceMappingURL=clients.dto.js.map