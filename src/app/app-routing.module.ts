import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DasboardComponent} from "./admin/dasboard/dasboard.component";
import {ProductAdminComponent} from "./admin/product-admin/product-admin.component";
import {CategoryAdminComponent} from "./admin/category-admin/category-admin.component";
import {ProductNewComponent} from "./admin/product-new/product-new.component";
import {CategoryNewComponent} from "./admin/category-new/category-new.component";
import {CategoryEditComponent} from "./admin/category-edit/category-edit.component";
import {UserIndexComponent} from "./admin/user-index/user-index.component";
import {UserNewComponent} from "./admin/user-new/user-new.component";
import {UserEditComponent} from "./admin/user-edit/user-edit.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth-guard.guard";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {
    path: '', component: DasboardComponent
  },
  {
    path: 'products', component: ProductAdminComponent, canActivate: [AuthGuard]
  },
  {
    path: 'product/new', component: ProductNewComponent, canActivate: [AuthGuard]
  },
  {
    path: 'categories', component: CategoryAdminComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category/new', component: CategoryNewComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category/edit/:id', component: CategoryEditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'users', component: UserIndexComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user/new', component: UserNewComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
