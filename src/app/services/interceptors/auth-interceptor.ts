import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, combineLatest, timer, throwError, of } from 'rxjs';
import { map, catchError, finalize, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ModalAlertService } from '../components/modal-alert/modal-alert.service';
import { Message } from 'src/app/models/Message';
import { LoadingService } from '../components/loading/loading.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  nameToken = 'token_cocolu';

  constructor(
    private readonly authService: AuthService,
    private readonly messagesAlertService: ModalAlertService,
    private readonly loadingService: LoadingService
    ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    setTimeout(() => {
      this.loadingService.showLoading();
    });
    let newHeaders = req.headers;
    if (this.authService.checkLogin()) {
      newHeaders = newHeaders.append(
        'Authorization', `Bearer  ${localStorage.getItem(this.authService.getNameToken())}`
      );
    }
    const authReq = req.clone({ headers: newHeaders });
    return next.handle(authReq).pipe(
      catchError(this.handleError<any>(`Interceptor Fallido`)),
      finalize(() => {
        setTimeout(() => {
          this.loadingService.hideLoading();
        });
      })
    );
  }

  public checkLogin(): boolean {
    return localStorage.getItem(this.nameToken) && localStorage.getItem(this.nameToken) !== 'undefined' ? true : false;
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

      // Si el error es de autenticación
      if (error.status === 401 || error.status === 403) {
        // logout Manual
        this.authService.logoutForce();
        return of(result as T);
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
