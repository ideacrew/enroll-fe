import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { TenantName } from './tenant-name';
import { tenantMapping } from './url-mapping';

export type TenantConfig = Record<string, string>;

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
  tenant: TenantName = tenantMapping(window.location.host);
  http = inject(HttpClient);

  loadAndSetConfig(): Observable<boolean> {
    return this.http
      .get<TenantConfig>(`/tenant-config/${this.tenant}.json`)
      .pipe(
        map((tenantConfig) => {
          this.setCustomProperties(tenantConfig);
          return true;
        }),
        catchError((error) => {
          console.error(error);
          return of(false);
        })
      );
  }

  setCustomProperties(config: TenantConfig) {
    for (const [key, value] of Object.entries(config)) {
      document.documentElement.style.setProperty(key, value);
    }
  }
}
