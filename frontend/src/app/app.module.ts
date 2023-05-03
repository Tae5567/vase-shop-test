import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/partials/search/search.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { AddProductsComponent } from './components/pages/add-products/add-products.component';
import { EditProductsComponent } from './components/partials/edit-products/edit-products.component';
import { DeleteProductComponent } from './components/partials/delete-product/delete-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ProductDetailsComponent,
    AddProductsComponent,
    EditProductsComponent,
    DeleteProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
