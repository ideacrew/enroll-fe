import { lastValueFrom, of } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

export class MockKeycloakService extends KeycloakService {
  constructor(private loggedIn: boolean) {
    super();
  }

  override isLoggedIn() {
    return lastValueFrom(of(this.loggedIn));
  }
}

export const mockLoggedInKeycloakService = new MockKeycloakService(true);
