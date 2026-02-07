import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService, Product } from '../../shared/products';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = Number(idStr);

    console.log('idStr FROM ROUTE =', idStr);
    console.log('id AS NUMBER =', id);

    if (!idStr || Number.isNaN(id)) {
      this.isLoading = false;
      this.product = null;
      return;
    }

    this.productsService.getProductById(id).subscribe({
      next: (p) => {
        console.log('PRODUCT FROM API =', p);
        this.product = p;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('ERROR LOADING PRODUCT =', err);
        this.product = null;
        this.isLoading = false;
      },
    });
  }

  addToCart(): void {
    if (this.product) this.cartService.add(this.product);
  }
}
