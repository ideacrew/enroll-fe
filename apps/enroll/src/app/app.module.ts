import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiBaseShellModule } from '@enroll/ui/base/shell';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import { TITLE_EXTENSION } from '@enroll/shared/page-title';
import {
  GenericTranslationsModule,
  TenantTranslationModule,
} from '@enroll/shared/i18n';
import {
  APPLICATION_NAME,
  configFactory,
  TenantConfigService,
  TENANT_CONFIG,
} from '@enroll/tenant-config';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { enrollTenantConfig } from './tenant-config';

@NgModule({
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomePageComponent,
        data: {
          title: 'Welcome',
        },
      },
      {
        path: 'financial-assistance',
        loadChildren: () =>
          import('@enroll/financial-assistance/shell').then(
            (m) => m.FinancialAssistanceShellModule
          ),
      },
      {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
    ]),
    RootStoreModule,
    UiBaseShellModule,
    TenantTranslationModule,
    GenericTranslationsModule,
  ],
  declarations: [AppComponent, WelcomePageComponent],
  providers: [
    {
      provide: TITLE_EXTENSION,
      useValue: 'Maine Cover ME',
    },
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
