import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DasboardComponent} from "./admin/dasboard/dasboard.component";
import {ProductAdminComponent} from "./admin/product-admin/product-admin.component";
import {CategoryAdminComponent} from "./admin/category-admin/category-admin.component";
import {ProductNewComponent} from "./admin/product-new/product-new.component";
import {CategoryNewComponent} from "./admin/category-new/category-new.component";
import {CategoryEditComponent} from "./admin/category-edit/category-edit.component";
import {UserIndexComponent} from "./admin/user-index/user-index.component";
import {UserNewComponent} from "./admin/user-new/user-new.component";
import {UserEditComponent} from "./admin/user-edit/user-edit.component";

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
  {
    path: 'users', component: UserIndexComponent
  },
  {
    path: 'user/new', component: UserNewComponent
  },
  {
    path: 'user/edit/:id', component: UserEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
