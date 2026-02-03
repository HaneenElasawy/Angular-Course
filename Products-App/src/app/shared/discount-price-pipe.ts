import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice',
  standalone: true,
})
export class DiscountPricePipe implements PipeTransform {
  transform(price: number, discountPercentage?: number): number {
    if (!discountPercentage || discountPercentage <= 0) return price;
    const discount = price * (discountPercentage / 100);
    return Math.round((price - discount) * 100) / 100;
  }
}
