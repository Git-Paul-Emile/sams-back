import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { clientsService } from "../services/clients.service.js";
export const listClients = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await clientsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getClient = controllerWrapper(async (req, res) => {
    const client = await clientsService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: client }));
});
export const createClient = controllerWrapper(async (req, res) => {
    const client = await clientsService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Client créé", data: client }));
});
export const updateClient = controllerWrapper(async (req, res) => {
    const client = await clientsService.update(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Client mis à jour", data: client }));
});
//# sourceMappingURL=clients.controller.js.map