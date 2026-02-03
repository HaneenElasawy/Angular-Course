import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PRODUCTS, Product } from './product.data';
import { ProductCardComponent } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  products: Product[] = PRODUCTS;

  onAddToCart(p: Product) {
    console.log('Added to cart:', p);
  }
}
