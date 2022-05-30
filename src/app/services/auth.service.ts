import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router,private api: DataService) {}

  // Here I set token check in LocalStorage
  // In live project I've to check if tocken is valid or not, based on i will return true or false

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // Here i implemeted a static check....
  login( loginForm: any): Observable<any> {

    // In live project i h've to connect this portion with API
    if (loginForm.loginName === 'admin@sutra.earth' && loginForm.loginPass === 'Admin1') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Admin', email: 'admin@sutra.earth' });
    }
    return throwError(new Error('Failed to login'));
  }

  
}
