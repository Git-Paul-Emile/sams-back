import { prisma } from "../config/database.js";
import { formatAbbrevName } from "../utils/format.js";

// ---------------------------------------------------------------------------
// Finance — 100% calculé à la lecture (plan §1 "Finance"). Aucune table
// dédiée : tout est un agrégat Prisma (`groupBy`/`aggregate`) sur
// Commande/Facture/Achat/CommandeRentabilite. Quelques regroupements
// (par mois calendaire, par semaine ISO, par zone de client) ne sont pas
// exprimables par un `groupBy` Prisma seul (pas de group-by sur un champ de
// relation, pas de troncature de date sans SQL brut) : dans ces cas on
// s'appuie sur un `groupBy`/`findMany` borné aux lignes strictement
// nécessaires, puis une réduction JS locale — jamais de boucle N+1 vers la
// base.
// ---------------------------------------------------------------------------

/** Modes de règlement considérés "cash" (espèces/mobile money) — le reste
 * (hors "—" = mode non renseigné) est considéré "dépôt bancaire". Règle
 * pragmatique, à ajuster si un référentiel de modes plus précis apparaît. */
const CASH_MODES = new Set(["Wave", "Orange Money", "Espèces"]);

const MONTH_ABBR_FR = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];

function monthAbbrevFr(date: Date): string {
  return MONTH_ABBR_FR[date.getMonth()]!;
}

/** Numéro de semaine ISO-8601 (lundi = premier jour, semaine 1 = celle qui
 * contient le premier jeudi de l'année). */
function isoWeek(date: Date): { isoYear: number; week: number } {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  return { isoYear: d.getUTCFullYear(), week };
}

function isoWeekLabel({ isoYear, week }: { isoYear: number; week: number }): string {
  return `S${String(week).padStart(2, "0")}-${isoYear}`;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

const ONE_MILLION = 1_000_000;

async function computePeriode(start: Date, end: Date) {
  const [commandeSum, factureModeGroups, factureCreance] = await Promise.all([
    prisma.commande.aggregate({ where: { date: { gte: start, lte: end } }, _sum: { montant: true } }),
    prisma.facture.groupBy({
      by: ["mode"],
      where: { date: { gte: start, lte: end } },
      _sum: { montant: true },
    }),
    prisma.facture.aggregate({
      where: { date: { gte: start, lte: end }, statut: { not: "Payée" } },
      _sum: { montant: true, paye: true },
    }),
  ]);

  let cash = 0;
  let depot = 0;
  for (const group of factureModeGroups) {
    const amount = group._sum.montant ?? 0;
    if (group.mode === "—") continue; // mode de règlement non renseigné
    if (CASH_MODES.has(group.mode)) cash += amount;
    else depot += amount;
  }

  const creance = (factureCreance._sum.montant ?? 0) - (factureCreance._sum.paye ?? 0);

  return { ca: commandeSum._sum.montant ?? 0, cash, depot, creance };
}

export const financeService = {
  async getVentesPeriodes() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [jour, semaine, mois] = await Promise.all([
      computePeriode(startOfDay, now),
      computePeriode(sevenDaysAgo, now),
      computePeriode(thirtyDaysAgo, now),
    ]);

    return { jour, semaine, mois };
  },

  async getVentesCommercial() {
    const commandeGroups = await prisma.commande.groupBy({
      by: ["commercialId"],
      _sum: { montant: true },
      _count: { _all: true },
    });
    const commercialIds = commandeGroups.map((g) => g.commercialId);
    if (commercialIds.length === 0) return [];

    const [commerciaux, rentabiliteRows] = await Promise.all([
      prisma.commercial.findMany({
        where: { id: { in: commercialIds } },
        select: { id: true, nom: true, prenom: true, zone: true },
      }),
      prisma.commandeRentabilite.findMany({
        where: { commande: { commercialId: { in: commercialIds } } },
        select: { marge: true, commande: { select: { commercialId: true } } },
      }),
    ]);

    const margeByCommercialId = new Map<string, number>();
    for (const row of rentabiliteRows) {
      const id = row.commande.commercialId;
      margeByCommercialId.set(id, (margeByCommercialId.get(id) ?? 0) + row.marge);
    }
    const commercialById = new Map(commerciaux.map((c) => [c.id, c]));

    return commandeGroups.map((group) => {
      const commercial = commercialById.get(group.commercialId);
      return {
        id: group.commercialId,
        commercial: commercial ? formatAbbrevName(commercial.prenom, commercial.nom) : "Inconnu",
        zone: commercial?.zone ?? "",
        ca: group._sum.montant ?? 0,
        nbCmd: group._count._all,
        marge: margeByCommercialId.get(group.commercialId) ?? 0,
      };
    });
  },

  async getVentesChart() {
    const commandeGroups = await prisma.commande.groupBy({ by: ["clientId"], _sum: { montant: true } });
    const clientIds = commandeGroups.map((g) => g.clientId);
    if (clientIds.length === 0) return [];

    const clients = await prisma.client.findMany({ where: { id: { in: clientIds } }, select: { id: true, zone: true } });
    const zoneByClientId = new Map(clients.map((c) => [c.id, c.zone ?? "Non défini"]));

    const totalByZone = new Map<string, number>();
    for (const group of commandeGroups) {
      const zone = zoneByClientId.get(group.clientId) ?? "Non défini";
      totalByZone.set(zone, (totalByZone.get(zone) ?? 0) + (group._sum.montant ?? 0));
    }

    return Array.from(totalByZone.entries()).map(([zone, total]) => ({
      id: zone,
      zone,
      ventes: round1(total / ONE_MILLION),
    }));
  },

  async getVentesSegment() {
    const rows = await prisma.venteSegment.findMany({ orderBy: { segment: "asc" } });
    return rows.map((row) => ({
      id: row.id,
      segment: row.segment,
      ca: row.ca,
      pct: row.pct,
      couleur: row.couleur,
    }));
  },

  async getEvolutionMarge() {
    const commandes = await prisma.commande.findMany({
      select: { date: true, montant: true, rentabilite: { select: { coutProduits: true, marge: true } } },
    });

    const totals = new Map<string, { sortKey: number; mois: string; ca: number; couts: number; marge: number }>();
    for (const commande of commandes) {
      const year = commande.date.getFullYear();
      const month = commande.date.getMonth();
      const key = `${year}-${month}`;
      const entry = totals.get(key) ?? {
        sortKey: year * 12 + month,
        mois: monthAbbrevFr(commande.date),
        ca: 0,
        couts: 0,
        marge: 0,
      };
      entry.ca += commande.montant;
      entry.couts += commande.rentabilite?.coutProduits ?? 0;
      entry.marge += commande.rentabilite?.marge ?? 0;
      totals.set(key, entry);
    }

    return Array.from(totals.entries())
      .sort(([, a], [, b]) => a.sortKey - b.sortKey)
      .map(([key, entry]) => ({
        id: key,
        mois: entry.mois,
        ca: round1(entry.ca / ONE_MILLION),
        couts: round1(entry.couts / ONE_MILLION),
        marge: round1(entry.marge / ONE_MILLION),
      }));
  },

  async getCashChart() {
    const [factures, achats] = await Promise.all([
      prisma.facture.findMany({
        where: { dateReglEff: { not: null } },
        select: { dateReglEff: true, montant: true },
      }),
      prisma.achat.findMany({ select: { date: true, montant: true } }),
    ]);

    const totals = new Map<string, { sortKey: number; semaine: string; entrees: number; sorties: number }>();

    const getEntry = (date: Date) => {
      const week = isoWeek(date);
      const key = `${week.isoYear}-${week.week}`;
      let entry = totals.get(key);
      if (!entry) {
        entry = { sortKey: week.isoYear * 53 + week.week, semaine: isoWeekLabel(week), entrees: 0, sorties: 0 };
        totals.set(key, entry);
      }
      return entry;
    };

    for (const facture of factures) {
      if (!facture.dateReglEff) continue;
      getEntry(facture.dateReglEff).entrees += facture.montant;
    }
    for (const achat of achats) {
      getEntry(achat.date).sorties += achat.montant;
    }

    return Array.from(totals.entries())
      .sort(([, a], [, b]) => a.sortKey - b.sortKey)
      .map(([key, entry]) => ({
        id: key,
        semaine: entry.semaine,
        entrees: round1(entry.entrees / ONE_MILLION),
        sorties: round1(entry.sorties / ONE_MILLION),
      }));
  },
};
