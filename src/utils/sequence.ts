/**
 * Génère les numéros métier (`BC-2601-004`, `CMD-2601-012`, ...) côté serveur,
 * dans la transaction d'écriture, en comptant les lignes déjà créées ce
 * mois-ci pour le préfixe donné — remplace le `Math.random()` côté frontend
 * qui ne garantissait pas l'unicité (cf plan §0.1).
 */
export function currentYYMM(now: Date = new Date()): string {
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  return `${yy}${mm}`;
}

export async function nextSequenceNumber(
  prefix: string,
  countExisting: (likePrefix: string) => Promise<number>,
  now: Date = new Date()
): Promise<string> {
  const likePrefix = `${prefix}-${currentYYMM(now)}-`;
  const existing = await countExisting(likePrefix);
  const seq = String(existing + 1).padStart(3, "0");
  return `${likePrefix}${seq}`;
}

function isNumUniqueConflict(err: unknown): boolean {
  if (typeof err !== "object" || err === null || !("code" in err)) return false;
  if ((err as { code?: string }).code !== "P2002") return false;

  const meta = (err as { meta?: Record<string, unknown> }).meta;
  // Moteur Prisma "classique" : meta.target = ["num"].
  const classicTarget = meta?.target;
  if (Array.isArray(classicTarget) && classicTarget.includes("num")) return true;

  // @prisma/adapter-pg (driver adapter) : la contrainte violée remonte dans
  // meta.driverAdapterError.cause.constraint.fields au lieu de meta.target.
  const adapterFields = (meta as { driverAdapterError?: { cause?: { constraint?: { fields?: string[] } } } })
    ?.driverAdapterError?.cause?.constraint?.fields;
  return Array.isArray(adapterFields) && adapterFields.includes("num");
}

/**
 * Compte-puis-crée n'est pas atomique : deux requêtes concurrentes peuvent lire
 * le même compte et tenter d'insérer le même numéro (violation de contrainte
 * unique sur `num`). Plutôt qu'une séquence DB dédiée (migration), on retente
 * avec un numéro fraîchement recalculé — largement suffisant vu le volume de
 * créations concurrentes réel de l'appli.
 */
export async function createWithSequenceNumber<T>(
  prefix: string,
  countExisting: (likePrefix: string) => Promise<number>,
  createFn: (num: string) => Promise<T>,
  maxAttempts = 5
): Promise<T> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const num = await nextSequenceNumber(prefix, countExisting);
    try {
      return await createFn(num);
    } catch (err) {
      if (!isNumUniqueConflict(err) || attempt === maxAttempts) throw err;
    }
  }
  throw new Error("Impossible de générer un numéro de séquence unique après plusieurs tentatives");
}
