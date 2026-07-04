import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { matieresPrixService } from "../services/matieresPrix.service.js";
export const listMatieresPrix = controllerWrapper(async (_req, res) => {
    const items = await matieresPrixService.list();
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
//# sourceMappingURL=matieresPrix.controller.js.map