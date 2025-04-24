import { Product } from './product';

export interface Category {
  description: string;
  id: string;
  products: Product[];
  slug: string;
  title: string;
}
