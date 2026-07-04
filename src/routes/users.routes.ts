import { Router } from "express";
import { createUser, getUser, listUsers, updateUser } from "../controllers/users.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createUserSchema, listUsersQuerySchema, updateUserSchema } from "../validators/users.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

// Liste des utilisateurs sensible : gardée par "Admin" y compris en lecture.
router.use(requireAuth, requirePermission("Admin"));

router.get("/", validateQuery(listUsersQuerySchema), listUsers);
router.get("/:id", validateId, getUser);
router.post("/", validateBody(createUserSchema), createUser);
router.patch("/:id", validateId, validateBody(updateUserSchema), updateUser);

export default router;
