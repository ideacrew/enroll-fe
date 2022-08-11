import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.token;

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`),
    });

    // send cloned request with header to the next handler.
    return next.handle(authRequest);
  }
}
