export interface AccessTokenPayload {
    sub: string;
    role: string;
}
export declare const generateAccessToken: (payload: AccessTokenPayload) => string;
export declare const verifyAccessToken: (token: string) => AccessTokenPayload;
export declare const generateRefreshToken: (payload: {
    sub: string;
    jti: string;
}) => string;
export declare const verifyRefreshToken: (token: string) => {
    sub: string;
    jti: string;
};
//# sourceMappingURL=jwt.d.ts.map