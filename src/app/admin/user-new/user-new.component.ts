import { Component, OnInit } from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit{
constructor(private api: ApiManagerService, private router: Router) {
}

  newUserFirstName: string = '';
  newUserLastName: string = '';
  newUserEmail: string = '';
  newUserRole: string = '';

  ngOnInit() {
    throw new Error('Method not implemented.');
  }
}
