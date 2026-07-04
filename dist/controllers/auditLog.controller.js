import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { auditLogService } from "../services/auditLog.service.js";
export const listAuditLog = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await auditLogService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
//# sourceMappingURL=auditLog.controller.js.map