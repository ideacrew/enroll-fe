export interface JwtValues {
  token: string;
  refreshToken: string;
  expiration: number;
}

interface JwtBody {
  exp: number;
}

export class JwtAuthService {
  constructor() {}

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
    const jwtPortions: string[] = jwt.split('.');
    if (jwtPortions.length === 3) {
      const jwtBodyString = atob(jwtPortions[1]);
      if (jwtBodyString) {
        const jwtBody = <JwtBody | null>JSON.parse(jwtBodyString.toString());
        if (jwtBody) {
          const expiryTime = jwtBody.exp * 1000;
          const now = Date.now();
          if (now < expiryTime) {
            return expiryTime;
          }
        }
      }
    }
    return undefined;
  }
}
