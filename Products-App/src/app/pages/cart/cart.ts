import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../shared/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  private cartService = inject(CartService);

  get items(): CartItem[] {
    return this.cartService.getItems();
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  inc(item: CartItem): void {
    this.cartService.changeQty(item, +1);
  }

  dec(item: CartItem): void {
    this.cartService.changeQty(item, -1);
  }

  remove(id: number): void {
    this.cartService.remove(id);
  }

  clear(): void {
    this.cartService.clear();
  }
}
