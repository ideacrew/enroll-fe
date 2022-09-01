import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs';
import { authCodeFlowConfig } from './auth.config';

@Component({
  selector: 'enroll-root',
  template: `<h1>Welcome to App One</h1>
    <div *ngIf="idToken">
      <h2>User</h2>

      <pre>
            {{ claims | json }}
          </pre
      >

      <h2>Id-Token</h2>
      <p>{{ idToken }}</p>

      <h2>Access Token</h2>
      <p>{{ accessToken }}</p>

      <p>
        <button (click)="refresh()">Refresh</button>
      </p>
    </div>`,
  styles: [],
})
export class AppComponent {
  title = 'app-one';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
    this.oauthService.events
      .pipe(filter((event) => event.type === 'token_received'))
      .subscribe({ next: () => this.oauthService.loadUserProfile() });
  }

  get claims(): Record<string, unknown> {
    return this.oauthService.getIdentityClaims() as Record<string, unknown>;
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refresh() {
    this.oauthService.refreshToken();
  }
}
