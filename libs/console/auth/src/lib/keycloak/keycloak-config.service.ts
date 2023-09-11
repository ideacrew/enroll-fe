import { inject, Injectable, isDevMode } from '@angular/core';
import { KeycloakService, KeycloakEventType } from 'keycloak-angular';
import { TenantConfigService } from '@enroll/tenant-config';
import { KEYCLOAK_CONFIG, KeycloakConfig } from './keycloak-config';

export const configKeycloakConfig = (
  config: KeycloakConfigService
  // eslint-disable-next-line arrow-body-style
): (() => Promise<boolean>) => {
  return () => config.loadAndSetConfig();
};

@Injectable({ providedIn: 'root' })
export class KeycloakConfigService {
  hostKey = inject(TenantConfigService).currentTenantMapping.host;
  keycloakConfigs = inject(KEYCLOAK_CONFIG);
  keycloakService = inject(KeycloakService);

  get currentKeycloakMapping(): KeycloakConfig {
    const matchingConfig = this.keycloakConfigs.find((config) =>
      this.hostName.includes(config.host)
    );

    if (matchingConfig === undefined) {
      throw new Error('No matching keycloak config found.');
    }

    return matchingConfig;
  }

  private get hostName(): string {
    return window.location.host;
  }

  logout(): void {
    const logoutLocation = window.location.href;
    this.keycloakService.clearToken();
    void this.keycloakService.logout(logoutLocation);
  }

  loadAndSetConfig(): Promise<boolean> {
    const currentConfig = this.currentKeycloakMapping;
    const initResult = this.keycloakService.init({
      config: {
        url: currentConfig.url,
        realm: currentConfig.realm,
        clientId: currentConfig.clientId,
      },
      initOptions: {
        useNonce: !isDevMode(),
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      updateMinValidity: 300,
    });
    /* eslint-disable unicorn/no-this-assignment */
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const kcService = this;
    /* eslint-enable unicorn/no-this-assignment */
    this.keycloakService.keycloakEvents$.subscribe({
      next(event) {
        if (event.type === KeycloakEventType.OnTokenExpired) {
          kcService.logout();
        }
      },
    });
    return initResult;
  }
}
