import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { productCostsService } from "../services/productCosts.service.js";
export const listProductCosts = controllerWrapper(async (_req, res) => {
    const items = await productCostsService.list();
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
//# sourceMappingURL=productCosts.controller.js.map