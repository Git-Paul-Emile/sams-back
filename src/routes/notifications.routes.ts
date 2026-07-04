import { Router } from "express";
import {
  createNotification,
  listNotifications,
  markNotificationAsRead,
} from "../controllers/notifications.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createNotifSchema, listNotifsQuerySchema } from "../validators/notifications.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

// Pas de requirePermission ici : la liste des notifications est un flux
// global lu par tout utilisateur authentifié (pas de module dédié dans
// RolePermission.modules pour "Notifications" — cf plan/consignes).
router.use(requireAuth);

router.get("/", validateQuery(listNotifsQuerySchema), listNotifications);
router.post("/", validateBody(createNotifSchema), createNotification);
router.patch("/:id/read", validateId, markNotificationAsRead);

export default router;
