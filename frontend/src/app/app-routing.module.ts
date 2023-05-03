import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { AddProductsComponent } from './components/pages/add-products/add-products.component';
import { EditProductsComponent } from './components/partials/edit-products/edit-products.component';


const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: HomeComponent,
    path: 'search/:searchTerm',
  },
  {
    component: ProductDetailsComponent,
    path: 'vases/:id',
  },
  {
    component: AddProductsComponent,
    path: 'add',
  },
  {
    component: EditProductsComponent,
    path: 'edit',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
