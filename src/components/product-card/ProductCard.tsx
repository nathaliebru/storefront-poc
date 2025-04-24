import Image from 'next/image';

import { Product } from '@/types/product';

import { StarRating } from '@/components/star-rating';

export const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-row gap-4 md:block">
    <Image
      alt={`Image of ${product.title}`}
      className="w-auto h-auto md:mb-10 md:m-auto"
      height={100}
      src={product.image.url}
      width={100}
    />
    <div className="flex flex-col gap-2">
      <h4>{product.title}</h4>
      <StarRating rating={product.rating} />
      <p>€{product.price}</p>
    </div>
  </div>
);
