import { gql } from 'graphql-request';
import Link from 'next/link';

import { client } from '@/services/graphql/graphql-request-client';

export default async function Home() {
  const categoriesQuery = gql`
    {
      categories {
        id
        slug
        title
      }
    }
  `;

  const { categories } = await client.request<{
    categories: { slug: string; title: string; id: string }[];
  }>(categoriesQuery);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {categories.map((category) => (
        <Link href={category.slug} key={category.id}>
          {category.title}
        </Link>
      ))}
    </div>
  );
}
