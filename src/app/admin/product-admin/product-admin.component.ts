import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {
  products: Observable<any[]> | undefined;
  currentPage = 1;
  constructor(private api: ApiManagerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.api.productsIndex(1);
  }

  onLoadMore(): void{
    this.currentPage++;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge'
    });
    this.products = this.api.productsIndex(2);
  }

  onLoadPrevious(): void{
    this.currentPage--;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge'
    });
    this.products = this.api.productsIndex(1);
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

