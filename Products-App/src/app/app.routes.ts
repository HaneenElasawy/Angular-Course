import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products';
import { ProductDetailsComponent } from './pages/product-details/product-details';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { CartComponent } from './pages/cart/cart';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },

  { path: '**', component: NotFoundComponent },
];
