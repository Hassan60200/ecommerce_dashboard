import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/Auth/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}
  loginError: string = '';

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    const {email, password} = this.user;
    if (!email || !password) {
      this.loginError = 'Veuillez fournir un email et un mot de passe.';
      return;
    }
    this.authService.login(email, password).subscribe((response: any) => {
        this.authService.setToken(response.token);
        if (response.roles) {
          this.authService.setRoles(response.roles);
        }
        if (this.authService.hasRole('ROLE_ADMIN')) {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.error('Erreur d\'authentification :', error);
        this.loginError = 'Erreur d\'authentification. Veuillez vérifier vos identifiants.';
      });
  }
}