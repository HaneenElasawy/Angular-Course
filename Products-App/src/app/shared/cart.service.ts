import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';
export interface CartItem {
  product: Product;
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  add(product: Product) {
    const items = [...this.items];
    const index = items.findIndex(i => i.product.id === product.id);

    if (index > -1) {
      items[index].qty++;
    } else {
      items.push({ product, qty: 1 });
    }

    this.itemsSubject.next(items);
  }

  changeQty(productId: number, qty: number) {
    const items = this.items.map(item =>
      item.product.id === productId ? { ...item, qty } : item
    ).filter(item => item.qty > 0);

    this.itemsSubject.next(items);
  }

  remove(productId: number) {
    this.itemsSubject.next(
      this.items.filter(i => i.product.id !== productId)
    );
  }

  clear() {
    this.itemsSubject.next([]);
  }

  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.qty,
      0
    );
  }
}
