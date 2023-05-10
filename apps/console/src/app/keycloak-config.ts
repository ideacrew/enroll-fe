import { KeycloakConfig } from '@enroll/console/auth';

export const keycloakConfiguration: KeycloakConfig[] = [
  {
    host: 'localhost',
    clientId: 'openid',
    url: 'http://localhost:8080/auth',
    realm: 'Anthem',
  },
  {
    host: 'preprod-console.cme.openhbx.org',
    clientId: 'openid',
    realm: 'preprod',
    url: 'https://preprod-sso.priv.cme.openhbx.org/auth',
  },
];
