import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router : Router) {}
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/auth/login']);
    return false;
  }
}

