import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { AuthRoutingModule } from './auth-routing.module';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  providers: [provideHttpClient()]
})
export class AuthModule { }
