import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { achatsService } from "../services/achats.service.js";
export const listAchats = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await achatsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getAchat = controllerWrapper(async (req, res) => {
    const achat = await achatsService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: achat }));
});
export const createAchat = controllerWrapper(async (req, res) => {
    const achat = await achatsService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Achat créé", data: achat }));
});
//# sourceMappingURL=achats.controller.js.map