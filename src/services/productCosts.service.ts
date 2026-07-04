import { productCostsRepository } from "../repositories/productCosts.repository.js";
import { toProductCostDto } from "../dtos/productCosts.dto.js";

// Lecture seule pour cette itération : la logique de recalcul (à partir des
// mouvements de stock, des prix matières courants, etc.) est un chantier
// distinct, volontairement hors périmètre ici (cf rapport de livraison).
export const productCostsService = {
  async list() {
    const rows = await productCostsRepository.findMany();
    return rows.map(toProductCostDto);
  },
};
