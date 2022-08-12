/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { TokenResponse } from './authorization-data';
import { JwtAuthService } from './jwt-auth.service';

interface LoginCredentials {
  username: string;
  password: string;
  realm_name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: string;
  refreshToken!: string;
  expirationTime!: number;
  jwtChecker!: JwtAuthService;

  constructor(private http: HttpClient, private router: Router) {
    this.expirationTime = Date.now();
    this.jwtChecker = new JwtAuthService();
    const currentJwtValues = this.jwtChecker.getJwt();
    if (currentJwtValues) {
      this.token = currentJwtValues.token;
      this.refreshToken = currentJwtValues.refreshToken;
      this.expirationTime = currentJwtValues.expiration;
    }
  }

  login({ username, password, realm_name }: LoginCredentials): void {
    this.http
      .post<TokenResponse>('/api/sessions', {
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
          }
        })
      )
      .subscribe({
        complete: () => {
          console.log('Login complete, what next?');
          this.router.navigate(['/carrier-portal']);
        },
      });
  }

  refresh(): void {
    this.http
      .post<TokenResponse>('/api/sessions/refresh', {
        refresh_token: this.refreshToken,
      })
      .pipe(
        tap(({ token, refresh_token }: TokenResponse) => {
          const tokenValue = this.jwtChecker.setJwt(token, refresh_token);
          if (tokenValue) {
            this.token = tokenValue.token;
            this.refreshToken = tokenValue.refreshToken;
            this.expirationTime = tokenValue.expiration;
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
}
