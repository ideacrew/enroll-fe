/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { TokenResponse } from './authorization-data';

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

  constructor(private http: HttpClient, private router: Router) {}

  login({ username, password, realm_name }: LoginCredentials): void {
    this.http
      .post<TokenResponse>('/api/sessions', {
        username,
        password,
        realm_name,
      })
      .pipe(
        tap(({ token, refresh_token }: TokenResponse) => {
          this.token = token;
          this.refreshToken = refresh_token;
        })
      )
      .subscribe({
        complete: () => {
          console.log('Login complete, what next?');
          this.router.navigate(['/carrier-portal']);
        },
      });
  }

  get loggedIn(): boolean {
    return !!this.token;
  }
}
