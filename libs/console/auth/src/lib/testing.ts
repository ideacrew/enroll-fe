import { KeycloakService } from 'keycloak-angular';
import { KeycloakConfig } from './keycloak/keycloak-config';
import { KeycloakConfigService } from './keycloak/keycloak-config.service';

export class MockKeycloakConfigService extends KeycloakConfigService {}

export class MockKeycloakService extends KeycloakService {}

export const MOCK_KEYCLOAK_CONFIG: KeycloakConfig[] = [];
