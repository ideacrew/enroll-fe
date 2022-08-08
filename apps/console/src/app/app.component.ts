import { Component } from '@angular/core';

@Component({
  selector: 'enroll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'console';

  username!: string;
  password!: string;

  login(): void {
    console.log(`Login as ${this.username}`);
  }
}
