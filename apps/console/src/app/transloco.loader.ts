import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TenantConfigService } from '@enroll/tenant-config';
import { Translation, TranslocoLoader } from '@ngneat/transloco';

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
