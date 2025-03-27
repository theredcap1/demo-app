import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject, Injectable} from "@angular/core";
import {SessionManagementService} from "./session-management.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router : Router) {}
  private session : SessionManagementService = inject(SessionManagementService);
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
    console.log("we here");
    console.log(this.session.isAuthenticated());
    if (this.session.isAuthenticated()) return true;
    this.router.navigate(['/auth/login']);
    return false;
  }
}

