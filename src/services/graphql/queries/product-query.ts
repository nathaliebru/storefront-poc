import { gql } from 'graphql-request';

export const productQuery = gql`
  query product($product: String!) {
    products(where: { slug: $product }) {
      description
      image {
        url
      }
      price
      rating
      title
    }
  }
`;
