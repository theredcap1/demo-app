import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {firstValueFrom} from "rxjs";

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

  constructor(private http : HttpClient, private auth : AuthService) { }

  async forgotPass() {
    const {oldpass, newpass, confpass} = this.forgotPasswordForm.value;

    if (this.forgotPasswordForm.invalid) return alert("Check your new password");

    const {id} = this.auth.getUserData();

    console.log(this.auth.getUserData());

    if (newpass !== confpass || !newpass) return alert("Check your new password again!");

    if (oldpass === newpass) return alert("Cannot set your new password as the old one!");

    let resetResult : Object = {};

    try {
      resetResult = await firstValueFrom(this.http.put(`https://dummyjson.com/users/${id}`, {password: newpass}));
    } catch(e) {
      alert("An error occured during changing your password.");
    }
    console.log(resetResult);
  }
}
