/* eslint-disable @typescript-eslint/naming-convention */
export type JwtValues = {
  token: string;
  refreshToken: string;
  expiration: number;
};

type JwtPayload = {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  name: string;
  preferred_username: string;
  email: string;
};

import jwt_decode from 'jwt-decode';

export class JwtAuthService {
  get parsedJwt(): JwtPayload {
    return this.parseJwt(this.rawJwtFromLocalStorage);
  }

  get userName(): string {
    return this.parsedJwt.name;
  }

  clearJwt(): void {
    localStorage.removeItem('__jwt_authorization_current_token');
    localStorage.removeItem('__jwt_authorization_refresh_token');
  }

  setJwt(currentToken: string, refreshToken: string): JwtValues | undefined {
    const expiryTime = this.validateAndGetExpiration(currentToken);
    if (expiryTime) {
      localStorage.setItem('__jwt_authorization_current_token', currentToken);
      localStorage.setItem('__jwt_authorization_refresh_token', refreshToken);
      return {
        token: currentToken,
        refreshToken: refreshToken,
        expiration: expiryTime,
      };
    }
    return undefined;
  }

  getJwt(): JwtValues | undefined {
    const currentToken = localStorage.getItem(
      '__jwt_authorization_current_token'
    );
    const refreshToken = localStorage.getItem(
      '__jwt_authorization_refresh_token'
    );
    if (currentToken && refreshToken) {
      const expiryTime = this.validateAndGetExpiration(currentToken);
      if (expiryTime) {
        return {
          token: currentToken,
          refreshToken: refreshToken,
          expiration: expiryTime,
        };
      }
    }
    return undefined;
  }

  get rawJwtFromLocalStorage(): string {
    return localStorage.getItem('__jwt_authorization_current_token') ?? '';
  }

  private validateAndGetExpiration(jwt: string): number {
    const parseResult = this.parseJwt(jwt);
    return parseResult.exp * 1000;
  }

  private parseJwt(jwt: string): JwtPayload {
    return jwt_decode<JwtPayload>(jwt);
  }
}
