import type { ApprovalRecord, MaterialRequest, SalesRequest, User } from "../generated/prisma/client.js";
type ApprovalRecordWithRelations = ApprovalRecord & {
    valideur: User;
    salesRequest: SalesRequest | null;
    materialRequest: MaterialRequest | null;
};
export declare function toApprovalRecordDto(ap: ApprovalRecordWithRelations): {
    id: string;
    date: string;
    heure: string;
    valideur: string;
    action: string;
    type: string;
    ref: string | null;
    module: string;
    commentaire: string | null;
    motifRefus: string | null;
};
export {};
//# sourceMappingURL=approvalHistory.dto.d.ts.map