import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser } from '../interface/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  private apiURL = 'https://business-back-17f67211a6dc.herokuapp.com'

  registerUser(userRegister: RegisterUser ): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(`${this.apiURL}/users`, userRegister)
  }

  loginUser(userLogin: LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(`${this.apiURL}/auth/login`, userLogin)
  }
}
