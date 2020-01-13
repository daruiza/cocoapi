import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public token = 'token_cocolu';
  url = `${environment.baseAPI}`;

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'X-Requested-With': 'XMLHttpRequest'
  });
  constructor(
    protected http: HttpClient,
    private readonly messagesService: MessagesService
    ) { }

  checkLogin(): boolean {
    return localStorage.getItem(this.token) && localStorage.getItem(this.token) !== 'undefined' ? true : false;
    // aun falta mirar si ese token esta activo ene l back
  }

  // Login
  public login(email: string, password: string, rememberMe: number = 1): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {
        email: `${email}`,
        password: `${password}`,
        remember_me: rememberMe ? '1' : '0'
      },
      // observe: 'events',
      reportProgress: true
    };
    return this.http.post<any>(`${this.url}/auth/login`,
      {},
      options)
    .pipe(
      // tap(auth => this.auth = auth),
      tap(auth => localStorage.setItem(this.token, auth.access_token)),
      catchError(this.handleError<any>(`Ingreso Fallido`))
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      let messageError = error.error.message;
      if ('errors' in error.error) {
        for (const key in error.error.errors) {
          if (error.error.errors.hasOwnProperty(key)) {
            messageError = `${messageError} ${error.error.errors[key]}`;
          }
        }
      }

      // envio de observable a menajes
      this.messagesService.changeMessageControl( error, {
        type: 'danger',
        title: operation,
        text: `${messageError}`
      });
      return of(result as T);
    };
  }
}
