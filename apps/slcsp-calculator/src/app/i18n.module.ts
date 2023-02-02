import { inject, Injectable, isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Translation,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_MISSING_HANDLER,
} from '@ngneat/transloco';

import { TenantConfigService } from '@enroll/tenant-config';

import { CustomHandler } from './custom-handler';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  http = inject(HttpClient);
  tenantName = inject(TenantConfigService).tenantName;

  getTranslation(lang: string) {
    return this.http.get<Translation>(
      `/assets/i18n/${this.tenantName}-${lang}.json`
    );
  }
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        // Remove this option if your application
        // doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    { provide: TRANSLOCO_MISSING_HANDLER, useClass: CustomHandler },
  ],
  exports: [TranslocoModule],
})
export class SlcspI18nModule {}
