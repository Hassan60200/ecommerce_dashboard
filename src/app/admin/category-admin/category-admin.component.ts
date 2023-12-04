import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {
  categories: Observable<any[]> | undefined;

  constructor(private api: ApiManagerService, private router: Router) {
  }

  ngOnInit() {
    this.categories = this.api.categoriesIndex();
  }

  onDelete(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this employee?');
    if (isConfirmed) {
      this.api.deleteCategory(id).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/categories');
        },
        error => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
}
