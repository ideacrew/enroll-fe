/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, timer, Subscription } from 'rxjs';

import { TenantConfigService } from '@enroll/tenant-config';

import { TokenResponse } from './authorization-data';
import { JwtAuthService } from './jwt-auth.service';

type LoginCredentials = {
  username: string;
  password: string;
  realm_name: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | undefined = undefined;
  private refreshToken: string | undefined = undefined;
  private expirationTime!: number;
  private tokenTime!: number;
  private logoutTimerSubscription?: Subscription | undefined = undefined;

  http = inject(HttpClient);
  baseApiUrl = inject(TenantConfigService).baseApiUrl;

  constructor(private router: Router, private jwtChecker: JwtAuthService) {
    this.expirationTime = Date.now();
    this.tokenTime = Date.now();
    const currentJwtValues = this.jwtChecker.getJwt();
    if (currentJwtValues) {
      this.token = currentJwtValues.token;
      this.refreshToken = currentJwtValues.refreshToken;
      this.expirationTime = currentJwtValues.expiration;
      this.setLogoutTimer(currentJwtValues.expiration);
    }
  }

  login({ username, password, realm_name }: LoginCredentials): void {
    this.http
      .post<TokenResponse>(`${this.baseApiUrl}/sessions`, {
        username,
        password,
        realm_name,
      })
      .pipe(
        tap(({ token, refresh_token }: TokenResponse) => {
          const tokenValue = this.jwtChecker.setJwt(token, refresh_token);
          if (tokenValue) {
            this.token = tokenValue.token;
            this.refreshToken = tokenValue.refreshToken;
            this.expirationTime = tokenValue.expiration;
            this.tokenTime = Date.now();
            this.setLogoutTimer(tokenValue.expiration);
          }
        })
      )
      .subscribe({
        complete: () => {
          console.log('Login complete, what next?');
          void this.router.navigate(['/']);
        },
      });
  }

  logout(): void {
    this.token = undefined;
    this.jwtChecker.clearJwt();
  }

  refresh(): void {
    this.http
      .post<TokenResponse>(
        `${this.baseApiUrl}/sessions/refresh`,
        {
          refresh_token: this.refreshToken,
        },
        {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          headers: { Authorization: `Bearer ${this.token}` },
        }
      )
      .pipe(
        tap(({ token, refresh_token }: TokenResponse) => {
          const tokenValue = this.jwtChecker.setJwt(token, refresh_token);
          if (tokenValue) {
            this.token = tokenValue.token;
            this.refreshToken = tokenValue.refreshToken;
            this.expirationTime = tokenValue.expiration;
            this.tokenTime = Date.now();
            this.setLogoutTimer(tokenValue.expiration);
          }
        })
      )
      .subscribe({
        complete: () => {
          console.log('Token Refreshed.');
        },
      });
  }

  get loggedIn(): boolean {
    return !!this.token;
  }

  get inRefreshInterval(): boolean {
    const now = Date.now();

    return (
      now < this.expirationTime &&
      now > (this.tokenTime + this.expirationTime) / 2
    );
  }

  setLogoutTimer(timeInMillis: number): void {
    if (this.logoutTimerSubscription) {
      this.logoutTimerSubscription.unsubscribe();
    }
    const logoutTime = new Date(timeInMillis);
    console.log(`Setting timer for: ${logoutTime.toISOString()}`);
    const logoutTimer = timer(logoutTime);
    this.logoutTimerSubscription = logoutTimer.subscribe(() => {
      console.log(
        `Logging out because of timer set for: ${logoutTime.toISOString()}`
      );
      this.expirationTime = Date.now();
      this.token = undefined;
      this.refreshToken = undefined;
      this.jwtChecker.clearJwt();
      void this.router.navigate(['/login']);
    });
  }
}
