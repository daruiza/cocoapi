import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessagesService } from '../messages.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public nameToken: string;
  public user: User;
  public httpHeaders: HttpHeaders;
  public url = `${environment.baseAPI}`;

  constructor(
    protected http: HttpClient,
    private readonly messagesService: MessagesService,
  ) {
    this.nameToken = 'token_cocolu';
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getNameToken(): string {
    return this.nameToken;
  }

  setToken(token: string): void {
    localStorage.setItem(this.nameToken, token);
  }

  checkLogin(): boolean {
    return localStorage.getItem(this.nameToken) && localStorage.getItem(this.nameToken) !== 'undefined' ? true : false;
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
          this.setToken(auth.access_token);

          // this.appService.setHttpHeaders(
          //   new HttpHeaders({
          //     'Content-Type': 'application/json',
          //     Authorization: `Bearer  ${localStorage.getItem(this.nameToken)}`
          //   })
          // );
          // this.httpHeaders = this.appService.getHttpHeaders();

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
    return this.http.get<any>(`${this.url}/auth/logout`,
      options)
      .pipe(
        tap(auth => {
          localStorage.removeItem(this.nameToken);
          // this.appService.setHttpHeaders(
          //   new HttpHeaders({
          //     'Content-Type': 'application/json',
          //   })
          // );
          // this.httpHeaders = this.appService.getHttpHeaders();
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
      this.messagesService.changeMessageControl(error, {
        type: 'danger',
        title: operation,
        text: `${messageError}`
      });
      return of(result as T);
    };
  }
}
