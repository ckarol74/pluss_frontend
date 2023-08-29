import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private $auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/auth')) {
      return next.handle(request);
    }
    const tokenAccess = this.$auth.getAccessToken();
    let authorizationString: string = `Bearer ${tokenAccess}`;
    let req = request.clone({
      setHeaders: {
        Authorization: authorizationString,
      },
    });
    return next.handle(req);
  }
}
