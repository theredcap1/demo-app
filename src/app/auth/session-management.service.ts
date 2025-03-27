import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {
  private sessionKey = 'user_data';
  constructor() { }
  setSession(sessionData: any) {
    localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
  }
  getSession() {
    return JSON.parse(localStorage.getItem(this.sessionKey) || '{}').accessToken;
  }
  endSession() {
    localStorage.removeItem(this.sessionKey);
  }
  isAuthenticated() {
    return !!this.getSession();
  }
}
