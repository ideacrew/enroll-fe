/* eslint-disable @typescript-eslint/naming-convention */

// Returned from GET /realms
export interface RealmListResponse {
  realms: Array<string>;
}

// Submitted to POST /sessions
export interface LoginRequest {
  username: string;
  password: string;
  realm_name: string;
}

// Returned from POST /sessions, and from POST /sessions/refresh
export interface TokenResponse {
  token: string;
  refresh_token: string;
}

// Submitted to POST /sessions/refresh
export interface RefreshTokenRequest {
  refresh_token: string;
}
