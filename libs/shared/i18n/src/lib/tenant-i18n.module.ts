import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode, NgModule } from '@angular/core';
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

// Each application has should have its own translations specific
// to each Tenant. This loader shows the path where these translations
// should be found. This is driven in the project.json for an app
@Injectable({ providedIn: 'root' })
export class TenantTranslationLoader implements TranslocoLoader {
  http = inject(HttpClient);
  tenantName = inject(TenantConfigService).tenantName;

  getTranslation(lang: string) {
    return this.http.get<Translation>(
      `/assets/i18n/${this.tenantName}/${lang}.json`
    );
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['es', 'en'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TenantTranslationLoader },
    { provide: TRANSLOCO_MISSING_HANDLER, useClass: CustomHandler },
  ],
})
export class TenantTranslationModule {}
