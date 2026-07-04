import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { salesRequestsService } from "../services/salesRequests.service.js";
export const listSalesRequests = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await salesRequestsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getSalesRequest = controllerWrapper(async (req, res) => {
    const sr = await salesRequestsService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: sr }));
});
export const createSalesRequest = controllerWrapper(async (req, res) => {
    const sr = await salesRequestsService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Demande créée", data: sr }));
});
export const approveSalesRequest = controllerWrapper(async (req, res) => {
    const sr = await salesRequestsService.approve(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Demande validée", data: sr }));
});
export const rejectSalesRequest = controllerWrapper(async (req, res) => {
    const sr = await salesRequestsService.reject(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Demande refusée", data: sr }));
});
//# sourceMappingURL=salesRequests.controller.js.map