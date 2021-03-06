import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IUser } from '../../models/User';
import { UserService } from '../entities/user.service';
import { environment } from '../../../environments/environment';
import { Message } from 'src/app/models/Message';
import { ModalAlertService } from '../components/modal-alert/modal-alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public nameToken: string;
  public httpHeaders: HttpHeaders;
  public url = `${environment.baseAPI}`;

  constructor(
    protected http: HttpClient,
    private readonly messagesAlertService: ModalAlertService,
    private readonly userService: UserService,
    private readonly router: Router,
  ) {
    this.nameToken = 'token_cocolu';
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // // Control de usuario
    // this.userGet();
  }

  public getUser(): IUser {
    return this.userService.getUser();
  }

  public getNameToken(): string {
    return this.nameToken;
  }

  public setAccesToken(token: string): void {
    localStorage.setItem(this.nameToken, token);
  }

  public getAccesToken(): string {
    return localStorage.getItem(this.nameToken);
  }

  public userGet(): Observable<any> {
    // si hay token sin usuario
    if (this.checkLogin() && !this.userService.getUser()) {
      return this.userService.getUserBK();
    } else {
      return of(this.userService.getUser());
    }
  }

  public checkLogin(): boolean {
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
    return this.http.post<any>(`${this.url}/api/auth/login`,
      {},
      options)
      .pipe(
        tap(auth => {
          this.setAccesToken(auth.access_token);
          this.userService.setUser(auth.user);
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
    return this.http.get<any>(`${this.url}/api/auth/logout`,
      options)
      .pipe(
        tap(auth => {
          localStorage.removeItem(this.nameToken);
          this.userService.setUser(undefined);
        }),
        catchError(this.handleError<any>(`Salida Fallida`))
      );
  }

  public logoutForce() {
    localStorage.removeItem(this.nameToken);
    this.userService.setUser(undefined);
    this.router.navigate(['/acces/login']);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      let messageError = error.error.message;
      if ('errors' in error.error) {
        for (const key in error.error.errors) {
          if (error.error.errors.hasOwnProperty(key)) {
            messageError = `${messageError} ${error.error.errors[key]}`;
          }
        }
      }

      // envio de mensajes

      return throwError(
        this.messagesAlertService.openAlert(new Message({
          type: 'danger',
          title: operation,
          text: `${messageError}`
        }))
      );
    };
  }
}
