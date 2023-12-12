import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: boolean = false

  constructor(private route: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('token')){
      this.token = true
      console.log(this.token)
    }
  }

  logout() {
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token');
      this.route.navigateByUrl('/login')
    }

  }
}
