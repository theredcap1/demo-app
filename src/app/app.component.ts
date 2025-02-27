import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}
  logout() {
    const log = localStorage.getItem('isLoggedIn');
    localStorage.removeItem('isLoggedIn');
    console.log(localStorage);
    localStorage.clear();
  }
}
