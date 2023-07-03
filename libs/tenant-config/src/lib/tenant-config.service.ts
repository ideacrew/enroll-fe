import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { APPLICATION_NAME, TENANT_CONFIG } from './tenant-config-tokens';
import { TenantName } from './tenant-name';
import { TenantConfig } from './url-mapping';

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
  http = inject(HttpClient);
  tenantConfig: TenantConfig[] = inject(TENANT_CONFIG);

  get currentTenantMapping(): TenantConfig {
    const matchingConfig = this.tenantConfig.find(
      (config) =>
        this.hostName.includes(config.host) &&
        config.application === this.applicationName
    );

    if (matchingConfig === undefined) {
      throw new Error('No matching tenant config found.');
    }

    return matchingConfig;
  }

  get tenantName(): TenantName {
    return this.currentTenantMapping.tenant;
  }

  get baseApiUrl(): string {
    return this.currentTenantMapping.baseApiUrl;
  }

  private get hostName(): string {
    return window.location.host;
  }

  loadAndSetConfig(): Observable<boolean> {
    return this.http
      .get<KeyValueConfig>(`/tenant-config/${this.tenantName}.json`)
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
