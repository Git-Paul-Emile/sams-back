import { Router } from "express";
import { globalSearch } from "../controllers/search.controller.js";
import { validateQuery } from "../middlewares/validate.js";
import { globalSearchQuerySchema } from "../validators/search.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const router = Router();
router.use(requireAuth);
router.get("/global", validateQuery(globalSearchQuerySchema), globalSearch);
export default router;
//# sourceMappingURL=search.routes.js.map