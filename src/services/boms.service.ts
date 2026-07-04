import { StatusCodes } from "http-status-codes";
import { bomsRepository } from "../repositories/boms.repository.js";
import { toBomDto } from "../dtos/boms.dto.js";
import { AppError } from "../utils/AppError.js";

// Lecture seule : les BOMs sont seedées et éditées rarement — pas de
// create/update ici (scope cut assumé, voir rapport final).
export const bomsService = {
  async list() {
    const rows = await bomsRepository.findMany();
    return rows.map(toBomDto);
  },

  async get(id: string) {
    const bom = await bomsRepository.findById(id);
    if (!bom) throw new AppError("Nomenclature introuvable", StatusCodes.NOT_FOUND);
    return toBomDto(bom);
  },
};
