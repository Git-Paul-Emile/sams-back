import { Router } from "express";
import { listApprovalHistory } from "../controllers/approvalHistory.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";

const router = Router();

router.get("/", requireAuth, requirePermission("Validations"), listApprovalHistory);

export default router;
