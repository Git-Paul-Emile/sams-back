import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { materialRequestsService } from "../services/materialRequests.service.js";
export const listMaterialRequests = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await materialRequestsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getMaterialRequest = controllerWrapper(async (req, res) => {
    const mr = await materialRequestsService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: mr }));
});
export const createMaterialRequest = controllerWrapper(async (req, res) => {
    const mr = await materialRequestsService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Demande créée", data: mr }));
});
export const approveMaterialRequest = controllerWrapper(async (req, res) => {
    const mr = await materialRequestsService.approve(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Demande validée", data: mr }));
});
export const rejectMaterialRequest = controllerWrapper(async (req, res) => {
    const mr = await materialRequestsService.reject(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Demande refusée", data: mr }));
});
//# sourceMappingURL=materialRequests.controller.js.map