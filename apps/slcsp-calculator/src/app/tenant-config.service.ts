import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

export type TenantName = 'me' | 'dc' | 'ma';

export type ColorConfig = Record<string, string>;

export const configFactory = (
  config: TenantConfigService
  // eslint-disable-next-line arrow-body-style
): (() => Observable<boolean>) => {
  return () => config.loadAndSetColors();
};

@Injectable({
  providedIn: 'root',
})
export class TenantConfigService {
  tenant = 'me';

  constructor(private http: HttpClient) {
    const host = window.location.host.split('.');
    console.log({ host });
  }

  loadAndSetColors(): Observable<boolean> {
    return this.http
      .get<ColorConfig>(`/tenant-config/${this.tenant}-colors.json`)
      .pipe(
        map((colorConfig) => {
          this.setCustomProperties(colorConfig);
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

  setCustomProperties(config: ColorConfig) {
    for (const [key, value] of Object.entries(config)) {
      document.documentElement.style.setProperty(key, value);
    }
  }
}