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
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.getToken() && this.authService.getRoles().includes('ROLE_ADMIN')){
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false
    }
  }
}
