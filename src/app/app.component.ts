import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
import {SessionManagementService} from "./auth/session-management.service";
import {Platform} from "@ionic/angular";
import {StatusBar} from "@capacitor/status-bar";
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  initializeApp() {
    if (Capacitor.isNativePlatform()){
      this.platform.ready().then(() => {
        StatusBar.setOverlaysWebView({overlay: false});
      }).catch(_ => {
      });
    }
  }
  constructor(private auth : AuthService, protected router : Router, protected session: SessionManagementService, private platform : Platform) {
    this.initializeApp();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
