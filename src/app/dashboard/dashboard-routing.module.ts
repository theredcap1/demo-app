import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import {ForgotpasswordPage} from "../forgotpassword/forgotpassword.page";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'change-password',
    component: ForgotpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
