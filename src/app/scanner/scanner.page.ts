import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHint,
} from "@capacitor/barcode-scanner";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  standalone: false,
})
export class ScannerPage implements OnDestroy, ViewWillEnter {
  scanResult : string = "";

  constructor() {}

  ionViewWillEnter() {
    this.scanResult = "";
  }

  async takePic() {
    Promise.resolve(CapacitorBarcodeScanner.scanBarcode(
      {hint: CapacitorBarcodeScannerTypeHint.ALL}
    )).then((data) => {
      this.scanResult = data.ScanResult;
    });
  }

  ngOnDestroy() {
    alert(this.scanResult);
    const result = document.querySelector("#result") || document.createElement("div");
    result.innerHTML = "";
  }
}
