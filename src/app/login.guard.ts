import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthGuard} from "./auth/auth.guard";
import {Injectable} from "@angular/core";
import {SessionManagementService} from "./auth/session-management.service";

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private auth : AuthGuard, private router : Router, private session : SessionManagementService) {

  }

  canActivate(route : ActivatedRouteSnapshot, _state : RouterStateSnapshot) : boolean {
    console.log(route);
    if (this.session.isAuthenticated()) {
      this.router.navigate(["/dashboard"]);
      return false;
    }
    return true;
  }
}
