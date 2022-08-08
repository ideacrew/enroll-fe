/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  login(): void {
    console.log(`Login as ${this.username}`);

    this.http
      .post<TokenResponse>('http://localhost:3000/sessions', {
        username: this.username,
        password: this.password,
        realm_name: 'Carrier',
      })
      .pipe(
        tap((response: TokenResponse) => void console.log({ response })),
        catchError(() => of({ token: '', refresh_token: '' }))
      )
      .subscribe();
  }
}
