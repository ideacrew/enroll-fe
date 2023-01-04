import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { JwtAuthService } from '../jwt-auth.service';

@Component({
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  authService = inject(AuthService);

  get userName(): string {
    return this.jwtService.userName;
  }

  constructor(private jwtService: JwtAuthService) {}

  logout() {
    this.authService.logout();
  }
}
