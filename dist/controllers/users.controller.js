import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { usersService } from "../services/users.service.js";
export const listUsers = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await usersService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getUser = controllerWrapper(async (req, res) => {
    const user = await usersService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: user }));
});
export const createUser = controllerWrapper(async (req, res) => {
    const user = await usersService.create(req.body, { userId: req.user.id, ip: req.ip });
    res.status(201).json(jsonResponse({ status: "success", message: "Utilisateur créé", data: user }));
});
export const updateUser = controllerWrapper(async (req, res) => {
    const user = await usersService.update(req.params.id, req.body, { userId: req.user.id, ip: req.ip });
    res.json(jsonResponse({ status: "success", message: "Utilisateur mis à jour", data: user }));
});
//# sourceMappingURL=users.controller.js.map