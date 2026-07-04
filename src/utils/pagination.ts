import type { Response } from "express";

const DEFAULT_PAGE_SIZE = 100;
const MAX_PAGE_SIZE = 500;

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
export function parsePagination(query: Record<string, unknown>): PaginationParams {
  const page = Math.max(1, Number(query.page) || 1);
  const pageSize = Math.min(MAX_PAGE_SIZE, Math.max(1, Number(query.pageSize) || DEFAULT_PAGE_SIZE));
  return { page, pageSize, skip: (page - 1) * pageSize, take: pageSize };
}

export function setPaginationHeaders(
  res: Response,
  { page, pageSize, total }: { page: number; pageSize: number; total: number }
): void {
  res.set("X-Total-Count", String(total));
  res.set("X-Page", String(page));
  res.set("X-Page-Size", String(pageSize));
}
