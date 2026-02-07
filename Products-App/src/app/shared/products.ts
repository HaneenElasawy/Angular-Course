import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  stock: number;
  rating: number;
  brand?: string;
  category?: string;

  //extra fields for detailed view
  name?: string;
  image?: string;
  rate?: number;
  color?: string;
  warranty?: string;
  features?: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.baseUrl}/products`);
  }


getProductById(id: number) {
  return this.http.get<Product>(
   `${this.baseUrl}/products/${id}`,
    {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      })
    }
  );
}
}
