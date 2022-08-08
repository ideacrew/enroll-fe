/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';

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
      .post('http://localhost:3000/sessions', {
        username: this.username,
        password: this.password,
        realm_name: 'Carrier',
      })
      .pipe(catchError(() => of({ token: '', refresh_token: '' })))
      .subscribe();
  }
}
