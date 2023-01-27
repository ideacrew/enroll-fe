import { TenantConfig } from '@enroll/tenant-config';

export const slcspTenantConfig: TenantConfig[] = [
  {
    host: 'localhost',
    application: 'slcsp-calculator',
    tenant: 'me',
    baseApiUrl: 'https://pvt-3-enroll.cme.openhbx.org',
  },
  {
    host: 'd2yxzsn2107sjf.cloudfront.net',
    application: 'slcsp-calculator',
    tenant: 'me',
    baseApiUrl: 'https://pvt-3-enroll.cme.openhbx.org',
  },
  {
    host: 'dev-tax-tool.cme.openhbx.org',
    application: 'slcsp-calculator',
    tenant: 'me',
    baseApiUrl: 'https://pvt-3-enroll.cme.openhbx.org',
  },
  {
    host: 'tax-tool.coverme.gov',
    application: 'slcsp-calculator',
    tenant: 'me',
    baseApiUrl: 'https://enroll.coverme.gov',
  },
];
