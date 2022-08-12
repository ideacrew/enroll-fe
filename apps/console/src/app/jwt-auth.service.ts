export interface JwtValues {
  token: string;
  refreshToken: string;
}

interface JwtBody {
  exp: number;
}

export class JwtAuthService {
  constructor() {}

  setJwt(currentToken: string, refreshToken: string): void {
    window.localStorage.setItem(
      '__jwt_authorization_current_token',
      currentToken
    );
    window.localStorage.setItem(
      '__jwt_authorization_refresh_token',
      refreshToken
    );
  }

  getJwt(): JwtValues | undefined {
    const currentToken = window.localStorage.getItem(
      '__jwt_authorization_current_token'
    );
    const refreshToken = window.localStorage.getItem(
      '__jwt_authorization_refresh_token'
    );
    if (currentToken && refreshToken && this.jwtValid(currentToken)) {
      return {
        token: currentToken,
        refreshToken: refreshToken,
      };
    }
    return undefined;
  }

  private jwtValid(jwt: string): boolean {
    const jwtPortions: string[] = jwt.split('.');
    if (jwtPortions.length === 3) {
      const jwtBodyString = atob(jwtPortions[1]);
      if (jwtBodyString) {
        const jwtBody = <JwtBody | null>JSON.parse(jwtBodyString.toString());
        if (jwtBody) {
          const now = Date.now() / 1000;
          if (now < jwtBody.exp) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
