import { Router } from "express";
import { approveMaterialRequest, createMaterialRequest, getMaterialRequest, listMaterialRequests, rejectMaterialRequest, } from "../controllers/materialRequests.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { approveMaterialRequestSchema, createMaterialRequestSchema, rejectMaterialRequestSchema, } from "../validators/materialRequests.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Sorties"));
router.get("/", listMaterialRequests);
router.get("/:id", validateId, getMaterialRequest);
router.post("/", validateBody(createMaterialRequestSchema), createMaterialRequest);
router.post("/:id/approve", validateId, requirePermission("Validations"), validateBody(approveMaterialRequestSchema), approveMaterialRequest);
router.post("/:id/reject", validateId, requirePermission("Validations"), validateBody(rejectMaterialRequestSchema), rejectMaterialRequest);
export default router;
//# sourceMappingURL=materialRequests.routes.js.map