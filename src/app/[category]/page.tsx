import { gql } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';

import { client } from '@/services/graphql/graphql-request-client';

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const productsQuery = gql`
    query categories($category: String!) {
      category(where: { slug: $category }) {
        products {
          id
          image {
            url
          }
          price
          rating
          slug
          title
        }
        title
      }
    }
  `;

  const data = await client.request<{
    category: {
      products: {
        id: string;
        image: { url: string };
        price: string;
        rating: string;
        slug: string;
        title: string;
      }[];
      title: string;
    };
  }>(productsQuery, { category });

  return (
    <div>
      <h1>{data.category.title}</h1>
      {data.category.products.map((product) => (
        <Link href={`${category}/${product.slug}`} key={product.id}>
          <p>{product.title}</p>
          <Image
            alt={`Image of ${product.title}`}
            height={100}
            src={product.image.url}
            width={100}
          />
          <p>{product.price}</p>
          <p>{product.rating}</p>
        </Link>
      ))}
    </div>
  );
}
