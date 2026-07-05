import { Router } from "express";
import { createBom, deleteBom, getBom, listBoms, updateBom } from "../controllers/boms.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateBody } from "../middlewares/validate.js";
import { validateId } from "../middlewares/validateId.js";
import { createBomSchema, updateBomSchema } from "../validators/boms.validator.js";

const router = Router();

router.use(requireAuth, requirePermission("Production"));

router.get("/", listBoms);
router.get("/:id", validateId, getBom);
router.post("/", validateBody(createBomSchema), createBom);
router.put("/:id", validateId, validateBody(updateBomSchema), updateBom);
router.delete("/:id", validateId, deleteBom);

export default router;
