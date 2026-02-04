import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ CartService } from '../../shared/cart.service';
import { PRODUCTS } from './product.data';
import { Product } from '../../shared/product.model';
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
  constructor(private cartService: CartService) {}
onAddToCart(p: Product) {
    console.log('ADD CLICKED =>', p);
    this.cartService.add(p);
}
}
