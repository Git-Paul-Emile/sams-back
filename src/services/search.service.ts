import { prisma } from "../config/database.js";

const RESULTS_PER_TYPE = 5;

export interface GlobalSearchResult {
  type: "client" | "commande" | "facture" | "achat";
  id: string;
  label: string;
  path: string;
}

export const searchService = {
  async global(q: string): Promise<GlobalSearchResult[]> {
    const [clients, commandes, factures, achats] = await Promise.all([
      prisma.client.findMany({
        where: { raison: { contains: q, mode: "insensitive" } },
        take: RESULTS_PER_TYPE,
      }),
      prisma.commande.findMany({
        where: {
          OR: [
            { num: { contains: q, mode: "insensitive" } },
            { client: { raison: { contains: q, mode: "insensitive" } } },
          ],
        },
        include: { client: true },
        take: RESULTS_PER_TYPE,
      }),
      prisma.facture.findMany({
        where: {
          OR: [
            { num: { contains: q, mode: "insensitive" } },
            { client: { raison: { contains: q, mode: "insensitive" } } },
          ],
        },
        include: { client: true },
        take: RESULTS_PER_TYPE,
      }),
      prisma.achat.findMany({
        where: {
          OR: [
            { num: { contains: q, mode: "insensitive" } },
            { fournisseur: { nom: { contains: q, mode: "insensitive" } } },
          ],
        },
        include: { fournisseur: true },
        take: RESULTS_PER_TYPE,
      }),
    ]);

    const results: GlobalSearchResult[] = [
      ...clients.map((c) => ({ type: "client" as const, id: c.id, label: c.raison, path: `/clients?q=${encodeURIComponent(q)}` })),
      ...commandes.map((c) => ({ type: "commande" as const, id: c.id, label: `${c.num} — ${c.client.raison}`, path: `/ventes?q=${encodeURIComponent(q)}` })),
      ...factures.map((f) => ({ type: "facture" as const, id: f.id, label: `${f.num} — ${f.client.raison}`, path: `/facturation?q=${encodeURIComponent(q)}` })),
      ...achats.map((a) => ({ type: "achat" as const, id: a.id, label: `${a.num} — ${a.fournisseur.nom}`, path: `/achats?q=${encodeURIComponent(q)}` })),
    ];

    return results;
  },
};
