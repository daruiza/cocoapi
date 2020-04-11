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

  public closureByStore(idStore: any): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      params: {},
    };
    return this.http.post<any>(`${this.url}/api/closure/index`,
    {
      idStore: `${idStore}`,
    },
    options);
  }
}
