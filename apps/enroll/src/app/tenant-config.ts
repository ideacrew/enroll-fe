import { TenantConfig } from '@enroll/tenant-config';

export const enrollTenantConfig: TenantConfig[] = [
  {
    host: 'localhost',
    application: 'enroll',
    tenant: 'me',
    baseApiUrl: 'https://preprod-enroll-api.cme.openhbx.org',
  },
  {
    host: 'preview.app.github.dev',
    application: 'enroll',
    tenant: 'me',
    baseApiUrl: 'https://preprod-enroll-api.cme.openhbx.org',
  },
  {
    host: 'preprod-enroll.cme.openhbx.org',
    application: 'enroll',
    tenant: 'me',
    baseApiUrl: 'https://preprod-console-api.cme.openhbx.org',
  },
];
