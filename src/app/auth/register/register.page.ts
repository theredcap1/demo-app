import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  private router: Router = inject(Router);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    password: new FormControl('', [Validators.required]),
    confpass: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService) {}

  async register() {
    if (!this.registerForm.valid) {
      alert("Form data is invalid");
      return;
    }

    const { name, email, phone, password, confpass } = this.registerForm.value;

    if (password !== confpass) {
      alert("Passwords do not match");
      return;
    }

    try {
      const data = await firstValueFrom(this.auth.register({
        username: name,
        phone: phone,
        email: email,
        password: password
      }));

      console.log("Registration successful:", data);
      alert("Registration successful! Redirecting to login...");
      await this.router.navigate(['/auth/login']);
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error(error);
    }
  }
}
