import swaggerUi from "swagger-ui-express";
// Introspecte les routes Express montées pour générer un document OpenAPI
// minimal (méthode + chemin) — suffisant pour naviguer l'API dans Swagger UI
// sans maintenir une double déclaration de schéma en plus des validateurs Zod.
function collectRoutes(app) {
    const routes = [];
    const stack = app._router?.stack ?? [];
    const visit = (layer, prefix) => {
        if (layer.route) {
            const routePath = `${prefix}${layer.route.path}`;
            for (const method of Object.keys(layer.route.methods)) {
                if (layer.route.methods[method])
                    routes.push({ method: method.toUpperCase(), path: routePath });
            }
        }
        else if (layer.name === "router" && layer.handle?.stack) {
            const nestedPrefix = layer.regexp?.fast_slash
                ? prefix
                : prefix + (layer.path ?? "");
            for (const nested of layer.handle.stack)
                visit(nested, nestedPrefix);
        }
    };
    for (const layer of stack)
        visit(layer, "");
    return routes;
}
function toOpenApiPath(expressPath) {
    return expressPath.replace(/:([A-Za-z0-9_]+)/g, "{$1}");
}
export function mountOpenApi(app) {
    app.get("/api/openapi.json", (req, res) => {
        const routes = collectRoutes(app);
        const paths = {};
        for (const route of routes) {
            const openApiPath = toOpenApiPath(route.path);
            paths[openApiPath] ??= {};
            paths[openApiPath][route.method.toLowerCase()] = {
                summary: `${route.method} ${route.path}`,
                responses: { "200": { description: "OK" } },
            };
        }
        res.json({
            openapi: "3.0.3",
            info: { title: "SAMS FLUX ERP API", version: "1.0.0" },
            servers: [{ url: "/api/v1" }],
            paths,
        });
    });
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(undefined, {
        swaggerOptions: { url: "/api/openapi.json" },
    }));
}
//# sourceMappingURL=openapi.js.map