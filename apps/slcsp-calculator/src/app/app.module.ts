import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@enroll/shared/state/root-store';
import { UiBaseShellModule } from '@enroll/ui/base/shell';
import {
  APPLICATION_NAME,
  configFactory,
  TenantConfigService,
  TENANT_CONFIG,
} from '@enroll/tenant-config';

import { AppComponent } from './app.component';
import { SlcspI18nModule } from './i18n.module';
import { JsonFileLoaderService } from './json-file-loader.service';
import { slcspTenantConfig } from './tenant-config';

export function initializeJsonFile(jsonFileLoader: JsonFileLoaderService) {
  return () => jsonFileLoader.loadJson('/tenant-config/me-colors.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@enroll/slcsp-calculator/shell').then(
              (m) => m.SlcspCalculatorShellModule
            ),
        },
        {
          path: 'premium-tax-credit',
          loadChildren: () =>
            import('@enroll/slcsp-calculator/premium-tax-credit').then(
              (m) => m.SlcspCalculatorPremiumTaxCreditModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    RootStoreModule,
    UiBaseShellModule,
    HttpClientModule,
    SlcspI18nModule,
  ],
  providers: [
    JsonFileLoaderService,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
