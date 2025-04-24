import Image from 'next/image';

import { categoriesQuery } from '@/graphql/queries/categories-query';
import { client } from '@/graphql/graphql-request-client';
import { productQuery } from '@/graphql/queries/product-query';

import { StarRating } from '@/components/star-rating';

import type { Category } from '@/types/category';
import type { Product } from '@/types/product';

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

  const {
    product: {
      description,
      image: { url },
      price,
      rating,
      title,
    },
  } = await client.request<{
    product: Product;
  }>(productQuery, { product });

  return (
    <div className="md:grid md:grid-cols-2 md:mt-7">
      <Image
        className="mx-auto my-10 md:m-0 md:h-fit md:w-fit md:justify-self-center"
        alt={`Image of ${title}`}
        height={250}
        src={url}
        width={250}
      />
      <div>
        <h1>{title}</h1>
        <StarRating rating={rating} />
        <p className="text-xl font-medium my-4">€{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
