import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import { TenantTranslationModule } from '@enroll/shared/i18n';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { TITLE_EXTENSION } from '@enroll/shared/page-title';
import {
  configFactory,
  TenantConfigService,
  APPLICATION_NAME,
  TENANT_CONFIG,
} from '@enroll/tenant-config';
import { routes } from './application.routes';
import { enrollTenantConfig } from './tenant-config';
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RootStoreModule,
      TenantTranslationModule
    ),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [TenantConfigService],
      multi: true,
    },
    {
      provide: APPLICATION_NAME,
      useValue: 'enroll',
    },
    {
      provide: TENANT_CONFIG,
      useValue: enrollTenantConfig,
    },
    {
      provide: TITLE_EXTENSION,
      useValue: 'Maine Cover ME',
    },
  ],
};
