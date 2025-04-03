import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {firstValueFrom} from "rxjs";
import {Router} from "@angular/router";
import {UsersService} from "../auth/users.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
  standalone: false
})
export class ForgotpasswordPage {
  forgotPasswordForm = new FormGroup({
    oldpass: new FormControl('', [Validators.required]),
    newpass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confpass: new FormControl('', [Validators.required])
  })

  constructor(private auth : AuthService, private router: Router, private user : UsersService) { }


async forgotPass() {
  const {id} = this.auth.getUserData();


  const {oldpass, newpass, confpass} = this.forgotPasswordForm.value;
  if (this.forgotPasswordForm.invalid) return this.user.presentToast("Enter a new password with a minimum 8 characters long");


  if (newpass !== confpass) return this.user.presentToast("Check your new password again!");

  if (oldpass === newpass) return this.user.presentToast("Cannot set your new password as the old one!");

  this.auth.refreshToken();

  const {password} = await firstValueFrom(this.user.fetchUserDetails(id));


  if (password != oldpass) return this.user.presentToast("The password you entered does not match the one on your account!");


  try {
    this.user.updateUser(id, {password: newpass});

    await this.user.presentToast("Successfully changed password")

    await this.router.navigate(["/dashboard"]);
  } catch(e) {
    this.user.presentToast("An error occured during changing your password.");
  }
  }
}
