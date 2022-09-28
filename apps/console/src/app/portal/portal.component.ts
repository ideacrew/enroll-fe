import { Component } from '@angular/core';
import { JwtAuthService } from '../jwt-auth.service';

@Component({
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  get userName(): string {
    return this.jwtService.userName;
  }

  constructor(private jwtService: JwtAuthService) {}
}
