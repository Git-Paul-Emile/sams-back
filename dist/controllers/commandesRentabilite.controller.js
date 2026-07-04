import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { commandesRentabiliteService } from "../services/commandesRentabilite.service.js";
export const listCommandesRentabilite = controllerWrapper(async (_req, res) => {
    const items = await commandesRentabiliteService.list();
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
//# sourceMappingURL=commandesRentabilite.controller.js.map