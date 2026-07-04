import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { whatsappNotifsService } from "../services/whatsappNotifs.service.js";
export const listWhatsAppNotifs = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await whatsappNotifsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
//# sourceMappingURL=whatsappNotifs.controller.js.map