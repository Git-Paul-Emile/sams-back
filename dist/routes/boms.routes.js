import { Router } from "express";
import { getBom, listBoms } from "../controllers/boms.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Production"));
// Lecture seule (scope cut) : pas de POST/PATCH, voir boms.service.ts.
router.get("/", listBoms);
router.get("/:id", validateId, getBom);
export default router;
//# sourceMappingURL=boms.routes.js.map