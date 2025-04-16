import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
import {SessionManagementService} from "./auth/session-management.service";
import {Platform} from "@ionic/angular";
import {StatusBar} from "@capacitor/status-bar";
import {Capacitor} from "@capacitor/core";
import {CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint} from "@capacitor/barcode-scanner";

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
  async logout() {
    this.auth.logout();
    await this.router.navigate(['/auth/login']);
  }
  async takePic() {
    alert("here");
    Promise.resolve(CapacitorBarcodeScanner.scanBarcode(
      {hint: CapacitorBarcodeScannerTypeHint.ALL}
    )).then((data) =>
      alert(JSON.stringify(data.ScanResult))
    );

    alert("yo");
  }

  protected Capacitor = Capacitor;
}
