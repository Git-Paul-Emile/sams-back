import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { searchService } from "../services/search.service.js";
export const globalSearch = controllerWrapper(async (req, res) => {
    const { q } = req.query;
    const results = await searchService.global(q);
    res.json(jsonResponse({ status: "success", message: "OK", data: results }));
});
//# sourceMappingURL=search.controller.js.map