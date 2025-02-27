import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
  data: any = {};

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.data = this.auth.getUserData();
    if (!this.data || Object.keys(this.data).length === 0) {
      console.log("No user data found, redirecting to login.");
      this.router.navigate(['/auth/login']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
