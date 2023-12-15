import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './admin/dasboard/dasboard.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductNewComponent } from './admin/product-new/product-new.component';
import { CategoryNewComponent } from './admin/category-new/category-new.component';
import { CategoryEditComponent } from './admin/category-edit/category-edit.component';
import { UserIndexComponent } from './admin/user-index/user-index.component';
import { UserNewComponent } from './admin/user-new/user-new.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    OrderAdminComponent,
    HeaderComponent,
    ProductNewComponent,
    CategoryNewComponent,
    CategoryEditComponent,
    UserIndexComponent,
    UserNewComponent,
    UserEditComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
