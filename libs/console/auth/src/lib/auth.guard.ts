import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);

  async canActivate(): Promise<boolean> {
    if (this.authService.loggedIn) {
      return true;
    } else {
      await this.router.navigate(['/login']);
      return false;
    }
  }
}
