import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { incidentsService } from "../services/incidents.service.js";
export const listIncidents = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await incidentsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getIncident = controllerWrapper(async (req, res) => {
    const incident = await incidentsService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: incident }));
});
export const createIncident = controllerWrapper(async (req, res) => {
    const incident = await incidentsService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Incident créé", data: incident }));
});
//# sourceMappingURL=incidents.controller.js.map