import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private auth : AuthService, protected router : Router) {}
  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
