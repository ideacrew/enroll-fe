import { EnrollApplication } from '../enroll-application';
import { TenantConfig } from '../url-mapping';

export const MOCK_APPLICATION_CONFIG: EnrollApplication = 'console';
export const MOCK_TENANT_CONFIG: TenantConfig[] = [
  {
    host: 'localhost',
    application: 'console',
    tenant: 'me',
    baseApiUrl: 'http://',
  },
];
