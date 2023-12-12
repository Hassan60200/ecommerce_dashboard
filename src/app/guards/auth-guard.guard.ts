import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthentificationService} from "../services/Auth/authentification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const rolesExpected = next.data['roles'] as string[];

    if (rolesExpected && rolesExpected.length > 0) {
      const userRoles = this.authService.getRoles();
      const hasRequiredRoles = rolesExpected.every(role => userRoles.includes(role));

      if (!hasRequiredRoles) {
        this.router.navigate(['/login']);
        return false;
      }
    }

    return true;
  }
}
