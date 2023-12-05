import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {
  products: Observable<any[]> | undefined;

  constructor(private api: ApiManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.api.productsIndex();
  }

  onDelete(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this employee?');
    if (isConfirmed) {
      this.api.deleteProduct(id).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/products');
        },
        error => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
}

