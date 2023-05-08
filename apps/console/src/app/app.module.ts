import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@enroll/shared/state/root-store';
import {
  APPLICATION_NAME,
  configFactory,
  TenantConfigService,
  TENANT_CONFIG,
} from '@enroll/tenant-config';
import {
  AuthGuard,
  AuthInterceptor,
  KeycloakConfigService,
} from '@enroll/console/auth';
import {
  GenericTranslationsModule,
  TenantTranslationModule,
} from '@enroll/shared/i18n';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KEYCLOAK_CONFIG, configKeycloakConfig } from '@enroll/console/auth';

import { AppComponent } from './app.component';
import { consoleTenantConfig } from './tenant-config';
import { keycloakConfiguration } from './keycloak-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@enroll/console/shell').then((m) => m.consoleShellRoutes),
        canActivate: [AuthGuard],
      },
    ]),
    RootStoreModule,
    FormsModule,
    HttpClientModule,
    TenantTranslationModule,
    GenericTranslationsModule,
    KeycloakAngularModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [TenantConfigService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configKeycloakConfig,
      deps: [KeycloakConfigService, KeycloakService],
      multi: true,
    },
    {
      provide: APPLICATION_NAME,
      useValue: 'console',
    },
    {
      provide: TENANT_CONFIG,
      useValue: consoleTenantConfig,
    },
    {
      provide: KEYCLOAK_CONFIG,
      useValue: keycloakConfiguration,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
