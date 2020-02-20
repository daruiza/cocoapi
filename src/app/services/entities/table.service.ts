import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ModalAlertService } from '../components/modal-alert/modal-alert.service';

import { Table } from 'src/app/models/Table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public url = `${environment.baseAPI}`;
  public httpHeaders: HttpHeaders;
  public user: Table;

  constructor(
    protected http: HttpClient,
    private readonly messagesAlertService: ModalAlertService,
  ) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
