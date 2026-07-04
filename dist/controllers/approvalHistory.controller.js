import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { approvalHistoryService } from "../services/approvalHistory.service.js";
export const listApprovalHistory = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await approvalHistoryService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
//# sourceMappingURL=approvalHistory.controller.js.map