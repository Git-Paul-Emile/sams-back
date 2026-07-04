import { Router } from "express";
import { approveSalesRequest, createSalesRequest, getSalesRequest, listSalesRequests, rejectSalesRequest, } from "../controllers/salesRequests.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { approveSalesRequestSchema, createSalesRequestSchema, rejectSalesRequestSchema, } from "../validators/salesRequests.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Sorties"));
router.get("/", listSalesRequests);
router.get("/:id", validateId, getSalesRequest);
router.post("/", validateBody(createSalesRequestSchema), createSalesRequest);
router.post("/:id/approve", validateId, requirePermission("Validations"), validateBody(approveSalesRequestSchema), approveSalesRequest);
router.post("/:id/reject", validateId, requirePermission("Validations"), validateBody(rejectSalesRequestSchema), rejectSalesRequest);
export default router;
//# sourceMappingURL=salesRequests.routes.js.map