import { EnrollApplication } from './enroll-application';
import { TenantName } from './tenant-name';

export type TenantConfig = {
  host: string;
  application: EnrollApplication;
  tenant: TenantName;
  baseApiUrl: string;
};

const tenantConfig: TenantConfig[] = [
  {
    host: 'localhost',
    application: 'slcsp-calculator',
    tenant: 'me',
    baseApiUrl: 'https://pvt-3-enroll.cme.openhbx.org/',
  },
  {
    host: 'd2yxzsn2107sjf.cloudfront.net',
    application: 'slcsp-calculator',
    tenant: 'me',
    baseApiUrl: 'https://pvt-3-enroll.cme.openhbx.org/',
  },
  {
    host: 'tax-tool.coverme.gov',
    application: 'slcsp-calculator',
    tenant: 'me',
    baseApiUrl: 'https://enroll.coverme.gov/',
  },
];

export const tenantMapping = (
  host: string,
  applicationName: EnrollApplication
): TenantConfig => {
  const matchingConfig = tenantConfig.find(
    (config) =>
      host.includes(config.host) && config.application === applicationName
  );

  if (matchingConfig === undefined) {
    throw new Error('No matching tenant config found.');
  }

  return matchingConfig;
};
