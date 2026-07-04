import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { stockMovementsService } from "../services/stockMovements.service.js";
export const listMouvements = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await stockMovementsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const createMouvement = controllerWrapper(async (req, res) => {
    const mouvement = await stockMovementsService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Mouvement enregistré", data: mouvement }));
});
//# sourceMappingURL=stockMovements.controller.js.map