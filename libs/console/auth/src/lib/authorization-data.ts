/* eslint-disable @typescript-eslint/naming-convention */

// Returned from GET /realms
export type RealmListResponse = {
  realms: string[];
};

// Submitted to POST /sessions
export type LoginRequest = {
  username: string;
  password: string;
  realm_name: string;
};

// Returned from POST /sessions, and from POST /sessions/refresh
export type TokenResponse = {
  token: string;
  refresh_token: string;
};

// Submitted to POST /sessions/refresh
export type RefreshTokenRequest = {
  refresh_token: string;
};
