import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.baseAPI}`;

  constructor(
    protected http: HttpClient,
  ) { }

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
