import { Routes } from '@angular/router';
import { ProductListComponent } from '../products/product-list/product-list.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];