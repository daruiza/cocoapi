import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  public url = `${environment.baseAPI}`;
  public httpHeaders: HttpHeaders;

  constructor(
    protected http: HttpClient,
    private readonly messagesService: MessagesService,
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
    return this.http.get<any>(`${this.url}/pub`, options)
      .pipe(
      tap(pub => {
          // console.log(`Tab ${pub}`);
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
      // envio de observable a menajes
      
      // this.messagesService.changeMessageControl(error, {
      //   type: 'danger',
      //   title: operation,
      //   text: `${messageError}`
      // });

      return of(result as T);
    };
  }
}
