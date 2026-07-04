import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { stockItemsService } from "../services/stockItems.service.js";
export const listStockItems = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await stockItemsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getStockItem = controllerWrapper(async (req, res) => {
    const item = await stockItemsService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: item }));
});
export const setStockItemStock = controllerWrapper(async (req, res) => {
    const item = await stockItemsService.setStock(req.params.id, req.body, {
        userId: req.user.id,
        ip: req.ip,
    });
    res.json(jsonResponse({ status: "success", message: "Stock mis à jour", data: item }));
});
//# sourceMappingURL=stockItems.controller.js.map