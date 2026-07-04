import type { Response } from "express";
export interface PaginationParams {
    page: number;
    pageSize: number;
    skip: number;
    take: number;
}
/**
 * Lit `page`/`pageSize` depuis la query string. Les valeurs par défaut sont
 * volontairement généreuses (voir plan §0.4) pour rester compatibles avec le
 * frontend actuel qui ne demande pas encore de pagination explicite.
 */
export declare function parsePagination(query: Record<string, unknown>): PaginationParams;
export declare function setPaginationHeaders(res: Response, { page, pageSize, total }: {
    page: number;
    pageSize: number;
    total: number;
}): void;
//# sourceMappingURL=pagination.d.ts.map