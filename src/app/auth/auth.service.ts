import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {SessionManagementService} from "./session-management.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: any = {};

  constructor(private http: HttpClient, private session : SessionManagementService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', { username, password }).pipe(
      tap((response) => {
        if (response) {
          this.userData = ({...response});
        }
      }),
      catchError((error) => {
        console.error("Login failed:", error);
        return throwError(() => new Error("Login request failed"));
      })
    );
  }

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData ?? {};
  }
  register(user: any): Observable<any> {
    return this.http.post('https://dummyjson.com/users/add', {
      username: user.username,
      phone: user.phone,
      email: user.email,
      password: user.password,
      age: 25
    });
  }
  logout() {
    this.session.endSession();
  }
}
