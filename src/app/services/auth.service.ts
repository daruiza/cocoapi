import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessagesService } from './messages.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public token = 'token_cocolu';
  public user: User;
  public httpHeaders: HttpHeaders;
  public url = `${environment.baseAPI}`;

  constructor(
    protected http: HttpClient,
    private readonly messagesService: MessagesService
    ) {
      this.setHttpHeaders();
    }

  setHttpHeaders() {
    if (this.checkLogin()) {
      this.httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${localStorage.getItem(this.token)}`
      });
    } else {
      this.httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }
  }

  checkLogin(): boolean {
    return localStorage.getItem(this.token) && localStorage.getItem(this.token) !== 'undefined' ? true : false;
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
      // reportProgress: true
    };
    return this.http.post<any>(`${this.url}/auth/login`,
      {},
      options)
    .pipe(
      tap(auth => {
        console.log(auth);
        localStorage.setItem(this.token, auth.access_token);
        this.httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer  ${localStorage.getItem(this.token)}`
        });

      }),
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
    console.log(localStorage.getItem(this.token));
    console.log(options);
    return this.http.get<any>(`${this.url}/auth/logout`,
      options)
    .pipe(
      tap(auth => {
        console.log(auth);
        localStorage.removeItem(this.token);
        this.httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
        });
      }),
      catchError(this.handleError<any>(`Salida Fallida`))
    );
  }

  public getUser() {

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
