import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { operateursService } from "../services/operateurs.service.js";
export const listOperateurs = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await operateursService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getOperateur = controllerWrapper(async (req, res) => {
    const operateur = await operateursService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: operateur }));
});
export const createOperateur = controllerWrapper(async (req, res) => {
    const operateur = await operateursService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Opérateur créé", data: operateur }));
});
export const updateOperateur = controllerWrapper(async (req, res) => {
    const operateur = await operateursService.update(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Opérateur mis à jour", data: operateur }));
});
//# sourceMappingURL=operateurs.controller.js.map