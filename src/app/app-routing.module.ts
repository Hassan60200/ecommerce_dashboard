import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DasboardComponent} from "./admin/dasboard/dasboard.component";
import {ProductAdminComponent} from "./admin/product-admin/product-admin.component";
import {CategoryAdminComponent} from "./admin/category-admin/category-admin.component";
import {ProductNewComponent} from "./product-new/product-new.component";
import {CategoryNewComponent} from "./category-new/category-new.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";

const routes: Routes = [
  {
    path: '', component: DasboardComponent
  },
  {
    path: 'products', component: ProductAdminComponent
  },
  {
    path: 'product/new', component: ProductNewComponent
  },
  {
    path: 'categories', component: CategoryAdminComponent
  },
  {
    path: 'category/new', component: CategoryNewComponent
  },
  {
    path: 'category/edit/:id', component: CategoryEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
