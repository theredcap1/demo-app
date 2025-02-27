import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userData: any = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', { username, password }).pipe(
      tap((response) => {
        console.log("API Response:", response);
        if (response) {
          this.userData = response;
          console.log("User data stored in AuthService:", this.userData);
          this.loggedIn.next(true);
        }
      }),
      catchError((error) => {
        console.error("Login failed:", error);
        return throwError(() => new Error("Login request failed"));
      })
    );
  }

  setUserData(data: any) {
    console.log("Setting user data:", data);
    this.userData = data;
  }

  getUserData() {
    console.log("Retrieving user data:", this.userData);
    return this.userData ?? {};
  }
  isLoggedIn() : boolean {
    return this.loggedIn.getValue();
  }
  setIsLoggedIn(isLoggedIn: boolean) {
    this.loggedIn.next(isLoggedIn);
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
    console.log("Logging out, clearing user data.");
    this.loggedIn.next(false);
    this.userData = null;
  }
}
