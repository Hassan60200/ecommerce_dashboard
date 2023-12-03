import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DasboardComponent} from "./admin/dasboard/dasboard.component";
import {ProductAdminComponent} from "./admin/product-admin/product-admin.component";
import {CategoryAdminComponent} from "./admin/category-admin/category-admin.component";

const routes: Routes = [
  {
    path: '', component: DasboardComponent
  },
  {
    path: 'products', component: ProductAdminComponent
  },
  {
    path: 'categories', component: CategoryAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
