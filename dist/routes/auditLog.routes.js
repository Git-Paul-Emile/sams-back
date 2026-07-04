import { Router } from "express";
import { listAuditLog } from "../controllers/auditLog.controller.js";
import { validateQuery } from "../middlewares/validate.js";
import { listAuditLogQuerySchema } from "../validators/auditLog.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
const router = Router();
router.use(requireAuth, requirePermission("Rapports"));
router.get("/", validateQuery(listAuditLogQuerySchema), listAuditLog);
export default router;
//# sourceMappingURL=auditLog.routes.js.map