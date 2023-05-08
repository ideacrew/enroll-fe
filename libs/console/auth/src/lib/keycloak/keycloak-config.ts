import { InjectionToken } from '@angular/core';

export type KeycloakConfig = {
  host: string;
  clientId: string;
  realm: string;
  url: string;
};

export const KEYCLOAK_CONFIG = new InjectionToken<KeycloakConfig[]>(
  'Keycloak Config'
);
