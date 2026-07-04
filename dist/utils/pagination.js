const DEFAULT_PAGE_SIZE = 100;
const MAX_PAGE_SIZE = 500;
/**
 * Lit `page`/`pageSize` depuis la query string. Les valeurs par défaut sont
 * volontairement généreuses (voir plan §0.4) pour rester compatibles avec le
 * frontend actuel qui ne demande pas encore de pagination explicite.
 */
export function parsePagination(query) {
    const page = Math.max(1, Number(query.page) || 1);
    const pageSize = Math.min(MAX_PAGE_SIZE, Math.max(1, Number(query.pageSize) || DEFAULT_PAGE_SIZE));
    return { page, pageSize, skip: (page - 1) * pageSize, take: pageSize };
}
export function setPaginationHeaders(res, { page, pageSize, total }) {
    res.set("X-Total-Count", String(total));
    res.set("X-Page", String(page));
    res.set("X-Page-Size", String(pageSize));
}
//# sourceMappingURL=pagination.js.map