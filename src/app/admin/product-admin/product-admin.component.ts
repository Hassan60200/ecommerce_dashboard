import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {
  products: Observable<any[]> | undefined;

  constructor(private api: ApiManagerService) {
  }

  ngOnInit(): void {
    this.products = this.api.productsIndex();
  }
}

