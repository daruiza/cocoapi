import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private token = 'token_cocolu';
  private httpHeaders: HttpHeaders;
  constructor() { this.initHttpHeaders(); }

  initHttpHeaders() {
    if (this.checkLogin()) {
      this.httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${localStorage.getItem(this.token)}`
      });
    } else {
      this.httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }
  }

  checkLogin(): boolean {
    return localStorage.getItem(this.token) && localStorage.getItem(this.token) !== 'undefined' ? true : false;
  }


  // GETTER Y SETTERS

  getHttpHeaders(): HttpHeaders {
    return this.httpHeaders;
  }

  getToken(): string {
    return this.token;
  }

  setHttpHeaders(httpHeaders: HttpHeaders): void {
    this.httpHeaders = httpHeaders;
  }

  setToken(token: string): void {
    this.token = token;
  }

}
