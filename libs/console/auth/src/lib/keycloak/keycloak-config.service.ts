import { inject, Injectable, isDevMode } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
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

  private get hostName(): string {
    return window.location.host;
  }

  get currentKeycloakMapping(): KeycloakConfig {
    const matchingConfig = this.keycloakConfigs.find((config) =>
      this.hostName.includes(config.host)
    );

    if (matchingConfig === undefined) {
      throw new Error('No matching keycloak config found.');
    }

    return matchingConfig;
  }

  loadAndSetConfig(): Promise<boolean> {
    const currentConfig = this.currentKeycloakMapping;
    return this.keycloakService.init({
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
    });
  }
}
