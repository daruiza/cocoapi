import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, IUser } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Message } from 'src/app/models/Message';
import { ModalAlertService } from '../modal-alert/modal-alert.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public url = `${environment.baseAPI}`;
  public httpHeaders: HttpHeaders;
  public user: IUser;


  constructor(
    protected http: HttpClient,
    private readonly messagesAlertService: ModalAlertService,
  ) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public getUser(): IUser {
    return this.user;
  }

  public setUser(user: IUser): void {
    this.user = user;
  }

  public getUserBK(): Observable<User> {
    const options = {
      headers: this.httpHeaders,
      params: {
      },
      // observe: 'events',
      // reportProgress: true
    };
    return this.http.get<User>(`${this.url}/user`, options)
      .pipe(
        tap(user => {
          this.setUser(user);
        }),
        catchError(this.handleError<any>(`Consulta Fallida`))
      );
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
      this.messagesAlertService.openAlert(new Message({
        type: 'danger',
        title: operation,
        text: `${messageError}`
      }));
      return of(result as T);
    };
  }
}
