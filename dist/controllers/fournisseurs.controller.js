import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { fournisseursService } from "../services/fournisseurs.service.js";
export const listFournisseurs = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await fournisseursService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getFournisseur = controllerWrapper(async (req, res) => {
    const fournisseur = await fournisseursService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: fournisseur }));
});
export const createFournisseur = controllerWrapper(async (req, res) => {
    const fournisseur = await fournisseursService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Fournisseur créé", data: fournisseur }));
});
export const updateFournisseur = controllerWrapper(async (req, res) => {
    const fournisseur = await fournisseursService.update(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Fournisseur mis à jour", data: fournisseur }));
});
//# sourceMappingURL=fournisseurs.controller.js.map