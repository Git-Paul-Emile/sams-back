/**
 * Génère les numéros métier (`BC-2601-004`, `CMD-2601-012`, ...) côté serveur,
 * dans la transaction d'écriture, en comptant les lignes déjà créées ce
 * mois-ci pour le préfixe donné — remplace le `Math.random()` côté frontend
 * qui ne garantissait pas l'unicité (cf plan §0.1).
 */
export declare function currentYYMM(now?: Date): string;
export declare function nextSequenceNumber(prefix: string, countExisting: (likePrefix: string) => Promise<number>, now?: Date): Promise<string>;
/**
 * Compte-puis-crée n'est pas atomique : deux requêtes concurrentes peuvent lire
 * le même compte et tenter d'insérer le même numéro (violation de contrainte
 * unique sur `num`). Plutôt qu'une séquence DB dédiée (migration), on retente
 * avec un numéro fraîchement recalculé — largement suffisant vu le volume de
 * créations concurrentes réel de l'appli.
 */
export declare function createWithSequenceNumber<T>(prefix: string, countExisting: (likePrefix: string) => Promise<number>, createFn: (num: string) => Promise<T>, maxAttempts?: number): Promise<T>;
//# sourceMappingURL=sequence.d.ts.map