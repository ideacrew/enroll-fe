import { TenantConfig } from '@enroll/tenant-config';

export const consoleTenantConfig: TenantConfig[] = [
  {
    host: 'localhost',
    application: 'console',
    tenant: 'me',
    baseApiUrl: 'http://localhost:3000',
  },
  {
    host: 'preview.app.github.dev',
    application: 'console',
    tenant: 'me',
    baseApiUrl: 'https://preprod-console-api.cme.openhbx.org',
  },
  {
    host: 'preprod-console.cme.openhbx.org',
    application: 'console',
    tenant: 'me',
    baseApiUrl: 'https://preprod-console-api.cme.openhbx.org',
  },
  {
    host: 'carrier-portal.coverme.gov',
    application: 'console',
    tenant: 'me',
    baseApiUrl: 'https://prod-console-api.cme.openhbx.org',
  },
];
