import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { APPLICATION_NAME } from './application-name-token';
import { TenantConfig, tenantMapping } from './url-mapping';

type KeyValueConfig = Record<string, string>;

export const configFactory = (
  config: TenantConfigService
  // eslint-disable-next-line arrow-body-style
): (() => Observable<boolean>) => {
  return () => config.loadAndSetConfig();
};

@Injectable({
  providedIn: 'root',
})
export class TenantConfigService {
  applicationName = inject(APPLICATION_NAME);
  tenantConfig: TenantConfig = tenantMapping(
    window.location.host,
    this.applicationName
  );
  http = inject(HttpClient);

  loadAndSetConfig(): Observable<boolean> {
    return this.http
      .get<KeyValueConfig>(`/tenant-config/${this.tenantConfig.tenant}.json`)
      .pipe(
        map((config) => {
          this.setCustomProperties(config);
          return true;
        }),
        catchError((error) => {
          console.error(error);
          return of(false);
        })
      );
  }

  setCustomProperties(config: KeyValueConfig) {
    for (const [key, value] of Object.entries(config)) {
      document.documentElement.style.setProperty(key, value);
    }
  }
}
