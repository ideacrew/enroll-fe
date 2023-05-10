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
    url: 'https://preprod-sso.priv.cme.openhbx.org/auth',
  },
  {
    host: 'carrier-portal.coverme.gov',
    clientId: 'openid',
    realm: 'production',
    url: 'TBD',
  },
];
