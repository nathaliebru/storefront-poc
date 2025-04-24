import Link from 'next/link';

import { categoryQuery } from '@/graphql/queries/category-query';
import { client } from '@/graphql/graphql-request-client';

import { ProductCard } from '@/components/product-card';

import type { Category } from '@/types/category';

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const { category: currentCategory } = await client.request<{
    category: Category;
  }>(categoryQuery, {
    category,
  });

  return (
    <>
      <h1 className="mb-2">{currentCategory.title}</h1>
      <p className="mb-4">{currentCategory.description}</p>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {currentCategory.products.map((product) => (
          <Link
            className="border rounded-lg border-gray-300 p-4 hover:border-gray-500"
            href={`${category}/${product.slug}`}
            key={product.id}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  );
}
