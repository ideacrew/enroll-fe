import { InjectionToken } from '@angular/core';
import { EnrollApplication } from './enroll-application';
import { TenantConfig } from './url-mapping';

// Create a simple injection token for the application name
export const APPLICATION_NAME = new InjectionToken<EnrollApplication>(
  'Application Name'
);

export const TENANT_CONFIG = new InjectionToken<TenantConfig[]>(
  'Tenant Config'
);
