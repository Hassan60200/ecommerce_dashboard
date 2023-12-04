import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {
  categories: Observable<any[]> | undefined;

  constructor(private api: ApiManagerService) {
  }

  ngOnInit() {
    this.categories = this.api.categoriesIndex();
  }
}
