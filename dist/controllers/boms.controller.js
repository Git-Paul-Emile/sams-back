import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { bomsService } from "../services/boms.service.js";
export const listBoms = controllerWrapper(async (_req, res) => {
    const items = await bomsService.list();
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const getBom = controllerWrapper(async (req, res) => {
    const bom = await bomsService.get(req.params.id);
    res.json(jsonResponse({ status: "success", message: "OK", data: bom }));
});
//# sourceMappingURL=boms.controller.js.map