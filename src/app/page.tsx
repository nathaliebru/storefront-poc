import Link from 'next/link';

import { categoriesQuery } from '@/graphql/queries/categories-query';
import { Category } from '@/types/category';
import { client } from '@/graphql/graphql-request-client';

export default async function Home() {
  const { categories } = await client.request<{
    categories: Category[];
  }>(categoriesQuery);

  return (
    <div className="p-6 font-[family-name:var(--font-geist-sans)]">
      <h1>Categories</h1>
      <div className="flex flex-col">
        {categories.map(({ id, slug, title }) => (
          <Link className="hover:underline" href={slug} key={id}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
