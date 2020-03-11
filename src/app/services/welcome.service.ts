import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ModalAlertService } from './components/modal-alert/modal-alert.service';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  public url = `${environment.baseAPI}`;
  public httpHeaders: HttpHeaders;

  constructor(
    protected http: HttpClient,
    private readonly messagesAlertService: ModalAlertService,
  ) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // Consultamos el pub - Index
  public pub(): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {},
      };
    return this.http.get<any>(`${this.url}/api/pub`, options)
      .pipe(
      tap(pub => {
          // console.log(`Tab ${pub}`);
      }),
      catchError(this.handleError<any>(`Consulta Fallida`))
      );
  }

  public products(): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {},
      };
    return this.http.get<any>(`${this.url}/api/order/products`, options)
      .pipe(
      tap(prods => {
          // console.log(`Tab ${prods}`);
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
