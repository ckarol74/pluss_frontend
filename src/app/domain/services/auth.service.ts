import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IRol } from '../models/rol.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private _http: HttpClient, private _router: Router) {}

  registerUser(user: any): Observable<any> {
    const url = `${environment.apiUrl}/auth/register`;
    return this._http.post<any>(url, user, { headers: this.headers });
  }

  loginUser(user: any): Observable<any> {
    const url = `${environment.apiUrl}/auth/login`;
    return this._http.post<any>(url, user, { headers: this.headers });
  }

  setDataLogin(loginData: any) {
    let roles: Array<string> = [];
    loginData.user.roles.map((rol: IRol) => roles.push(rol.descripcion!));
    delete loginData.user.roles;
    let user = { ...loginData, roles };
    let user_string = JSON.stringify(user);
    let token_string = JSON.stringify(loginData.token);
    localStorage.setItem('user.data', user_string);
    localStorage.setItem('tk.access', token_string);
  }

  getUserData(): any | null {
    let user_string = localStorage.getItem('user.data')!;
    if (user_string !== null || user_string !== undefined) {
      let user: any = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem('tk.access')!);
  }

  logout() {
    localStorage.removeItem('user.data');
    localStorage.removeItem('tk.access');
    this._router.navigate(['/']);
  }
}
