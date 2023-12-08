import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  constructor(private api: ApiManagerService, private router: Router) {
  }

  users: any[] = []

  ngOnInit() {
    this.api.userIndex().subscribe((data) => {
      this.users = data
    })
  }

  onDelete(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this employee?');
    if (isConfirmed) {
      this.api.deleteUser(id).subscribe(
        data => {
          this.router.navigateByUrl('/users');
        },
        error => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
}
