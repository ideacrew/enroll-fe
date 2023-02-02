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
import { AuthGuard, AuthInterceptor } from '@enroll/console/auth';
import {
  GenericTranslationsModule,
  TenantTranslationModule,
} from '@enroll/shared/i18n';

import { AppComponent } from './app.component';
import { consoleTenantConfig } from './tenant-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('@enroll/console/auth').then((m) => m.consoleAuthRoutes),
      },
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
      provide: APPLICATION_NAME,
      useValue: 'console',
    },
    {
      provide: TENANT_CONFIG,
      useValue: consoleTenantConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
