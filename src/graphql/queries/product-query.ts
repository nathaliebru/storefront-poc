import { gql } from 'graphql-request';

export const productQuery = gql`
  query product($product: String!) {
    product(where: { slug: $product }) {
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
