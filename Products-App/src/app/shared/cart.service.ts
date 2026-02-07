import { Injectable } from '@angular/core';
import { Product } from './products';

export interface CartItem {
  product: Product;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];

  add(product: Product): void {
    const found = this.items.find(i => i.product.id === product.id);
    if (found) found.qty++;
    else this.items.push({ product, qty: 1 });
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  }

  remove(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  clear(): void {
    this.items = [];
  }

  changeQty(item: CartItem, delta: number): void {
    item.qty += delta;
    if (item.qty <= 0) this.remove(item.product.id);
  }
}
