import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let newHeaders = req.headers;
    if (this.authService.checkLogin()) {
      newHeaders = newHeaders.append(
        'Authorization', `Bearer  ${localStorage.getItem(this.authService.getNameToken())}`
      );
    }
    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq);

  }

}
