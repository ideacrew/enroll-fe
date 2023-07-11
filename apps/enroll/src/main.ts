import { appConfig } from './app/app.config';
/* eslint-disable unicorn/prefer-top-level-await */

import { bootstrapApplication } from '@angular/platform-browser';

import { TITLE_EXTENSION } from '@enroll/shared/page-title';

import { AppComponent } from './app/app.component';

import { enrollTenantConfig } from './app/tenant-config';

bootstrapApplication(AppComponent, appConfig).catch((error) =>
  console.error(error)
);
