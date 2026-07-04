import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { commandesService } from "../services/commandes.service.js";
export const listCommandes = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await commandesService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getCommande = controllerWrapper(async (req, res) => {
    const commande = await commandesService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: commande }));
});
export const createCommande = controllerWrapper(async (req, res) => {
    const commande = await commandesService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Commande créée", data: commande }));
});
export const addCommandeTimeline = controllerWrapper(async (req, res) => {
    const commande = await commandesService.addTimelineEvent(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "État mis à jour", data: commande }));
});
//# sourceMappingURL=commandes.controller.js.map