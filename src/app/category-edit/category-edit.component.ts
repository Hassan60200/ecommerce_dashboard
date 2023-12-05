import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/API/api-manager.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../models/Category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  id!: number;
  category: Category = new Category()

  constructor(private api: ApiManagerService, private router: Router, private route: ActivatedRoute) {
  }

  onSubmit() {
    console.log(this.category);
    this.api.editCategory(this.id, this.category).subscribe(data => {
      this.router.navigateByUrl('/categories');
    }, error => console.log(error));
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.api.getCategoryById(this.id).subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  };
}


