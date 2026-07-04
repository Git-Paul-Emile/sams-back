import { matieresPrixRepository } from "../repositories/matieresPrix.repository.js";
import { toMatierePrixDto } from "../dtos/matieresPrix.dto.js";

export const matieresPrixService = {
  async list() {
    const rows = await matieresPrixRepository.findMany();
    const produitsByMatiereId = await matieresPrixRepository.produitDesignationsByMatiereIds(
      rows.map((row) => row.matiereId)
    );
    return rows.map((row) => toMatierePrixDto(row, produitsByMatiereId.get(row.matiereId) ?? []));
  },
};
