/* eslint-disable @typescript-eslint/naming-convention */
export type JwtValues = {
  token: string;
  refreshToken: string;
  expiration: number;
};

export type JwtPayload = {
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
