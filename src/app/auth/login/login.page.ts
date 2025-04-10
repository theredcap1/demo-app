import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import {SessionManagementService} from "../session-management.service";
import {UsersService} from "../users.service";

import {Geolocation} from "@capacitor/geolocation";
import {Camera, CameraResultType, CameraPluginPermissions} from "@capacitor/camera";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  private router: Router = inject(Router);
  private session : SessionManagementService = inject(SessionManagementService);
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService, private user : UsersService) {}
  public data: any = {};

  async login() {
    /*alert("here");
    const permissionStatus = await Geolocation.checkPermissions();
    alert(permissionStatus);
    await Geolocation.getCurrentPosition().then(r => {
      alert(JSON.stringify(r));
    });*/
    alert("nah bro");
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    })
    const imageUrl = image.webPath;
    alert(imageUrl);
    if (this.loginForm.invalid) {
      console.log("Please enter valid credentials.");
      return;
    }

    const { user, password } = this.loginForm.value;

    try {
      this.data = await firstValueFrom(this.auth.login(String(user), String(password)));
      if (this.data) {
        this.auth.setUserData(this.data);
        console.log(this.data);
        this.session.setSession(this.auth.getUserData());
        await this.router.navigate(['/']);
      } else {
        new Error("Invalid response data");
      }
    } catch (error) {
      this.user.presentToast("An error occurred during login, please try again.");
      console.log(error);
    }
  }

}
