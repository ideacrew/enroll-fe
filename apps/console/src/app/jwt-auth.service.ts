export interface JwtValues {
  token: string;
  refreshToken: string;
  expiration: number;
}

interface JwtPayload {
  exp: number;
}

import jwt_decode from 'jwt-decode';

export class JwtAuthService {
  constructor() {}

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

  private validateAndGetExpiration(jwt: string): number {
    const parseResult = this.parseJwt(jwt);
    return parseResult.exp * 1000;
  }

  private parseJwt(jwt: string): JwtPayload {
    return jwt_decode<JwtPayload>(jwt);
  }
}
