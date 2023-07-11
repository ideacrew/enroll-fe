import { ApplicationConfig } from '@angular/core';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import { SlcspI18nModule } from './i18n.module';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { routes } from './application.routes';
import {
  configFactory,
  TenantConfigService,
  APPLICATION_NAME,
  TENANT_CONFIG,
} from '@enroll/tenant-config';
export const appConfig: ApplicationConfig = {
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
};
