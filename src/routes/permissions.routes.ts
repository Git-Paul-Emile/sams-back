import { Router } from "express";
import { listPermissionModules, listPermissions, updatePermission } from "../controllers/permissions.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { updatePermissionSchema } from "../validators/permissions.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";

const router = Router();

router.use(requireAuth);

router.get("/", listPermissions);
router.get("/modules", listPermissionModules);
router.patch("/:role", requirePermission("Admin"), validateBody(updatePermissionSchema), updatePermission);

export default router;
