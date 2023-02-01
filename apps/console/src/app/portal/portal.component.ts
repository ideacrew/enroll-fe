import { Component, inject } from '@angular/core';
import { AuthService, JwtAuthService } from '@enroll/console/auth';

@Component({
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  authService = inject(AuthService);
  jwtService = inject(JwtAuthService);

  get userName(): string {
    return this.jwtService.userName;
  }

  logout() {
    this.authService.logout();
  }
}
