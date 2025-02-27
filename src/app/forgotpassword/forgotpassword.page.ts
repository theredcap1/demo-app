import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
  standalone: false
})
export class ForgotpasswordPage {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor() { }

  forgotPass() {
    const formData = this.forgotPasswordForm.value;
    if (this.forgotPasswordForm.invalid) {
      alert("Reenter your email");
    } else {
      alert("Your request has been sent.");
      this.forgotPasswordForm.reset();
    }

  }
}
