import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../shared/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  items: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.items$.subscribe((items: CartItem[]) => {
      this.items = items;
      this.total = this.cartService.getTotal();
    });
  }

  inc(item: CartItem) {
    this.cartService.changeQty(item.product.id, item.qty + 1);
  }

  dec(item: CartItem) {
    this.cartService.changeQty(item.product.id, item.qty - 1);
  }

  remove(id: number) {
    this.cartService.remove(id);
  }

  clear() {
    this.cartService.clear();
  }
}
