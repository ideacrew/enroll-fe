import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { TenantTranslationModule } from '@enroll/shared/i18n';
import { TITLE_EXTENSION } from '@enroll/shared/page-title';

import { RootStoreModule } from '@enroll/shared/state/root-store';
import {
  configFactory,
  TenantConfigService,
  APPLICATION_NAME,
  TENANT_CONFIG,
} from '@enroll/tenant-config';

import { AppComponent } from './app/app.component';
import { routes } from './app/application.routes';
import { enrollTenantConfig } from './app/tenant-config';

bootstrapApplication(AppComponent, {
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
}).catch((error) => console.error(error));
