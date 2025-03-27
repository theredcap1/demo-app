import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
  data: any = {};

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.data = this.auth.getUserData();
  }
}
