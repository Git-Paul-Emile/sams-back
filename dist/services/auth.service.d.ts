export declare const authService: {
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            nom: string;
            email: string;
            role: string;
            initials: string;
            modules: string[];
        };
    }>;
    refresh(refreshTokenCookie: string | undefined): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshTokenCookie: string | undefined): Promise<void>;
    me(userId: string): Promise<{
        id: string;
        nom: string;
        email: string;
        role: string;
        initials: string;
        modules: string[];
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map