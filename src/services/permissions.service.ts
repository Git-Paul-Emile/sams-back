import { StatusCodes } from "http-status-codes";
import { permissionsRepository } from "../repositories/permissions.repository.js";
import { toPermissionDto } from "../dtos/permissions.dto.js";
import { AppError } from "../utils/AppError.js";
import { recordAuditLog } from "../utils/auditLog.js";
import { roleSchema } from "../validators/enums.js";
import type { UpdatePermissionInput } from "../validators/permissions.validator.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const permissionsService = {
  async list() {
    const rows = await permissionsRepository.findMany();
    return rows.map(toPermissionDto);
  },

  async update(role: string, input: UpdatePermissionInput, ctx: ActionContext) {
    const parsedRole = roleSchema.safeParse(role);
    if (!parsedRole.success) {
      throw new AppError("Rôle invalide", StatusCodes.BAD_REQUEST);
    }

    const existing = await permissionsRepository.findByRole(parsedRole.data);
    if (!existing) throw new AppError("Permissions introuvables pour ce rôle", StatusCodes.NOT_FOUND);

    const updated = await permissionsRepository.update(parsedRole.data, { modules: input.modules });
    await recordAuditLog({
      action: "Modification",
      module: "Admin",
      ref: parsedRole.data,
      userId: ctx.userId,
      ip: ctx.ip,
    });
    return toPermissionDto(updated);
  },
};
