import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { usersRepository } from "../repositories/users.repository.js";
import { toUserDto } from "../dtos/users.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import type { CreateUserInput, ListUsersQuery, UpdateUserInput } from "../validators/users.validator.js";
import type { Prisma } from "../generated/prisma/client.js";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT ?? 10);

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const usersService = {
  async list(query: ListUsersQuery) {
    const { page, pageSize, skip, take } = parsePagination(query);
    const where: Prisma.UserWhereInput = {
      ...(query.role ? { role: query.role } : {}),
      ...(query.search
        ? {
            OR: [
              { nom: { contains: query.search, mode: "insensitive" } },
              { email: { contains: query.search, mode: "insensitive" } },
            ],
          }
        : {}),
    };
    const orderBy: Prisma.UserOrderByWithRelationInput = { [query.sort ?? "nom"]: query.order ?? "asc" };

    const [rows, total] = await Promise.all([
      usersRepository.findMany(where, { skip, take, orderBy }),
      usersRepository.count(where),
    ]);

    return { items: rows.map(toUserDto), total, page, pageSize };
  },

  async get(id: string) {
    const user = await usersRepository.findById(id);
    if (!user) throw new AppError("Utilisateur introuvable", StatusCodes.NOT_FOUND);
    return toUserDto(user);
  },

  async create(input: CreateUserInput, ctx: ActionContext) {
    // Un compte avec seulement un téléphone n'a pas de mot de passe : son premier
    // accès se fait par OTP (voir services/otp.service.ts). Mot de passe temporaire
    // aléatoire (12 caractères, alphabet base64url — sûr pour JSON/affichage),
    // généré et hashé côté serveur, uniquement quand un email est fourni.
    const tempPassword = input.email ? crypto.randomBytes(9).toString("base64url") : null;
    const passwordHash = tempPassword ? await bcrypt.hash(tempPassword, SALT_ROUNDS) : null;

    const created = await usersRepository.create({
      nom: input.nom,
      email: input.email,
      tel: input.tel,
      role: input.role,
      passwordHash,
      statut: "Actif",
    });

    if (tempPassword) {
      // TODO: envoyer par email via EmailProvider une fois disponible (voir services/external/email)
      console.log(`[users] Mot de passe temporaire pour ${created.email}: ${tempPassword}`);
    }

    await recordAuditLog({
      action: "Création",
      module: "Admin",
      ref: created.email ?? created.tel ?? created.id,
      userId: ctx.userId,
      ip: ctx.ip,
    });
    return toUserDto(created);
  },

  async update(id: string, input: UpdateUserInput, ctx: ActionContext) {
    const existing = await usersRepository.findById(id);
    if (!existing) throw new AppError("Utilisateur introuvable", StatusCodes.NOT_FOUND);

    const updated = await usersRepository.update(id, input);
    await recordAuditLog({ action: "Modification", module: "Admin", ref: updated.email, userId: ctx.userId, ip: ctx.ip });
    return toUserDto(updated);
  },
};
