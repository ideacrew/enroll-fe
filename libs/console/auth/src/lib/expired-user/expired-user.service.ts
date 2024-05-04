import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExpiredUserService {
  router: Router = inject(Router);

  latestError: any = null;

  public showLatestError() : any {
    return this.latestError;
  }

  public routeToExpired(err: any) {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    this.latestError = err;
        /* eslint-enable @typescript-eslint/no-unsafe-assignment */
    void this.router.navigateByUrl('/auth/expired-user');
  }
}
