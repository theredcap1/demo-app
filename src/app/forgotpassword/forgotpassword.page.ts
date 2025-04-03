import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  constructor(private http : HttpClient, private auth : AuthService, private router: Router, private user : UsersService) { }


async forgotPass() {
  const {id, accessToken} = this.auth.getUserData();
  const headers = new HttpHeaders({'Authorization': `Bearer ${accessToken}`});


  const {oldpass, newpass, confpass} = this.forgotPasswordForm.value;
  if (this.forgotPasswordForm.invalid) return alert("Enter a new password with a minimum 8 characters long");


  console.log(this.auth.getUserData());



  if (newpass !== confpass) return alert("Check your new password again!");

  if (oldpass === newpass) return alert("Cannot set your new password as the old one!");

  this.auth.refreshToken();

  const {password} = await firstValueFrom((this.http.get<any>(`https://dummyjson.com/auth/me`, {headers})));


  if (password != oldpass) return alert("The password you entered does not match the one on your account!");


  try {
    console.log(this.user.updateUser(id, {password: newpass}));

    await this.user.presentToast("Successfully changed password")

    await this.router.navigate(["/dashboard"]);
  } catch(e) {
    alert("An error occured during changing your password.");
  }
  }
}
