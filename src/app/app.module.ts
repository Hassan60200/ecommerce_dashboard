import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './admin/dasboard/dasboard.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    UserAdminComponent,
    OrderAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
