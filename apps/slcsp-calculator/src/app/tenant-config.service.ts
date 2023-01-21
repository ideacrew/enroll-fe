import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

export type TenantName = 'me' | 'dc' | 'ma';

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
  tenant = 'me';

  constructor(private http: HttpClient) {
    const host = window.location.host.split('.');
    if (isDevMode()) {
      console.log({ host });
    }
  }

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

  initializeTenant(): void {
    this.tenant = 'me';
  }

  setCustomProperties(config: TenantConfig) {
    for (const [key, value] of Object.entries(config)) {
      document.documentElement.style.setProperty(key, value);
    }
  }
}
