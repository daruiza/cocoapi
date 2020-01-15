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
    // aun falta mirar si ese token esta activo en el back
  }

  // Login
  public login(email: string, password: string, rememberMe: number = 1): Observable<any> {
    this.httpHeaders.append('Authorization',localStorage.getItem(this.token));
    const options = {
      headers: this.httpHeaders,
      params: {
        email: `${email}`,
        password: `${password}`,
        remember_me: rememberMe ? '1' : '0'
      },
      // observe: 'events',
      // reportProgress: true
    };
    return this.http.post<any>(`${this.url}/auth/logout`,
      {},
      options)
    .pipe(
      // tap(auth => this.auth = auth),
      tap(auth => localStorage.setItem(this.token, auth.access_token)),
      catchError(this.handleError<any>(`Ingreso Fallido`))
    );
  }

  public logout() {
    const options = {
      headers: this.httpHeaders,
      params: {
      },
      // observe: 'events',
      // reportProgress: true
    };
    return this.http.post<any>(`${this.url}/auth/login`,
      {},
      options)
    .pipe(
      tap(auth => {
        console.log(auth);
        localStorage.removeItem(this.token);
      }),
      catchError(this.handleError<any>(`Salida Fallida`))
    );

    // 
    
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
