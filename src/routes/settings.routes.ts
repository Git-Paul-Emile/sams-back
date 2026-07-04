import { Router } from "express";
import { getSettings, updateSettings } from "../controllers/settings.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { updateSettingsSchema } from "../validators/settings.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";

const router = Router();

router.use(requireAuth);

router.get("/", getSettings);
router.patch("/", requirePermission("Admin"), validateBody(updateSettingsSchema), updateSettings);

export default router;
