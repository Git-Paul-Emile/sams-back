import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";
function formatZodMessage(error) {
    if (error && typeof error === "object" && "issues" in error) {
        const issues = error.issues;
        return issues.map((issue) => `${issue.path.join(".") || "champ"}: ${issue.message}`).join(" ; ");
    }
    return "Requête invalide";
}
export const validateBody = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: formatZodMessage(result.error) }));
    }
    req.body = result.data;
    next();
};
export const validateQuery = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.query);
    if (!result.success) {
        return res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: formatZodMessage(result.error) }));
    }
    req.validatedQuery = result.data;
    next();
};
//# sourceMappingURL=validate.js.map