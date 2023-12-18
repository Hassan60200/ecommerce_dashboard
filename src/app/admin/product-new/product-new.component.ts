import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  formData !: FormGroup
  listCategories: Observable<any[]> | undefined;
  isSubmitted: boolean = false

  constructor(private api: ApiManagerService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.formData = this.formBuilder.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      isAvailaible: [null, [Validators.required]],
      isBest: [false, [Validators.required]],
      category: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  onSubmit() {
    if (this.formData.valid) {
      this.isSubmitted = true;
      this.api.addProduct(this.formData.value).subscribe((response) => {
        this.router.navigate(['/products']);
      },)
    }
  }

  getCategoryList() {
    this.listCategories = this.api.categoriesIndex()
  }

}
