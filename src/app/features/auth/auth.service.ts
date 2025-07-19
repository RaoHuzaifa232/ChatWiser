import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _baseUrl = 'http://localhost:9000';
  private readonly _http = inject(HttpClient);

  signUp(user: any) {
    this._http.post(`${this._baseUrl}/auth/signup`, user).subscribe({
      next: (res) => {
        console.log('Signup', res);
      },
      error: (error) => {},
    });
  }

 async login(userLogin: {}): Promise<any> {
    this._http.post(`${this._baseUrl}/auth/login`, userLogin).subscribe({
      next: (res) => {
        console.log('Login', res);
      },
      error: (error) => {},
    });
  }
}
