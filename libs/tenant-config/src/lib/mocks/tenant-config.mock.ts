import { EnrollApplication } from '../enroll-application';
import { TenantConfigService } from '../tenant-config.service';
import { TenantConfig } from '../url-mapping';

class MockService extends TenantConfigService {}

export const MOCK_APPLICATION_CONFIG: EnrollApplication = 'console';
export const MOCK_TENANT_CONFIG: TenantConfig[] = [
  {
    host: 'localhost',
    application: 'console',
    tenant: 'me',
    baseApiUrl: 'http://',
  },
];

export const MOCK_TENANT_CONFIG_SERVICE = MockService;
