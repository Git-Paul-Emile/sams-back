import { Router } from "express";
import { createClient, getClient, listClients, updateClient } from "../controllers/clients.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createClientSchema, listClientsQuerySchema, updateClientSchema } from "../validators/clients.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

router.use(requireAuth, requirePermission("Clients"));

router.get("/", validateQuery(listClientsQuerySchema), listClients);
router.get("/:id", validateId, getClient);
router.post("/", validateBody(createClientSchema), createClient);
router.patch("/:id", validateId, validateBody(updateClientSchema), updateClient);

export default router;
