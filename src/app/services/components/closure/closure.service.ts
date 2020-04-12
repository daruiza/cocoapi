import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ModalAlertService } from '../modal-alert/modal-alert.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClosureService {

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

  // Consulta la closure actual
  public closureOpen(): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {},
    };
    return this.http.post<any>(`${this.url}/api/closure/open`,
    {},
    options);
  }

  // Cierra la closure actual
  public closureClose(): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {},
    };
    return this.http.post<any>(`${this.url}/api/closure/close`,
    {},
    options);
  }

  public closures(): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {},
    };
    return this.http.post<any>(`${this.url}/api/closure/index`,
    {},
    options);
  }
}
