/** Reforme la forme `Incident` du frontend (`production.types.ts`) — voir plan §0.3. */
export function toIncidentDto(incident) {
    return {
        id: incident.id,
        of: incident.prodOrder.num,
        categorie: incident.categorie,
        description: incident.description,
        date: incident.date.toISOString(),
        statut: incident.statut,
        gravite: incident.gravite,
        operateur: incident.operateur ? `${incident.operateur.prenom} ${incident.operateur.nom}` : null,
    };
}
//# sourceMappingURL=incidents.dto.js.map