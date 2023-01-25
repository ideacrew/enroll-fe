import { EnrollApplication } from './enroll-application';
import { TenantName } from './tenant-name';

/* eslint-disable @typescript-eslint/naming-convention */
type ApplicationUrlMapping = Record<EnrollApplication, TenantUrlMapping>;
type TenantUrlMapping = Record<TenantName, UrlMapping>;
type UrlMapping = Record<string, string>;

// Would love to get to this pattern some day
// `https://${env}-${service}-api.${client}.openhbx.org`;
const applicationUrlMapping: ApplicationUrlMapping = {
  console: {
    me: {
      localhost: 'https://preprod-console-api.cme.openhbx.org',
      'd2yxzsn2107sjf.cloudfront.net': 'https://pvt-3-enroll.cme.openhbx.org/',
    },
    dc: {
      localhost: '',
    },
  },
  enroll: {
    me: {
      localhost: 'https://pvt-3-enroll.cme.openhbx.org/',
    },
    dc: {
      localhost: 'https://pvt-3-enroll.dchbx.org/',
    },
  },
  'slcsp-calculator': {
    me: {
      localhost: 'https://pvt-3-enroll.cme.openhbx.org/',
    },
    dc: {
      localhost: '',
    },
  },
};

type BaseUrlDetails = {
  host: string;
  tenant: TenantName;
  application: EnrollApplication;
};

// If the host is localhost, use the localhost url, which should be
// The pvt3 environment for ME, but what is it for DC and MA?
export const getBaseUrl = ({
  host,
  tenant,
  application,
}: BaseUrlDetails): string =>
  host.includes('localhost')
    ? applicationUrlMapping[application][tenant]['localhost']
    : applicationUrlMapping[application][tenant][host];

export const tenantMapping = (host: string): TenantName => {
  if (
    host.includes('openhbx') ||
    host.includes('coverme') ||
    host.includes('cme')
  ) {
    return 'me';
  }

  if (host.includes('dchbx')) {
    return 'dc';
  }

  // This is a fallback for local development, probably a better way to do this
  if (host.includes('localhost')) {
    return 'me';
  }

  throw new Error('No tenant found for host');
};
