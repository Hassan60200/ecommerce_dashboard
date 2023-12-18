import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "./services/Auth/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 token: boolean = false
  constructor(private auth: AuthentificationService) {
  }
  ngOnInit() {
   if (this.auth.getToken() && this.auth.hasRole('ROLE_ADMIN')){
     this.token = true
   }
  }
}
