import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ModalAlertService } from '../components/modal-alert/modal-alert.service';
import { environment } from 'src/environments/environment';

import { Table } from 'src/app/models/Table';
import { Observable, of, Observer } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Message } from 'src/app/models/Message';
import { Service } from 'src/app/models/Service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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

    public orderSave(obj: any): Observable<any> {
        const options = {
            headers: this.httpHeaders,
            params: {},
        };

        return this.http.post<any>(`${this.url}/api/order/store`, obj , options).pipe(
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
