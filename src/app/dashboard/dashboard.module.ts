import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {ForgotpasswordPageModule} from "../forgotpassword/forgotpassword.module";
import {AuthModule} from "../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ForgotpasswordPageModule,
    AuthModule,
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
