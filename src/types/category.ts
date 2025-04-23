import { Product } from './product';

export interface CategoryInterface {
  category: {
    description: string;
    products: Product[];
    title: string;
  };
}
