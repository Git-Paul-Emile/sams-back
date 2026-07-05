import type { ZodType } from "zod";
import { AppError } from "./AppError.js";

export interface ImportRowError {
  index: number;
  message: string;
}

export interface ImportReport {
  created: number;
  errors: ImportRowError[];
}

/** Miroir du middleware d'erreur global (config/app.ts) pour les erreurs Prisma capturées ligne par ligne. */
function toReadableMessage(err: unknown): string {
  if (err instanceof AppError) return err.message;
  if (err && typeof err === "object" && "code" in err) {
    const code = (err as { code?: string }).code;
    if (code === "P2002") {
      const target = (err as { meta?: { target?: string[] } }).meta?.target;
      return `Valeur déjà utilisée pour le champ : ${target?.join(", ") ?? "inconnu"}`;
    }
  }
  return "Erreur inattendue";
}

function formatZodMessage(error: { issues: { path: PropertyKey[]; message: string }[] }): string {
  return error.issues
    .map((issue) => `${issue.path.map(String).join(".") || "champ"}: ${issue.message}`)
    .join(" ; ");
}

/**
 * Valide et traite les lignes une par une (pas de `Promise.all`, pas de validation
 * groupée de tout le tableau) : une ligne invalide ou en erreur n'empêche jamais
 * les autres d'être importées, et chaque échec est rapporté avec son numéro de
 * ligne. Le traitement séquentiel garde aussi les compteurs de séquence
 * (`code`/`matricule`) cohérents.
 */
export async function importRows<TInput>(
  rows: unknown[],
  rowSchema: ZodType<TInput>,
  createFn: (row: TInput) => Promise<unknown>
): Promise<ImportReport> {
  const errors: ImportRowError[] = [];
  let created = 0;

  for (const [index, raw] of rows.entries()) {
    const parsed = rowSchema.safeParse(raw);
    if (!parsed.success) {
      errors.push({ index, message: formatZodMessage(parsed.error) });
      continue;
    }
    try {
      await createFn(parsed.data);
      created++;
    } catch (err) {
      errors.push({ index, message: toReadableMessage(err) });
    }
  }

  return { created, errors };
}
