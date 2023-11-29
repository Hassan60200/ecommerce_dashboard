import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DasboardComponent} from "./admin/dasboard/dasboard.component";
import {ProductAdminComponent} from "./admin/product-admin/product-admin.component";

const routes: Routes = [
  {
    path: '', component: DasboardComponent
  },
  {
    path: 'products', component: ProductAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
