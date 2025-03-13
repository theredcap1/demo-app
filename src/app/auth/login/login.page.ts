import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { firstValueFrom } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  private router: Router = inject(Router);
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService) {}
  public data: any = {};

  async login() {
    if (this.loginForm.invalid) {
      console.log("Please enter valid credentials.");
      return;
    }

    const { user, password } = this.loginForm.value;

    try {
      this.data = await firstValueFrom(this.auth.login(String(user), String(password)));

      if (this.data) {
        this.auth.setUserData(this.data);
        console.log(this.data)
        localStorage.setItem('isLoggedIn', 'true');
        await this.router.navigate(['/']);
      } else {
        new Error("Invalid response data");
      }
    } catch (error) {
      alert("An error occurred during login, please try again.");
      console.log(error);
    }
  }

}
