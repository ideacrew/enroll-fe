import { InjectionToken } from '@angular/core';
import { EnrollApplication } from './enroll-application';

// Create a simple injection token for the application name
export const APPLICATION_NAME = new InjectionToken<EnrollApplication>(
  'Application Name'
);
