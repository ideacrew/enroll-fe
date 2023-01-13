import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  async canActivate(): Promise<boolean> {
    if (this.auth.loggedIn) {
      return true;
    } else {
      await this.router.navigate(['/login']);
      return false;
    }
  }

  constructor(private auth: AuthService, private router: Router) {}
}
