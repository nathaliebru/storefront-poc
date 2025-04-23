import Link from 'next/link';

import { CategoryInterface } from '@/types/category';
import { categoryQuery } from '@/services/graphql/queries/category-query';
import { client } from '@/services/graphql/graphql-request-client';
import { ProductCard } from '@/components/product-card';

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data = await client.request<CategoryInterface>(categoryQuery, {
    category,
  });

  return (
    <div>
      <h1 className="mb-2">{data.category.title}</h1>
      <p className="mb-4">{data.category.description}</p>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {data.category.products.map((product) => (
          <Link
            className="border rounded-lg border-gray-300 p-4"
            href={`${category}/${product.slug}`}
            key={product.id}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
