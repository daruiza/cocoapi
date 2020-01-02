import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = `${environment.baseAPI}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(protected http: HttpClient) { }


  // Login
  public login(email: string, password: string, rememberMe: boolean = true): Observable<any> {
    const params = {
      params: {
        email: `${email}`,
        password: `${password}`,
        remember_me: `${rememberMe}`
      }
    };
    return this.http.post<any>(`${this.url}/auth/login`, {}, params);
  }
}
