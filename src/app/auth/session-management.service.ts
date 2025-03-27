import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {
<<<<<<< HEAD

  constructor() { }
=======
  private sessionKey = 'user_session';
  constructor() { }
  setSession(sessionData: any) {
    localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
  }
  getSession() {
    return localStorage.getItem(this.sessionKey);
  }
  endSession() {
    localStorage.removeItem(this.sessionKey);
  }
  isAuthenticated() {
    console.log(this.getSession());
    return !!this.getSession();
  }
>>>>>>> b96ecd8 (feat(edit): Add edit button to all of the users)
}
