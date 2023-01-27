import { EnrollApplication } from './enroll-application';
import { TenantName } from './tenant-name';

export type TenantConfig = {
  host: string;
  application: EnrollApplication;
  tenant: TenantName;
  baseApiUrl: string;
};
