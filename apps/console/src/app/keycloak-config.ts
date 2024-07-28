import { KeycloakConfig } from '@enroll/console/auth';

export const keycloakConfiguration: KeycloakConfig[] = [
  {
    host: 'localhost',
    clientId: 'openid',
    realm: 'Anthem',
    url: 'http://localhost:8080/auth',
  },
  {
    host: 'preprod-console.cme.openhbx.org',
    clientId: 'openid',
    realm: 'preprod',
    url: 'https://preprod-sso.cme.openhbx.org',
  },
  {
    host: 'carrier-portal.coverme.gov',
    clientId: 'openid',
    realm: 'coverme',
    url: 'https://login.coverme.gov/auth',
  },
];
