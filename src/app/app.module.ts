import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CustmerComponent } from './pages/admin/custmer/custmer.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { CustomerOrdersComponent } from './pages/website/customer-orders/customer-orders.component';
import { LandingComponent } from './pages/website/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CustmerComponent,
    CategoriesComponent,
    LayoutComponent,
    LoginComponent,
    OrderComponent,
    ProductsComponent,
    CategoryProductsComponent,
    CheckoutComponent,
    CustomerCartComponent,
    CustomerOrdersComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
