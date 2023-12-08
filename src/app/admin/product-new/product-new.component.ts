import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Category} from "../../models/Category";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  title: string = '';
  price: number = 0;
  availaible: boolean = false;
  best: boolean = false;
  category: Category = new Category();
  description: string = '';

  constructor(private api: ApiManagerService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    console.log(this.api.categoriesIndex())
  }

  onSubmit() {
    const formData = {
      title: this.title,
      price: this.price,
      availaible: this.availaible,
      best: this.best,
      category: this.category,
      description: this.description,
    };
    console.log(this.category)
    this.api.addProduct(formData).subscribe((response) => {
      this.router.navigate(['/products']);
    },)
  }

}
