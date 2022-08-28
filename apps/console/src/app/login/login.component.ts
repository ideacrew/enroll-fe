/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'enroll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  username!: string;
  password!: string;
  realm_name = 'Anthem';

  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.login({
      username: this.username,
      password: this.password,
      realm_name: this.realm_name,
    });
  }
}
