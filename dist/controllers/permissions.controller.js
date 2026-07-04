import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { permissionsService } from "../services/permissions.service.js";
export const listPermissions = controllerWrapper(async (req, res) => {
    const items = await permissionsService.list();
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const updatePermission = controllerWrapper(async (req, res) => {
    const updated = await permissionsService.update(req.params.role, req.body, {
        userId: req.user.id,
        ip: req.ip,
    });
    res.json(jsonResponse({ status: "success", message: "Permissions mises à jour", data: updated }));
});
//# sourceMappingURL=permissions.controller.js.map