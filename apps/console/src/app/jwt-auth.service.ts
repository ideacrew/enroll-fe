export interface JwtValues {
  token: string;
  refreshToken: string;
  expiration: number;
}

interface JwtPayload {
  exp: number;
}

import { JwtDecoder, isDecodedJwt } from '@treye/ts-jwt';

export class JwtAuthService {
  constructor() {}

  clearJwt(): void {
    window.localStorage.removeItem('__jwt_authorization_current_token');
    window.localStorage.removeItem('__jwt_authorization_refresh_token');
  }

  setJwt(currentToken: string, refreshToken: string): JwtValues | undefined {
    const expiryTime = this.validateAndGetExpiration(currentToken);
    if (expiryTime) {
      window.localStorage.setItem(
        '__jwt_authorization_current_token',
        currentToken
      );
      window.localStorage.setItem(
        '__jwt_authorization_refresh_token',
        refreshToken
      );
      return {
        token: currentToken,
        refreshToken: refreshToken,
        expiration: expiryTime,
      };
    }
    return undefined;
  }

  getJwt(): JwtValues | undefined {
    const currentToken = window.localStorage.getItem(
      '__jwt_authorization_current_token'
    );
    const refreshToken = window.localStorage.getItem(
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

  private validateAndGetExpiration(jwt: string): number | undefined {
    const parseResult = this.parseJwt(jwt);
    if (isDecodedJwt<JwtPayload>(parseResult)) {
      return parseResult.payload.exp * 1000;
    }
    return undefined;
  }

  private parseJwt(jwt: string) {
    return JwtDecoder.decodeJwt<JwtPayload>(jwt, ['exp']);
  }
}
