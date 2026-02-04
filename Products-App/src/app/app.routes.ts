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

  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.RegisterComponent) },
{ path: 'cart', loadComponent: () => import('./pages/cart/cart').then(m => m.CartComponent) },

  { path: '**', component: NotFoundComponent },
];
