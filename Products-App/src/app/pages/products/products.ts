import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../../components/product-card/product-card';
import { ProductsService, Product } from '../../shared/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.isLoading = false;
      },
    });
  }
}
