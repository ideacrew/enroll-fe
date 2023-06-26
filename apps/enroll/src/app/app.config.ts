import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import { TenantTranslationModule } from '@enroll/shared/i18n';
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
import { enrollTenantConfig } from './tenant-config';
import { TITLE_EXTENSION } from '@enroll/shared/page-title';
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
