import jwt from "jsonwebtoken";

export interface AccessTokenPayload {
  sub: string;
  role: string;
}

const getAccessTokenSecret = (): string => {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET manquant dans .env");
  }
  return secret;
};

const getRefreshTokenSecret = (): string => {
  const secret = process.env.REFRESH_TOKEN_SECRET;
  if (!secret) {
    throw new Error("REFRESH_TOKEN_SECRET manquant dans .env");
  }
  return secret;
};

const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || "1d";
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || "7d";

export const generateAccessToken = (payload: AccessTokenPayload): string => {
  return jwt.sign(payload, getAccessTokenSecret(), {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  } as jwt.SignOptions);
};

export const verifyAccessToken = (token: string): AccessTokenPayload => {
  return jwt.verify(token, getAccessTokenSecret()) as unknown as AccessTokenPayload;
};

export const generateRefreshToken = (payload: { sub: string; jti: string }): string => {
  return jwt.sign(payload, getRefreshTokenSecret(), {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  } as jwt.SignOptions);
};

export const verifyRefreshToken = (token: string): { sub: string; jti: string } => {
  return jwt.verify(token, getRefreshTokenSecret()) as unknown as { sub: string; jti: string };
};
