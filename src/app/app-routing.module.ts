import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";
import {DashboardPage} from "./dashboard/dashboard.page";
import {ForgotpasswordPage} from "./forgotpassword/forgotpassword.page";
import {HomePage} from "./home/home.page";
import {LoginGuard} from "./login.guard";


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () => {
      const m = await import('./auth/auth.module');
      return m.AuthModule;
    },
    canActivate: [LoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    component: DashboardPage,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'change-password',
    component: ForgotpasswordPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./user-details/user-details.module').then(m => m.UserdetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id/edit',
    loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
