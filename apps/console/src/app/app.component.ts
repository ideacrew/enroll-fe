/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

import { AuthService } from './auth.service';
import { TokenResponse } from './authorization-data';

@Component({
  selector: 'enroll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'console';

  username!: string;
  password!: string;

  constructor(private http: HttpClient, private auth: AuthService) {}

  login(): void {
    console.log(`Login as ${this.username}`);

    this.http
      .post<TokenResponse>('/api/sessions', {
        username: this.username,
        password: this.password,
        realm_name: 'Anthem',
      })
      .pipe(
        tap(({ token, refresh_token }: TokenResponse) => {
          this.auth.token = token;
          this.auth.refreshToken = refresh_token;
        }),
        catchError(() =>
          of({ token: 'empty-token', refresh_token: 'empty-refresh-token' })
        )
      )
      .subscribe();
  }
}
