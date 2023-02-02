/* eslint-disable unicorn/prefer-top-level-await */
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import {
  configFactory,
  TenantConfigService,
  APPLICATION_NAME,
  TENANT_CONFIG,
} from '@enroll/tenant-config';

import { AppComponent } from './app/app.component';
import { routes } from './app/application.routes';
import { SlcspI18nModule } from './app/i18n.module';
import { slcspTenantConfig } from './app/tenant-config';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, RootStoreModule, SlcspI18nModule),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [TenantConfigService],
      multi: true,
    },
    {
      provide: APPLICATION_NAME,
      useValue: 'slcsp-calculator',
    },
    {
      provide: TENANT_CONFIG,
      useValue: slcspTenantConfig,
    },
  ],
}).catch((error) => console.error(error));
