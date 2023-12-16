import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/Auth/authentification.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  formData!: FormGroup
  isSubmitted: boolean = false

  constructor(private authService: AuthentificationService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  login() {
    if (this.formData.valid) {
      this.authService.login(this.formData.value).subscribe((response: any) => {
          this.isSubmitted = true;
          if (response.roles) {
            this.authService.setRoles(response.roles);
            this.authService.setToken(response.token);
          }
          if (this.authService.hasRole('ROLE_ADMIN') && this.isSubmitted) {
            this.router.navigate(['/']);
          } else {
            this.loginError = 'Vous n\'êtes autorisé à accéder à ce site.';
          }
        },
        (error) => {
          console.error('Erreur d\'authentification :', error);
          this.loginError = 'Erreur d\'authentification. Veuillez vérifier vos identifiants.';
        });
    }
  }
}
