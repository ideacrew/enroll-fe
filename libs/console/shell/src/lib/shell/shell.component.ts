import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService, JwtAuthService } from '@enroll/console/auth';

@Component({
  selector: 'enroll-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  authService = inject(AuthService);
  jwtService = inject(JwtAuthService);

  get userName(): string {
    return this.jwtService.userName;
  }

  logout() {
    this.authService.logout();
  }
}
