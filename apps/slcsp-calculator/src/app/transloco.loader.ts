import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';

import { TenantConfigService } from './tenant-config.service';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(
    private http: HttpClient,
    private tenantConfig: TenantConfigService
  ) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(
      `/assets/i18n/${this.tenantConfig.tenant}-${lang}.json`
    );
  }
}
