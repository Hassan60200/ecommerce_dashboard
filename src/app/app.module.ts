import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './admin/dasboard/dasboard.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductNewComponent } from './product-new/product-new.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    UserAdminComponent,
    OrderAdminComponent,
    HeaderComponent,
    ProductNewComponent,
    CategoryNewComponent,
    CategoryEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
