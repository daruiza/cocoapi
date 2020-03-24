import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ModalAlertService } from '../components/modal-alert/modal-alert.service';

import { Table } from 'src/app/models/Table';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Message } from 'src/app/models/Message';
import { Service } from 'src/app/models/Service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public url = `${environment.baseAPI}`;
  public httpHeaders: HttpHeaders;
  public table: Table;

  constructor(
    protected http: HttpClient,
    private readonly messagesAlertService: ModalAlertService,
  ) {
    this.table = new Table();
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public setTable(table: Table) {
    this.table = this.table !== table ? table : new Table();
  }

  // Consulta la existencia de un servicio
  public tableServiceOpen(id: number): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {
      },
      // observe: 'events',
      // reportProgress: true
    };
    return this.http.get<Service>(`${this.url}/api/table/${id}/serviceopen`, options)
      .pipe(
        tap(serv => {
          // console.log(serv);
        }),
        map((res) => res[0]),
        catchError(this.handleError<any>(`Consulta Fallida`))
      );
  }

  public tableServiceSave(idTable: number, name: string, description: string = null): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {
        table_id: `${idTable}`,
        name: `${name}`,
        description: `${description}`
      },
      // observe: 'events',
      // reportProgress: true
    };
    return this.http.post<any>(`${this.url}/api/table/servicesave`, options)
      .pipe(
        tap(serv => {
          // console.log(serv);
        }),
        catchError(this.handleError<any>(`Consulta Fallida`))
      );
  }

  public tableServiceClose(idTable: number, idService: number, close = false): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {
        table_id: `${idTable}`,
        service_id: `${idService}`,
        service_close: `${close}`,
      }
      // observe: 'events',
      // reportProgress: true
    };
    return this.http.post<Service>(`${this.url}/api/table/serviceclose`, options)
      .pipe(
        tap(serv => {
          // console.log(serv);
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
