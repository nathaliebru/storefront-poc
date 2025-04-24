import Link from 'next/link';

import { categoriesQuery } from '@/services/graphql/queries/categories-query';
import { Category } from '@/types/category';
import { client } from '@/services/graphql/graphql-request-client';

export default async function Home() {
  const { categories } = await client.request<{
    categories: Category[];
  }>(categoriesQuery);

  return (
    <div className="p-6 font-[family-name:var(--font-geist-sans)]">
      <h1>Categories</h1>
      <div className="flex flex-col">
        {categories.map((category) => (
          <Link href={category.slug} key={category.id}>
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
