import Image from 'next/image';

import { categoriesQuery } from '@/services/graphql/queries/categories-query';
import { Category } from '@/types/category';
import { client } from '@/services/graphql/graphql-request-client';
import type { Product } from '@/types/product';
import { productQuery } from '@/services/graphql/queries/product-query';
import { StarRating } from '@/components/star-rating';

export async function generateStaticParams() {
  const { categories } = await client.request<{
    categories: Category[];
  }>(categoriesQuery);

  return categories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      product: product.slug,
    })),
  );
}

export default async function Product({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;

  const { products } = await client.request<{ products: Product[] }>(
    productQuery,
    { product },
  );

  const currentProduct = products[0];

  return (
    <div className="md:grid md:grid-cols-2 md:mt-7">
      <Image
        className="m-auto mt-10 mb-10 md:m-0 md:h-fit md:w-fit md:justify-self-center"
        alt={`Image of ${currentProduct.title}`}
        height={250}
        src={currentProduct.image.url}
        width={250}
      />
      <div>
        <h1>{currentProduct.title}</h1>
        <StarRating rating={currentProduct.rating} />
        <p className="text-xl font-medium mt-4 mb-4">€{currentProduct.price}</p>
        <p>{currentProduct.description}</p>
      </div>
    </div>
  );
}
