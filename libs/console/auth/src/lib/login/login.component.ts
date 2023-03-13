/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'enroll-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  username!: string;
  password!: string;
  realm_name = 'Anthem';
  loginError$ = new BehaviorSubject<boolean>(false);

  authService = inject(AuthService);

  login(): void {
    this.authService.login(
      {
        username: this.username,
        password: this.password,
        realm_name: this.realm_name,
      },
      this
    );
  }

  inputChanged(): void {
    this.loginError$.next(false);
  }
}
