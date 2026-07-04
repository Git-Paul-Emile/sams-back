import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { prodOrdersService } from "../services/prodOrders.service.js";
export const listProdOrders = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await prodOrdersService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getProdOrder = controllerWrapper(async (req, res) => {
    const order = await prodOrdersService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: order }));
});
export const createProdOrder = controllerWrapper(async (req, res) => {
    const order = await prodOrdersService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Ordre de fabrication créé", data: order }));
});
export const getProdChart = controllerWrapper(async (_req, res) => {
    const chart = await prodOrdersService.chart();
    res.json(jsonResponse({ status: "success", message: "OK", data: chart }));
});
//# sourceMappingURL=prodOrders.controller.js.map