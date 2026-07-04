import { commandesRentabiliteRepository } from "../repositories/commandesRentabilite.repository.js";
import { toCommandeRentabiliteDto } from "../dtos/commandesRentabilite.dto.js";

export const commandesRentabiliteService = {
  async list() {
    const rows = await commandesRentabiliteRepository.findMany();
    return rows.map(toCommandeRentabiliteDto);
  },
};
