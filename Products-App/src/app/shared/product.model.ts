export interface Product {
  id: number;
  name: string;
  price: number;
  rate: number;
  stock: number;
  image: string;

  brand?: string;
  category?: string;
  color?: string;
  warranty?: string;
  description?: string;
  features?: string[];
}
