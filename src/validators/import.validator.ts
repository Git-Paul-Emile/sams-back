import { z } from "zod";

// Enveloppe volontairement permissive : chaque ligne est validée individuellement
// dans bulkImport.importRows (voir utils/bulkImport.ts) pour qu'une ligne invalide
// n'empêche jamais l'import des autres lignes du lot.
export const importEnvelopeSchema = z.object({
  rows: z.array(z.record(z.string(), z.unknown())).min(1, "Aucune ligne à importer").max(2000, "2000 lignes maximum par import"),
});
